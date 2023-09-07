---
title: Linting Rules for Design Unit Locations
linting: vhdl
---

It can be good practice to separate the primary units in a design and declare them in separate files.
Similarly, guidelines exist for where secondary units should be declared in relation to other secondary units or to their corresponding primary unit.
Sigasi Studio can enforce where design units are defined in relation to other design units.

# File contains multiple primary units

Every primary unit should live in a separate file (rule 242).

<pre>package pkg1 is
end package;

package <span class="warning">pkg2</span> is    -- more than 1 primary unit in the file
end package;</pre>

## Secondary unit in unexpected file

Secondary units can be either in the same file as their corresponding primary unit, or in a separate file (rule 243).

This option can be configured for the following secondary units:
 - Architecture of an entity with a single architecture
 - Architecture of an entity with multiple architectures
 - Package body

There are multiple options for the secondary file location:
 - Don't check
 - In the same file as the corresponding primary unit.
 - In a separate file.

{{% lintrule 242 243 %}}
