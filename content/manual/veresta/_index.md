---
title: "Sigasi Veresta"
layout: single
pager: true
aliases:
  - /sigasi_cli/
  - /cli/
  - /veresta/
menu:
  insightsmenu:
    parent: Manual
    weight: 40
---

Sigasi Veresta is the Command Line Interface (CLI) that brings the Sigasi technology to your CI/CD environment.

# Requirements

## License

In order to use Sigasi Veresta you will need a license. The license can be configured by either:

- A license file in your home directory, named `.sigasi.lic`
- Using an environment variable:
  - `SIGASI_LM_LICENSE_FILE`
  - `LM_LICENSE_FILE`

For more information about licenses, please refer to our [manual](/manual/eclipse/license-key).

If the license is not available, Veresta will start polling the license server at regular intervals until the license can be obtained.

# Installation

To install Sigasi Veresta, obtain a build ZIP for your operating system and extract it.
Then use either `veresta` (Linux) or `veresta.bat` (Windows).

# Usage

```
veresta [COMMAND] [ARGUMENTS]
```

## Help

You can get usage information by adding the `--help` or `-h` flag.
You can also use this flag for each command to get usage information for those commands specifically.

<pre>
<span class="no-select">$ </span>veresta --help
Usage: <b>veresta</b> [<span style="color:#C4A000">-hV</span>] [<span style="color:#C4A000">-v</span> | <span style="color:#C4A000">--debug</span>] [COMMAND]
  <span style="color:#C4A000">-h</span>, <span style="color:#C4A000">--help</span>      Show this help message and exit.
  <span style="color:#C4A000">-V</span>, <span style="color:#C4A000">--version</span>   Print version information and exit.
Logging Options:
<span style="color:#C4A000"> </span> <span style="color:#C4A000">-v</span>, <span style="color:#C4A000">--verbose</span>   Output more to the console.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--debug</span>     Output debug information to the console.
Commands:
  <b>verify</b>  Validate the project.
  <b>document</b>  Export project documentation.
</pre>

## Logging Options

To turn on verbose output, use any of the following flags.

| option            | description              |
| ----------------- | ------------------------ |
| `--verbose \| -v` | basic progress reporting |
| `--debug`         | debug information        |

# Verify

The `verify` command allows you to check an entire Sigasi project for issues.
Issues can be reported in different formats such as **plain text**, **JSON**, or **XML**.

<pre>
<span class="no-select">$ </span>veresta verify --help
Usage: <b>veresta verify</b> [OPTIONS] <span style="color:#C4A000">PROJECT</span>
Validate the project.
      <span style="color:#C4A000">PROJECT</span>                Path of a project root folder.
  <span style="color:#C4A000">-h</span>, <span style="color:#C4A000">--help</span>                 Show this help message and exit.
  <span style="color:#C4A000">-V</span>, <span style="color:#C4A000">--version</span>              Print version information and exit.
Logging Options:
  <span style="color:#C4A000">-v</span>, <span style="color:#C4A000">--verbose</span>              Output more to the console.
      <span style="color:#C4A000">--debug</span>                Output debug information to the console.
Project Options:
  <span style="color:#C4A000">-P</span>, <span style="color:#C4A000">--path</span>=<i>&lt;key=value&gt;</i>     Adds a custom path variable. Can be used multiple
                               times to add more variables.
Output Options:
  <span style="color:#C4A000">-o</span>, <span style="color:#C4A000">--out</span>=<i>FILE</i>             File to write the output to.
      <span style="color:#C4A000">--plain</span>                Output in plain format.
      <span style="color:#C4A000">--json</span>                 Output in JSON format.
      <span style="color:#C4A000">--sonarqube</span>            Output in SonarQube format.
      <span style="color:#C4A000">--warnings-ng</span>          Output in Warnings NG XML format.
Execution Options:
      <span style="color:#C4A000">--fail-on-error</span>        Fail on any error marker.
      <span style="color:#C4A000">--fail-on-warning</span>      Fail on any warning or error marker.
      <span style="color:#C4A000">--fail-on-info</span>         Fail on any info, warning or error marker.
      <span style="color:#C4A000">--include-suppressed</span>   Include suppressed issues in output.
</pre>

# Document

The `document` command allows you to create documentation for a Sigasi project.
The documentation can be split into pages, it can include problem information, and generated diagrams.

<pre>
<span class="no-select">$ </span>veresta document --help
Usage: <b>veresta document</b> [OPTIONS] <span style="color:#C4A000">PROJECT</span>
Export project documentation.
      <span style="color:#C4A000">PROJECT</span>                Path of a project root folder.
  <span style="color:#C4A000">-h</span>, <span style="color:#C4A000">--help</span>                 Show this help message and exit.
  <span style="color:#C4A000">-V</span>, <span style="color:#C4A000">--version</span>              Print version information and exit.
Logging Options:
<span style="color:#C4A000"> </span> <span style="color:#C4A000">-v</span>, <span style="color:#C4A000">--verbose</span>              Output more to the console.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--debug</span>                Output debug information to the console.
Project Options:
  <span style="color:#C4A000">-P</span>, <span style="color:#C4A000">--path</span>=<i>&lt;key=value&gt;</i>     Adds a custom path variable. Can be used multiple
                               times to add more variables.
Export Options:
  <span style="color:#C4A000">--top-level</span>=&lt;qualifiedName&gt;
                             Export documentation for the given qualified name.
  <span style="color:#C4A000">--diagrams</span>=&lt;diagramExports&gt;
                             Specify whether or how to include diagrams in
                               output. Defaults to embedded diagrams. The
                               following options are available:
                             EMBEDDED: include diagrams and embed them in HTML
                               files (default).
                             LINKED: include diagrams and write them to
                               separate file which is linked in HTML file.
                             NONE: don't include diagrams.
  <span style="color:#C4A000">--include-problems</span>         Include problem information in output.
  <span style="color:#C4A000">--include-suppressed</span>       Include suppressed problems in output.
  <span style="color:#C4A000">--design-units-per-page</span>=&lt;unitsPerPage&gt;
                             Split into multiple pages with the given design
                               units per page.
  <span style="color:#C4A000">-T</span>,<span style="color:#C4A000"> --threads</span>=&lt;threads&gt;    Number of parallel export threads. Defaults to
                               maximum available.
</pre>

## Project Options

Sigasi projects sometimes use environment variables to point at
external files and folders, e.g. at the location of your VUnit
installation. These variables are set in the IDE, but Veresta is not aware
of these variables by default. Also, the environment in which you run
Veresta (e.g. your CI server) may be different from the environment in
which you run Sigasi Studio. For example, VUnit may be installed in a
different location in each environment.

Using `-P` or `--path`, you can specify the value of the different
PATH variables in your `.project` file. For example, if your
`.project` file contains a linked folder like this:
<pre>&lt;link&gt;
        &lt;name&gt;Common Libraries/vunit_include&lt;/name&gt;
        &lt;type&gt;2&lt;/type&gt;
        &lt;locationURI&gt;<SPAN STYLE="font-weight:bold">VUNIT</SPAN>/verilog/include&lt;/locationURI&gt;
&lt;/link&gt;</pre>
You can set the `VUNIT` variable to the path of your VUnit installation:
<pre><span class="no-select">$ </span>veresta verify <b>--path=VUNIT=/path/to/vunit/installation</b> [FURTHER OPTIONS]</pre>

You can use `-P` or `--path` multiple times to specify the value of
multiple PATH variables.

Note that Veresta does not support resource filters in the `.project` file.

## Output Options

### Output formats

| format          | description                                                           |
| --------------- | --------------------------------------------------------------------- |
| *default*       | colored, suitable for terminal                                        |
| `--plain`       | colorless                                                             |
| `--json`        | JSON format, more detailed                                            |
| `--sonarqube`   | JSON format for [SonarQube](https://www.sonarqube.org/)               |
| `--warnings-ng` | XML format for [Warnings NG](https://plugins.jenkins.io/warnings-ng/) |

#### Plain

By default, the `verify` command will output a single line of information for each issue found.
This includes the path, line and column where the issue is located, the severity and a message.
If you want to use this format but without coloring, you can use the `--plain` flag.

<pre><b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:147:17: <span style="color:#C4A000">WARNING</span>: Incorrect array size in assignment: expected (&lt;g_wb_data_width&gt;) but was (&lt;64&gt;)
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:155:21: <span style="color:#C4A000">WARNING</span>: Incorrect array size in assignment: expected (&lt;32&gt;) but was (&lt;g_wb_data_width&gt;)
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:156:17: <span style="color:#C4A000">WARNING</span>: Incorrect array size in assignment: expected (&lt;32&gt;) but was (&lt;g_wb_data_width&gt;)
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:157:17: <span style="color:#C4A000">WARNING</span>: Incorrect array size in assignment: expected (&lt;g_wb_data_width&gt;) but was (&lt;32&gt;)
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:158:17: <span style="color:#C4A000">WARNING</span>: Incorrect array size in assignment: expected (&lt;g_wb_data_width&gt;) but was (&lt;32&gt;)
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:192:10: <span style="color:#C4A000">WARNING</span>: The order of the associations is different from the declaration order
<b>hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd</b>:202:10: <span style="color:#C4A000">WARNING</span>: The order of the associations is different from the declaration order
<b>hdl/boards/vfc/rtl/IRQ_generator.vhd</b>:117:10: <span style="color:#C4A000">WARNING</span>: The order of the associations is different from the declaration order
<b>hdl/boards/vfc/rtl/IRQ_generator.vhd</b>:123:10: <span style="color:#C4A000">WARNING</span>: The order of the associations is different from the declaration order
...
</pre>

#### JSON

If you want more detailed information for each issue you can use the JSON output format by using the `--json` flag.

```json
{
  "project": "vme64x-core",
  "issues": [
    {
      "resource": "hdl/boards/vfc/rtl/IRQ_Generator_Top.vhd",
      "library": "work",
      "description": "Incorrect array size in assignment: expected (<g_wb_data_width>) but was (<64>)",
      "line": 147,
      "lineEnd": 147,
      "column": 17,
      "columnEnd": 37,
      "severity": "WARNING",
      "code": "com.sigasi.hdt.vhdl.Vhdl.144",
      "codeDescription": "Array assignment validation",
      "category": "Range validation"
    }
  ]
}
```

#### SonarQube

To import issues into [SonarQube](https://www.sonarqube.org/), use the `--sonarqube` flag to output issues in a format that can be interpreted by SonarQube. First output the issues into a file, then pass them to SonarQube by adding the `sonar.externalIssuesReportPaths` parameter. More info can be found [here](https://docs.sonarqube.org/latest/analysis/generic-issue/).

#### Warnings NG

Additionally, issues can be formatted in an XML format suitable for the Jenkins plugin [Warnings NG](https://plugins.jenkins.io/warnings-ng/) by using the `--warnings-ng` flag.
This allows for output to be fed to the plugin, which will visualize the issues for each Jenkins run.
To do this, add the following to your `Jenkinsfile`:

```groovy
// Specify the path of your Sigasi Veresta installation
final String veresta = "/opt/sigasi-veresta/veresta"
// ...

// Add the following somewhere in your build step
sh "${veresta} verify --warnings-ng --out sigasi-issues.xml ."
// ...

// Add this to your 'post' step
recordIssues(
    enabledForFailure: true, aggregatingResults: true,
    recordIssues tool: issues(pattern: 'sigasi-issues.xml', analysisModelId: 'sigasi')
)
```

### Output to file

To save the output to a file you can use one of the output options (`--out` or `-o`) or, on Linux, redirect the output using `>`.

<pre>
<span class="no-select">$ </span>veresta verify -o markers.txt .
<span class="no-select">$ </span>veresta verify --out=markers.txt .
<span class="no-select">$ </span>veresta verify . > markers.txt
</pre>

## Execution Options

### Failure thresholds

To easily check if any issues of a certain severity were found in the project (without having to parse the output), you can use one of the following options:

| Option | Threshold |
| --- | --- |
| `--fail-on-error` | Any error markers |
| `--fail-on-warning` | Any error or warning markers |
| `--fail-on-info` | Any error, warning or info markers |

If any issue was found that matches the threshold, an exit code of `16` will be returned once finished.
The project is still validated in its entirety, regardless of whether the threshold was reached.

### Suppressed issues

Suppressed issues are filtered from the output by default, as we consider these issues *'resolved'*.
If you do want to include suppressed issues in the output, add the `--include-suppressed` option:

<pre>
<span class="no-select">$ </span>veresta verify --include-suppressed .
</pre>

*Note that this option is ignored when using the `--sonarqube` or `--warnings-ng` format.*

## Export Options

### Documentation options
You can export the documentation for a given top level qualified name using `--top-level=qualified.name`. For example: `--top-level=work.entity.architecture`.  
The documentation can also be split into multiple pages with the option `--design-units-per-page=unitsPerPage`.
The summarized project information is on the first page. Subsequent pages provide more detailed insights about a limited 
amount of design units per page, as specified.

### Problem information

Problem information is not included by default in the generated documentation. It can be added using `--include-problems`.
Suppressed problems can also be added with the additional flag `--include-supressed`.

### Diagram generation

By default, diagrams are included as embedded SVGs in the generated documentation.
This can be changed to generate separate files that are linked into the HTML using `--diagrams=linked`.
It can also be disabled using `--diagrams=none`.
If the project root contains a file named `sigasi-doc.css` it will be copied to the target folder and 
included into the HTML, embedded or linked according to the `--diagrams` value.    
Diagram generation is multi-threaded by default, this can be adjusted using `-T` or `--threads`.

# Exit codes

Sigasi Veresta should always finish with a `0` exit code.
If this is not the case, refer to the following table.

| Code | Description                                              |
| ---- | -------------------------------------------------------- |
| `0`  | Successful execution.                                    |
| `1`  | Unhandled program exception occurred.                    |
| `2`  | Invalid command line arguments / options.                |
| `7`  | Licensing error. Make sure a valid license is available. |
| `16` | Verification severity threshold reached.                 |
| `17` | Documentation export failed.                             |
