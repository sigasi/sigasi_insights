---
title: Linting Rules for Design Unit Locations
linting: vhdl
---

It can be good practice to separate the primary units in a design and declare them in separate files.
Similarly, guidelines exist for where secondary units should be declared in relation to other secondary units or to their corresponding primary unit.
Sigasi Studio can enforce where design units are defined in relation to other design units.

### File contains multiple primary units

Every primary unit should live in a separate file.

<pre>package pkg1 is
end package;

package <span class="warning">pkg2</span> is    -- more than 1 primary unit in the file
end package;</pre>

### Secondary unit in unexpected file

Secondary units are more flexible. Sigasi can suggest to put them either
in the same file as their corresponding primary unit, or in a separate
file (or not check them at all). You can configure this separately
for the architecture of entities with a single architecture, for the
architectures of an entity with multiple architectures, and for package
bodies.

{{% ruleConfiguration many=yes %}}
{{< rule id=242 comment="Primary unit location" />}}
{{< rule id=243 comment="Secondary unit location" >}}
{{< param/enumeration single_architecture same_file_as_primary separate_file ignore >}}
{{< param/enumeration multiple_architectures separate_file same_file_as_primary ignore >}}
{{< param/enumeration package_body separate_file same_file_as_primary ignore >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
