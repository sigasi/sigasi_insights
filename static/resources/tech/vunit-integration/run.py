# For a Verilog project, change the next line to `from vunit.verilog import VUnit`
from vunit import VUnit
from pathlib import Path
import glob
import os
import xml.etree.ElementTree as ET

# Create VUnit instance by parsing command line arguments
vu = VUnit.from_argv()
# A container for all libraries in the VUnit framework
libraries = dict()


def sigasi_extract_reference_projects(basedir='.'):
    refs = []
    try:
        root = ET.parse(os.path.join(basedir, '.project')).getroot()
        for element in root.findall("./projects/project"):
            project = element.text
            if os.path.isdir(os.path.join(os.getcwd(), '..', project)):
                print("Found subproject: " + project)
                refs.append(project)
            else:
                print("Error: subproject not found: " + project)
                exit(1)
    except IOError:
        print("No .project in " + basedir)
    return refs


def sigasi_map_vunit_library(worklib=None, basedir='.'):
    refs = sigasi_extract_reference_projects(basedir)
    for refproject in refs:
        sigasi_map_vunit_library(worklib, os.path.join(os.getcwd(), '..', refproject))

    print('Mapping design files in directory ' + basedir)

    # Create a list of HDL files in the project
    basepath = basedir + "/**/"
    hdlfiles = glob.glob(basepath + '*.vhd', recursive=True)
    hdlfiles.extend(glob.glob(basepath + '*.vhdl', recursive=True))
    hdlfiles.extend(glob.glob(basepath + '*.v', recursive=True))
    hdlfiles.extend(glob.glob(basepath + '*.sv', recursive=True))
    hdlfiles = [w.replace('\\', '/') for w in hdlfiles]
    print('  HDL files: ' + str(hdlfiles))
    # Read the library mapping as tuples (path, library)
    libmappings = []
    root = ET.parse(os.path.join(basedir, '.library_mapping.xml')).getroot()
    for element in root.findall("Mappings"):
        newmap = (element.attrib['Location'], element.attrib['Library'])
        libmappings.append(newmap)
    libmappings.sort(key=lambda x: len(x[0]), reverse=True)
    print('  Library mapping: ' + str(libmappings))
    # Map files to libraries
    # Add libraries on the fly
    basepos = 1 + len(basedir)
    for designfile in hdlfiles:
        for libmap in libmappings:
            if designfile.startswith(libmap[0], basepos):
                if libmap[1] == 'work':
                    if worklib is None:
                        print('\n\n**ERROR** a library named `work` is not allowed in VUnit when mapping file ' + designfile)
                        print('\nIt is recommended to rename your library `work` to a different name.')
                        print('Alternatively, call `sigasi_map_vunit_library()` with a work library name as its first argument to map `work` to a different name')
                        exit(1)
                    libname = worklib
                else:
                    libname = libmap[1]
                if libname == 'not mapped':
                    print(' Not mapping file ' + designfile)
                else:
                    if not libname in libraries:
                        print(' Adding new library ' + libname)
                        libraries[libname] = vu.add_library(libname)
                    print(' Mapping file ' + designfile + ' to library ' + libname)
                    libraries[libname].add_source_files(designfile)
                break  # inner loop: process next design file


# Map libraries and files based on Sigasi Studio project and library mapping files
sigasi_map_vunit_library('worklib')

# Run vunit function
vu.main()
