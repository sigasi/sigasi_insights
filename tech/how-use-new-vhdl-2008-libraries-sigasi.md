---
title: "How to use the new VHDL 2008 libraries in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2012-02-08
tags: 
  - VHDL-2008
  - Sigasi
  - hdt-2.0
comments: true
bannerad: true
---


The VHDL 2008 standard (1076-2008) revises and adds extra functionality to the STD and IEEE libraries. In an upcoming release, Sigasi will ship these revised libraries with the Sigasi VHDL tool. Until that time, you have to jump a few hoops to get everything to work with the latest libraries. This blog post describes how.

1. Make sure Sigas is set to VHDL 2008 (**Window > Preferences > VHDL > VHDL version**)
2. Library IEEE
	1. Delete the old **IEEE** folder in the **Common Libraries** folder of your Sigasi project.
	2. Download the IEEE library from the [IEEE website](http://standards.ieee.org/downloads/1076/1076-2008)
	3. Unzip and add the **IEEE** folder to your project
	4. Map this folder to IEEE (right click **Library mapping > ieee**)
3. Library STD
	1. Add a folder **STD** to your project
	2. Map this folder to STD (right click **Library mapping > std**)
	3. Create a new file in this folder: `workaround.vhd` and add following content

```vhdl
/*
 * Temporary hack to add extra declarations to the std library 
 */

package standard is
	type BOOLEAN_VECTOR is array (NATURAL range <>) of BOOLEAN; 
	type INTEGER_VECTOR is array (NATURAL range <>) of INTEGER; 
	type REAL_VECTOR is array (NATURAL range <>) of REAL; 
	type TIME_VECTOR is array (NATURAL range <>) of TIME; 
end standard;

package textio is
    function JUSTIFY (VALUE : STRING; JUSTIFIED : SIDE := right; FIELD : WIDTH := 0) return STRING;

    procedure SREAD (L    : inout LINE; VALUE : out STRING; STRLEN : out NATURAL);
    alias STRING_READ is SREAD [LINE, STRING, NATURAL];
    
    alias BREAD is READ [LINE, BIT_VECTOR, BOOLEAN];
    alias BREAD is READ [LINE, BIT_VECTOR];
    alias BINARY_READ is READ [LINE, BIT_VECTOR, BOOLEAN];
    alias BINARY_READ is READ [LINE, BIT_VECTOR];

    procedure OREAD (L    : inout LINE; VALUE : out BIT_VECTOR; GOOD : out BOOLEAN);
    procedure OREAD (L    : inout LINE; VALUE : out BIT_VECTOR);
    alias OCTAL_READ is OREAD [LINE, BIT_VECTOR, BOOLEAN];
    alias OCTAL_READ is OREAD [LINE, BIT_VECTOR];

    procedure HREAD (L    : inout LINE; VALUE : out BIT_VECTOR; GOOD : out BOOLEAN);
    procedure HREAD (L    : inout LINE; VALUE : out BIT_VECTOR);
    alias HEX_READ is HREAD [LINE, BIT_VECTOR, BOOLEAN];
    alias HEX_READ is HREAD [LINE, BIT_VECTOR];
end package textio;
```
