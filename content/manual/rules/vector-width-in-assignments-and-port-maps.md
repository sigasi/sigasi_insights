---
title: Vector Width in Assignments and Port Maps
linting: vhdl
---

Sigasi Studio checks the vector size in assignments and port maps. This check works at type-time and takes the (symbolic) value of generics into account.

{{< figure src="/img/manual/linting_vector_width.png" >}}

Sigasi Studio will not take into account the value assigned to a generic in instantiations. The reasoning behind this is explained [here](/tech/generic-port-width).

{{% lintrule 144 %}}
