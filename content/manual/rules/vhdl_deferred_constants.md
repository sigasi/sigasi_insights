---
title: Linting Rules for Deferred Constants
linting: vhdl
---

Sigasi Studio can check for a number of problems related to deferred constants that the VHDL language reference mandates:

## Duplicate declaration

A deferred constant cannot reassign its initial value to a different value (rule 54).

<pre>package pkg is
    constant foo : integer := 2;
    constant bar : boolean;
end package;

package body pkg is
    constant <span class="warning">foo</span> : integer := 3;    -- foo was already assigned a value
    constant <span class="goodcode">bar</span> : boolean := false;
end package body;</pre>

## Missing full constant declaration

If a constant declaration in a package has no initial value, it shall have a deferred constant declaration in the package body with a matching initial value (rule 233).

<pre>package pkg is
    constant a : integer;
    constant b, c : boolean;
end package;

package body <span class="warning">pkg</span> is
    constant a : integer := 3;
    constant b : boolean := false;    -- c was not assigned a value
end package body;</pre>

## Incorrect full constant declaration subtype

The type of a deferred constant declaration in the package body must match the type of the constant declaration in the package (rule 234).

<pre>package pkg is
    constant foo : boolean;
    constant bar : integer;
end package;

package body pkg is
    constant <span class="warning">foo</span> : integer := 8;   -- foo was declared as a boolean in the package
    constant <span class="goodcode">bar</span> : integer := 7;
end package body;</pre>

<!-- Not configurable -->
