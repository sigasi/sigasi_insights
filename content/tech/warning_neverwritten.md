---
title: "Should a default value count as a write?"
date: 2019-08-28T09:31:18+02:00
publishdate: 2019-08-28
lastmod: 2019-08-28
pager: true
author: Bart Brosens
comments: true
bannerad: true
---

# An unexpected warning

Recently, one of our customers asked why Sigasi Studio was giving a warning on his code.
The warning told him a specific variable in a function was never written.
The code in this function indeed only reads the variable. However, the variable was declared using a default assignment.

{{< figure src="/img/tech/warning_neverwritten.png" alt="Example code with warnings" link="/img/tech/warning_neverwritten.png" class="uk-align-right" >}}

Since the default assignment makes sure the variable is initialized,
it can be used throughout the code and the code is fully functional.

_Then why is Sigasi Studio giving a warning?_

Doesn't the initialization count as a **write**?

## More details on the 'never written' warning

This warning is one of Sigasi Studio's [linting rules]({{< ref "/manual/eclipse/linting" >}}).
The specific linting rule that generates this warning is available if you have an {{< xl >}} or {{< xprt >}} license. 

As the image shows, this warning exists for both signals and variables.

# A better look at the code

If you want to resolve this warning without [suppressing]({{< ref "/manual/eclipse/linting#suppressing-warnings" >}}) it,
you do have a better alternative.

When you carefully look at the signal and variable declarations and their uses in the process,
you could conclude that both the signal and the variable are used as a `constant`.

Functionally, the code below is identical to the code in the screenshot.
```vhdl
architecture RTL of variableNeverWritten is
    constant s_neverwritten : integer := 42;
begin
    p_process : process(clk, rst, s_neverwritten) is
        constant v_neverwritten : integer := 42;
    begin
        if rst = '1' then
            if v_neverwritten = 10 then
            end if;
            if s_neverwritten = 10 then
            end if;

        elsif rising_edge(clk) then

        end if;
    end process p_process;
end architecture RTL;
```

# Conclusion
While you still can argue whether or not a default initialisation should count as a write,
the warning here alerts us to the fact that both the signal and the variable are used as constants,
which seems an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern).
Someone else reading this code will have to spend time on finding that out too.

Since the language provides them, why not use constants then?
It will tell a reader immediately what the purpose is and thus make your code more readable.
That reader could also be you in a couple of months.

After all, helping to improve your code is what linter warnings are about.
