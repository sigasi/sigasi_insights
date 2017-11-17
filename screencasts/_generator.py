#!/usr/bin/python
import string 
sigasi2edited=[
("526cjmykbv", "Mixed languages: instantiating Verilog in VHDL code"),
("zxgn5q9sz0", "Mixed Languages: Verilog and VHDL"),
("w5j5rutbu2", "Documentation View"),
("tuap814tan", "Block Diagram"),
("05r5pssbak", "Datatype checks while you type"),
("igcin45lg3", "Create template for (others =&gt; 'X') "),
("asr4pf7p8e", "Auto indent/unindent prototype"),
("wgvxcid2uv", "Add library and use clause for IEEE"),
("e50ec446a0", "Hierarchy View"),
("fce5eabed4", "Hierarchy Uses Generic"),
("e3ce98a26d", "Open Model Element"),
("33c60d6093", "Instantiating entities and components"),
("d8028ffad5", "Setting up GRLIB"),
("accea9d39f", "VHDL 2008 in Sigasi 2.2"),
("005c230266", "Autocomplete for VHDL records"),
("314d98955e", "Select code, based on its structure"),
("e398f4ab2f", "Tour of Sigasi 2.0 Editing"),
("b46e42a905", "EclipseScreenSnapz006.m4v"),
("9441655b1c", "Editing without a Project"),
("7b20151b4f", "Context Sensitive Autocomplete"),
("027420032a", "See the values of constants in VHDL"),
("e19132786c", "Move and Duplicate Lines of Code")]

hdt2=[
("tji7o0vwyt", "State Machine Viewer"),
("na5z420wn7", "Sigasi as companion tool for Quartus II"),
("3u7i9mke6z", "Inspecting Constants and Generics"),
("4ps97awpit", "Writing Finite State Machines in VHDL"),
("q326w5nthd", "Custom Linting"),
("gi58zr86jk", "Code generation scripts"),
("ugefe6fkhm", "Sigasi Pro integration with Altera Quartus II"),
("ywnjk97nv6", "Integration with Xilinx ISim HDL Simulator"),
("gixhn4zno6", "Writing State Machines"),
("kc61dsmssv", "Organizing views and windows"),
("efw03up0ck", "Power navigation for VHDL state machines"),
("dx5xapuiyv", "Inspecting generics"),
("3f7ba5f0d5", "Save-time compilation"),
("36865dbffa", "Create a testbench with autocomplete"),
("cfca85334c", "Record Autocomplete"),
("1ba2d8d48c", "Signal Declaration"),
("bb3a0e1692", "Quick Intro to Sigasi"),
("50bd52752e", "Hierarchy View"),
]
sigasi_hdt=[
("pz6zwyq308", "Block Diagram view"),
("nfwg48z1rq", "autocomplete_for_conversion_functions"),
("95a3d6c4de", "Running ModelSim on your Mac"),
("f527c24113", "Workaround to align comments"),
("3498c18048", "Install Eclipse Plugins from the Marketplace"),
("33f620ec94", "ModelSim Errors and Warnings"),
("416feed60a", "VHDL Navigation"),
("5d5168ee0f", "Quick Fixes"),
("f3510ad24c", "Rename Refactoring"),
("5ca938db46", "Direct Feedback"),
("370ae7a361", "Bookmarks"),
("30cf86ee3d", "Block Selection for VHDL Code Editing"),
("15792430f2", "ModelSim Integration (Labs)"),
("bf4524a04d", "Templates for File Headers"),
("08eccca0be", "ModelSim Compilation with Sigasi"),
("8fd8e13096", "Rename"),
("52d17b1b42", "Subversion Checkouts"),
("0fb5770799", "Split Screen Editing"),
("b3ed9db563", "Record Autocompletion"),
("7ac3e153ec", "Entity Component Instantiation"),
("09343cf87b", "Hover to evaluate Hexadecimal Values"),
("f2e996aa28", "Hovering to see comments"),
("1d4e5c3351", "Settings Shortcuts"),
("2c34803715", "Adding Ports to VHDL Entities"),
("2d21ae215a", "Emacs VHDL Mode: navigation is broken"),
("be2ee7fec8", "Bookmarks"),
("48c931e2de", "Block Select for VHDL code Manipulation"),
("880771d405", "Wizard for New VHDL Files"),
("b8c8886911", "VHDL Code Comprehension"),
("08aeab9075", "ModelSim VHDL markers"),
("d9914d4979", "ModelSim Plugin [mute]"),
("c989a97003", "Direct feedback [mute]"),
("518c6fd556", "Quick Fixes [mute]")
]

collection=[
	("dir1",sigasi2edited),
	("dir2",sigasi_hdt),
	("dir3",hdt2),
]

template = string.Template("""---
title: "$title"
layout: screencast 
pager: false
comments: false
videoid: $id
---
""")
for (dir,videos) in collection:
	for (id,title) in videos:
		content = template.substitute(id=id,title=title)
		f= file(id+".md",'w')
		f.write(content)
		f.close()
