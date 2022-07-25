---
title: "Veresta"
layout: single
pager: true
aliases:
  - /sigasi_cli/
  - /cli/
---

Sigasi Veresta is the Command Line Interface (CLI) that brings the Sigasi technology to your CI/CD environment.

# Requirements

## Java Runtime

You will need to have a Java Runtime (JRE) installed in order to run Sigasi Veresta.

- The Java runtime must be 64-bit. Make sure to use at least **JRE 11**
- You can check your Java version with `java -version`

## License

In order to use Sigasi Veresta you will need a license. The license can be configured by either:

- A license file in your home directory, named `.sigasi.lic`
- Using an environment variable:
  - `SIGASI_LM_LICENSE_FILE`
  - `LM_LICENSE_FILE`

For more information about licenses, please refer to our [manual](/manual/license-key).

# Installation

To install Sigasi Veresta, obtain a build ZIP and extract it.
Then use either `sigasi-cli` (Linux / Mac) or `sigasi-cli.bat` (Windows).

# Usage

```
sigasi-cli [COMMAND] [ARGUMENTS]
```

## Help

You can get usage information by adding the `--help` or `-h` flag.
You can also use this flag for each command to get usage information for those commands specifically.

<pre>
<span class="no-select">$ </span>sigasi-cli --help
Usage: <b>sigasi-cli</b> [<span style="color:#C4A000">-hV</span>] [<span style="color:#C4A000">-v</span> | <span style="color:#C4A000">--debug</span>] [COMMAND]
  <span style="color:#C4A000">-h</span>, <span style="color:#C4A000">--help</span>      Show this help message and exit.
  <span style="color:#C4A000">-V</span>, <span style="color:#C4A000">--version</span>   Print version information and exit.
Logging Options:
<span style="color:#C4A000"> </span> <span style="color:#C4A000">-v</span>, <span style="color:#C4A000">--verbose</span>   Output more to the console.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--debug</span>     Output debug information to the console.
Commands:
  <b>verify</b>  Validate the project.
</pre>

## Logging Options

To turn on verbose output, use any of the following flags.

| option            | description              |
| ----------------- | ------------------------ |
| `--verbose \| -v` | basic progress reporting |
| `--debug`         | debug information        |

# Verify

The `verify` command allows you to check an entire Sigasi project for issues.
Issues can be reported in different formats such as **plain**, **JSON** or **XML**.

<pre>
<span class="no-select">$ </span>sigasi-cli verify --help
Usage: <b>sigasi-cli verify</b> [OPTIONS] [<span style="color:#C4A000">PROJECT</span>...]
Validate the project.
      [<span style="color:#C4A000">PROJECT</span>...]           One or more project folders.
  <span style="color:#C4A000">-h</span>, <span style="color:#C4A000">--help</span>                 Show this help message and exit.
  <span style="color:#C4A000">-V</span>, <span style="color:#C4A000">--version</span>              Print version information and exit.
Logging Options:
<span style="color:#C4A000"> </span> <span style="color:#C4A000">-v</span>, <span style="color:#C4A000">--verbose</span>              Output more to the console.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--debug</span>                Output debug information to the console.
Output Options:
  <span style="color:#C4A000">-o</span>, <span style="color:#C4A000">--out</span>=<i>FILE</i>             File to write the output to.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--plain</span>                Output in plain format.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--json</span>                 Output in JSON format.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--warnings-ng</span>          Output in Warnings NG XML format.
Execution Options:
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--fail-on-error</span>        Fail on any error marker.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--fail-on-warning</span>      Fail on any warning or error marker.
<span style="color:#C4A000"> </span>     <span style="color:#C4A000">--fail-on-info</span>         Fail on any info, warning or error marker.
      <span style="color:#C4A000">--include-suppressed</span>   Include suppressed issues in output.
</pre>

## Output Options

### Output formats

| format          | description                                                           |
| --------------- | --------------------------------------------------------------------- |
| *default*       | colored, suitable for terminal                                        |
| `--plain`       | colorless                                                             |
| `--json`        | JSON format, more detailed                                            |
| `--warnings-ng` | XML format for [Warnings NG](https://plugins.jenkins.io/warnings-ng/) |

#### Plain

By default, the verify command will output a single line of information for each issue found.
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
      "code": "144",
      "codeDescription": "Array assignment validation",
      "category": "Range validation",
      "languageQualifier": "com.sigasi.hdt.vhdl.Vhdl"
    },

    ...
```

#### Warnings NG

Additionally, issues can be formatted in an XML format suitable for the Jenkins plugin [Warnings NG](https://plugins.jenkins.io/warnings-ng/) by using the `--warnings-ng` flag.
This allows for output to be fed to the plugin, which will visualize the issues for each Jenkins run.
To do this, add the following to your `Jenkinsfile`:

```groovy
// Specify the path of your Sigasi Veresta installation
final String SigasiVeresta = "/opt/sigasi-cli/sigasi-cli"
// ...

// Add the following somewhere in your build step
sh "${SigasiVeresta} verify --warnings-ng --out sigasi-issues.xml ."
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
<span class="no-select">$ </span>sigasi-cli verify -o markers.txt .
<span class="no-select">$ </span>sigasi-cli verify --out=markers.txt .
<span class="no-select">$ </span>sigasi-cli verify . > markers.txt
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
The project is still validated in it's entirety, regardless of wether the threshold was reached.

### Suppressed issues

Suppressed issues are filtered from the output by default, as we consider these issues *'resolved'*.
If you do want to include suppressed issues in the output, add the `--include-suppressed` option:

<pre>
<span class="no-select">$ </span>sigasi-cli verify --include-suppressed .
</pre>

*Note that this option is ignored when using the `--warnings-ng` format.*

# Exit codes

Sigasi Veresta should always finish with a `0` exit code.
If this is not the case, refer to the following table.

| Code | Description                                              |
| ---- | -------------------------------------------------------- |
| `0`  | Successful execution.                                    |
| `1`  | Unhandled exception occurred.                            |
| `2`  | Invalid command line arguments / options.                |
| `7`  | License problem. Make sure a valid license is available. |
| `16` | Verification severity threshold reached. |
