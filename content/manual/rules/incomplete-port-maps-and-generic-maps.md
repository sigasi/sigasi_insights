---
title: Incomplete Port Maps and Generic Maps
---

Sigasi Studio warns about port maps and generic maps that are not complete:  
**Port map is using default values. Missing optional actuals: yourport**

Input ports and generics need to be be assigned in your instantiation
statement, if they don’t already have a default value. If you don’t do
this, you are writing illegal VHDL. Sigasi Studio will mark an error, and so
will all other tools.

Input ports and generics with a default value, as well as output ports
do not need to be assigned explicitly. However, this is often not
intended. For that reason, Sigasi Studio can warn you about this.

{{< figure src="/img/manual/warn-incomplete-map.png" >}}

{{% lintrule 94 %}}
