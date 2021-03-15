---
title: Linting rules types in expressions
---

Sigasi Studio flags an error if a type is used in an expression.

<pre>architecture RTL of type_in_expr is
    type t_foo is (one, two);
begin
    p : process is
    begin
        case <span class="badcode">t_foo</span> is   -- a type cannot be used in an expression e.g. a case expression
            when one =>
        end case;
    end process p;
end architecture RTL;
</pre>

<pre>architecture RTL of type_in_expr is
    type t_foo is (one, two);
    signal s_foo: t_foo;
begin
    p : process is
    begin
        case <span class="goodcode">s_foo</span> is   -- use a signal or variable of the required type in expressions
            when one =>
        end case;
    end process p;
end architecture RTL;
</pre>

{{% lintrule 219 %}}
