---
title: "VHDL 2019: Conditional Analysis"
layout: page
pager: true
author: Pavel Parchenko
date: 2022-07-28
tags:
  - VHDL
  - VHDL-2019
  - Preprocessor
comments: true
bannerad: true
---

If you are writing universal, portable VHDL code, be it a design that targets multiple chip families, or a library that should work with multiple simulators, you may have noticed that it can be quite challenging to make things work everywhere.
Different vendors provide their own macros and IPs, simulators provide their own utility libraries, tools support different VHDL attributes. Your code may be treated differently or even fail to compile if it uses language features that are not supported by one of the tools.

In all these cases, to get similar behavior it's possible to find a proper approach for each tool, but it requires using different vendors or tool-specific VHDL code.
So portability is basically a question of how to organize these specific code pieces.

Prior to VHDL 2019, you could use VHDL language features such as generics, generate statements, or configurations. But besides the fact that these options work only in limited contexts, using them also requires all code to be compilable with all target tools.

In order to solve compilation problems, one may try to split their design in such a way as to have parts that differ in separate design units and files, and maintain compilation lists for each configuration. This is certainly an option, but a pretty tedious one.
If it's only about having simulation specific code, `pragma translate_off/on` comments may do the trick, however, they are of no help in other cases.
Nevertheless, such comments may be considered a primitive version of full-fledged preprocessors that are available in some other languages. Going further in this direction, you may find some external preprocessor implementations for VHDL that bring greater levels of customizability but also create a hassle when trying to integrate them into your workflow.

Now, VHDL 2019 has added a preprocessor (Conditional Analysis) to the language standard. Unfortunately, the EDA market is not as fast as one would like when it comes to adopting the latest standards. However, there is good news: some simulators and synthesis tools already support Conditional Analysis. And now there is an IDE that does it too.

Let's look at what Conditional Analysis is and how it can help solve the aforementioned problems.

# Conditional directives

VHDL Conditional Analysis represents a simplified subset of preprocessing directives found in the SystemVerilog or C languages.
Conditional directives in VHDL do not allow complex preprocessor magic, so metaprogramming is not an option. But, by keeping it simple, the code remains readable and maintainable.

What you can do is enable or disable analysis of portions of the design code based on the current tool, your custom configuration, or even on the VHDL standard used to parse the file. For example, the following snippets are equivalent:

```vhdl
-- pragma translate_off
  signal valid : std_ulogic := '0';
-- pragma translate_on
```

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">TOOL_TYPE</span> <span class="o">/=</span> <span class="s">"SYNTHESIS"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="k">signal</span> <span class="n">valid</span> <span class="o">:</span> <span class="kt">std_ulogic</span> <span class="o">:=</span> <span class="sc">'0'</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span></code></pre></div>

The second code snippet is an example of a conditional `` `if `` directive: here we check the tool type, and if it's not a synthesis tool we declare a `valid` signal.
Code in disabled `` `if `` directive branches is completely omitted during the compilation process, so it does not have to contain compilable code:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">DUMMY</span> <span class="o">=</span> <span class="s">""</span> <span class="k">xor</span> <span class="n">DUMMY</span> <span class="o">=</span> <span class="s">""</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="c1">You can use conditional directives for multiline comments,</span>
</span></span><span class="line"><span class="cl">  <span class="c1">however, that would definitely be an abuse</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span>
</span></span></code></pre></div>

The syntax for the conditional directives is similar to VHDL's `if` statement syntax. However, being tool directives by nature, they can be used anywhere throughout design code, e.g:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">LIB</span> <span class="o">=</span> <span class="s">"some"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl"><span class="c1">library some;</span>
</span></span><span class="line"><span class="cl"><span class="c1">use some.all;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`elsif</span> <span class="n">lib</span> <span class="o">=</span> <span class="s">"other"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl"><span class="c1">library other;</span>
</span></span><span class="line"><span class="cl"><span class="c1">use other.all;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`else</span>
</span></span><span class="line"><span class="cl"><span class="k">library</span> <span class="nn">general</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">use</span> <span class="nn">general.</span><span class="k">all</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span></code></pre></div>

Conditions that can be used in conditional directives are limited to comparing conditional identifiers with constant, literal values. You may combine such comparisons in complex expressions:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="p">(</span><span class="n">BOARD</span> <span class="o">=</span> <span class="s">"MAIN"</span> <span class="k">and</span> <span class="n">REV</span> <span class="o">&gt;=</span> <span class="s">"1.2"</span><span class="p">)</span> <span class="k">or</span> <span class="n">DEBUG</span> <span class="o">/=</span> <span class="s">""</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">    <span class="c1">...</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span>
</span></span></code></pre></div>

It is also possible to write nested conditional directives. If the upper-level directive condition is not satisfied, nested directives will be disabled similar to other VHDL code:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">TOOL_TYPE</span> <span class="o">=</span> <span class="s">"SIMULATION"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="c1">-- Using a simulator</span>
</span></span><span class="line"><span class="cl">  <span class="kn">`if</span> <span class="n">VHDL_VERSION</span> <span class="o">&gt;=</span> <span class="s">"2008"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">    <span class="c1">-- Newer VHDL version simulation code</span>
</span></span><span class="line"><span class="cl">  <span class="kn">`else</span>
</span></span><span class="line"><span class="cl">    <span class="c1">-- Older VHDL version simulation code</span>
</span></span><span class="line"><span class="cl">  <span class="kn">`end</span> <span class="kn">if</span>
</span></span><span class="line"><span class="cl"><span class="kn">`else</span>
</span></span><span class="line"><span class="cl">  <span class="c1">-- Not a simulator</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span></code></pre></div>

All conditional identifiers have string values. Comparison follows general VHDL rules. Conditional identifiers are not case sensitive while their values are.
And if an identifier is not defined, its value is considered to be an empty string `""` (e.g. in the previous example we are checking whether the `DEBUG` identifier is defined).
But let's move on and discuss conditional identifiers.

# Conditional identifiers

There's a bunch of identifiers that are provided by a tool:

- `TOOL_TYPE`
- `TOOL_VENDOR`
- `TOOL_NAME`
- `TOOL_EDITION`
- `TOOL_VERSION`
- `VHDL_VERSION`

Identifiers starting with `TOOL_` can be used to determine what tool is used to analyze VHDL code. In addition, `VHDL_VERSION` stores the VHDL version that was used to analyze the file (possible values are `"1987"`, `"1993"`, `"2000"`, `"2002"`, `"2008"` or `"2019"`). It may look strange that `VHDL_VERSION` can have values of standards prior to VHDL 2019, but tools that support VHDL 2019 may actually make Conditional Analysis available when compiling files using previous standards, too (consult your tool documentation to confirm this).

Values of `TOOL_TYPE` can be either `"SIMULATION"`, `"SYNTHESIS"` or `"FORMAL"`. As for `TOOL_VERSION`, it's safe to use ordering operators (`<`, `>=`, ...) to check the version, as newer versions should always be greater than previous ones. Other predefined identifier values are effectively at the discretion of the tool vendor. Here are some examples of what these values can be:

```
TOOL_TYPE    = "SIMULATION"
TOOL_VENDOR  = "Aldec"
TOOL_NAME    = "Riviera-PRO"
TOOL_EDITION = "2020.04 Linux64"
TOOL_VERSION = "2020.04.130.7729"
```

```
TOOL_TYPE    = "SYNTHESIS"
TOOL_VENDOR  = "INTEL CORPORATION"
TOOL_NAME    = "QUARTUS"
TOOL_EDITION = "PRIME PRO"
TOOL_VERSION = "21.3.0"
```

Apart from using predefined identifiers, you are free to define your own conditional identifiers and specify their values.
However, the VHDL standard does not provide the possibility to do this from within VHDL code itself, allowing instead for each tool to implement its own way of providing custom conditional identifiers. You'll have to check your tool documentation, but it's basically either adding them as arguments to the compiler invocation, setting them in tool preferences, or supplying a file in a tool-specific format with custom definitions.

Note that because of these differences, it may be harder to organize different sets of conditional identifiers and values for different parts of your design if you are targeting multiple tools.

# Conditional issues

Other than `` `if `` conditional directives there are also `` `warning `` and `` `error `` directives that can produce compilation warnings or errors.
They can be used to indicate what conditional branch is active or stop compilation if a specific combination of conditional values is not supported:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">RST_TYPE</span> <span class="o">=</span> <span class="s">"async"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="c1">`warning "Reset type is set to async. Beware of asynchronous reset crossings"</span>
</span></span><span class="line"><span class="cl"><span class="kn">`elsif</span> <span class="n">RST_TYPE</span> <span class="o">/=</span> <span class="s">"sync"</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="kn">`error</span> <span class="s">"Unsupported reset type. Please set RST_TYPE to either `sync` or `async`"</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span></code></pre></div>

The parameter in these directives is a message string literal. You can not concatenate any conditional identifier values.

# Standard package

Predefined conditional identifier values are also available as regular VHDL constants in the `std.env` package, making them usable in regular VHDL expressions.
For example, you can check if your simulator supports Conditional Analysis and what values predefined conditional identifiers have, by running the following code:

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-vhdl" data-lang="vhdl"><span class="line"><span class="cl"><span class="k">use</span> <span class="nn">std.env.</span><span class="k">all</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">entity</span> <span class="nc">check</span> <span class="k">is</span>
</span></span><span class="line"><span class="cl"><span class="k">end</span> <span class="k">entity</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">architecture</span> <span class="nc">behavioral</span> <span class="k">of</span> <span class="nc">check</span> <span class="k">is</span>
</span></span><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">VHDL_VERSION</span> <span class="o">=</span> <span class="s">""</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">  <span class="c1">constant TOOL_TYPE    : string := "n/a";</span>
</span></span><span class="line"><span class="cl">  <span class="c1">constant TOOL_VENDOR  : string := "n/a";</span>
</span></span><span class="line"><span class="cl">  <span class="c1">constant TOOL_NAME    : string := "n/a";</span>
</span></span><span class="line"><span class="cl">  <span class="c1">constant TOOL_EDITION : string := "n/a";</span>
</span></span><span class="line"><span class="cl">  <span class="c1">constant TOOL_VERSION : string := "n/a";</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span><span class="line"><span class="cl"><span class="k">begin</span>
</span></span><span class="line"><span class="cl">  <span class="n">status</span> <span class="o">:</span> <span class="k">process</span>
</span></span><span class="line"><span class="cl">  <span class="k">begin</span>
</span></span><span class="line"><span class="cl">    <span class="n">report</span> <span class="s">"Tool has "</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`if</span> <span class="n">VHDL_VERSION</span> <span class="o">=</span> <span class="s">""</span> <span class="kn">then</span>
</span></span><span class="line"><span class="cl">    <span class="c1">"NO " &amp;</span>
</span></span><span class="line"><span class="cl"><span class="kn">`end</span> <span class="kn">if</span>
</span></span><span class="line"><span class="cl">    <span class="s">"support for VHDL 2019 Conditional Analysis:"</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"VHDL VERSION = "</span> <span class="o">&amp;</span> <span class="n">VHDL_VERSION</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"TOOL TYPE    = "</span> <span class="o">&amp;</span> <span class="n">TOOL_TYPE</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"TOOL VENDOR  = "</span> <span class="o">&amp;</span> <span class="n">TOOL_VENDOR</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"TOOL NAME    = "</span> <span class="o">&amp;</span> <span class="n">TOOL_NAME</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"TOOL EDITION = "</span> <span class="o">&amp;</span> <span class="n">TOOL_EDITION</span> <span class="o">&amp;</span> <span class="n">LF</span> <span class="o">&amp;</span>
</span></span><span class="line"><span class="cl">    <span class="s">"TOOL VERSION = "</span> <span class="o">&amp;</span> <span class="n">TOOL_VERSION</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="k">wait</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="k">end</span> <span class="k">process</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">end</span> <span class="k">architecture</span><span class="p">;</span>
</span></span></code></pre></div>

**NOTE:** In this example, if your simulator supports Conditional Analysis, it will use variables from `std.env` package, otherwise it should ignore unsupported directives and use dummy constants. The proper message is constructed in a similar manner.

# Conditional Analysis and Sigasi Studio

Both Sigasi Studio and [Sigasi's extension for VS Code]({{< ref "/vscode" >}}) support VHDL Conditional Analysis: directives highlighting and formatting, hovers with conditional identifier values, type-time syntax error reporting, conditional warnings and errors, definitions for your own conditional identifiers, as well as configuration of default identifiers to mimic your target simulator or synthesis tool:

{{< figure src="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" link="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" title="VHDL 2019 Tool Directives in Sigasi Studio">}}

Check out [this video]({{< ref "/screencasts/vhdl_2019_conditional_analysis.md" >}}) to see Conditional Analysis in action.
