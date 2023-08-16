---
title: "Using Sigasi Veresta in Jenkins CI"
layout: page 
pager: true
author: Wim Meeus
date: 2023-01-12
comments: true
bannerad: true
tags:
  - Veresta
  - linting
  - command line
  - continuous integration
  - regression testing
---

Recently, Sigasi launched its command line tool,
[**Veresta**](https://www.sigasi.com/veresta). With **Sigasi Veresta**, you can run the same
**powerful code validation** as in Sigasi Studio from the **command
line**.  This means that code validation is now possible without a
GUI.

In this article, we demonstrate how you can run Veresta in a
[**Continuous Integration**
(CI)](https://en.wikipedia.org/wiki/Continuous_integration)
environment, namely [**Jenkins**](https://www.jenkins.io/).  In a CI
setup, code validation with Veresta becomes part of regression testing
and will help you maintain the quality of your HDL code. In the near
future, we're planning more articles on Veresta and continuous
integration, so be sure to check back.

**Code validation** in Sigasi has a couple of different aspects. On
one hand, **syntax checking** verifies that your code is syntactically
correct. Syntax errors are always errors and are flagged as such. On
the other hand, we have **code linting**, where Sigasi checks for code
that is syntactically correct but is **likely incorrect**
nonetheless. Examples are a VHDL `process` with an incomplete
sensitivity list, or a `case` statement which doesn't cover all cases.
A third, optional aspect of code validation is **code style
checking**, which checks, among other things, whether names in your
design comply with your team's naming conventions.  For example, some
teams want names of constants as all caps or signal names with an `s_`
prefix. Linting and code style problems may be flagged as errors,
warnings, or info, or they may be ignored depending on your settings.

For the purposes of this article, we've set up a [**Gitlab
project**](https://gitlab.com/sigasi/public/veresta-ci), taken from the Sigasi Studio 4.x VHDL built-in tutorial. As the
bare tutorial project is incomplete, it contains a number of problems
which Veresta will flag.  Feel free to make your own copy of the
project and explore further. Sigasi customers, as always, are welcome to [contact
support](https://www.sigasi.com/support) with further questions.

The remainder of this article is organized as follows: First, we
briefly discuss the setup of Jenkins itself. Then we show two
different ways of setting up the Jenkins *project*, either as a simple
*freestyle* project, or as a more advanced *pipeline* project.  We
also demonstrate how to present the problems found by Veresta using
Jenkins' [warnings-ng](https://plugins.jenkins.io/warnings-ng/)
plugin.

## Jenkins setup

For our demonstration of how to use Veresta in Jenkins, we have used
an almost-out-of-the-box Jenkins setup.  We're using [Rocky Linux
8](https://rockylinux.org/) as an OS. You can use [this
procedure](https://www.atlantic.net/dedicated-server-hosting/how-to-install-jenkins-on-rocky-linux-8/),
starting from step 2, to install Jenkins on it. During the initial
Jenkins setup, we installed the recommended plugins, and we've kept
the default Jenkins executors on the main Jenkins node. In addition to
that, we've installed the
[warnings-ng](https://plugins.jenkins.io/warnings-ng/) plugin to
present Veresta's results in Jenkins.

## Jenkins freestyle project

The simple approach to running Veresta in Jenkins uses a **freestyle
project**. It only takes a few simple steps:

1. On the Jenkins dashboard, click **New Item**, enter a name for the
  new project, select **Freestyle project**, and click **OK**.
1. On the next screen (Configuration), go to the **Source Code
  Management** section, select **Git** and enter
  `https://gitlab.com/sigasi/public/veresta-ci.git` for **Repository
  URL**. Set the **Branch Specifier** to `*/main` .
1. Continue to **Build Steps**, add an **Execute shell** build step
  and enter these two lines as the command. Replace the license and the
  install path with the correct ones for your setup.
```sh
export SIGASI_LM_LICENSE_FILE=27000@my_license_server
/veresta_install_path/veresta verify . --fail-on-error
```
4. Click **Save**

Now your project is ready to run. Click **Build Now** to have Jenkins
run Veresta on your project. The build will fail because the design
contains some errors. Click on the build (under **Build History**) and
then **Console Output** to inspect the results.

In this case, we have configured the job to fail if Veresta reports
errors in the HDL code by using `--fail-on-error`. Depending on your
project's needs, you can change that using a different command line
argument to Veresta:

* `--fail-on-error` makes the Jenkins job fail if errors are found in the HDL code
* `--fail-on-warning` makes the Jenkins job fail if errors or warnings are found
* `--fail-on-error` makes the Jenkins job fail if errors, warnings, or infos are reported
* without any of the above command line options, the job will fail only if Veresta was unable to verify the HDL code, e.g. if no license was available.

## Reporting Veresta's result with warnings-ng

Checking Veresta's results in the job's console log is not
particularly convenient. The good news is that Jenkins has some tricks
to make our life easier.  The
[**Warnings-NG**](https://plugins.jenkins.io/warnings-ng/) plugin
helps us present Veresta's result nicely. Once the plugin is installed
in Jenkins, our Jenkins project needs some small changes to use it:

1. Add command line options so Veresta produces an XML file for
warnings-ng. The shell command now looks as follows:

```
export SIGASI_LM_LICENSE_FILE=27000@my_license_server
/veresta_install_path/veresta verify . --fail-on-error --warnings-ng -o sigasi-warnings.xml
```

2. Configure warnings-ng to pick up Veresta's results. Add a
**Post-build Action**: **Record compiler warnings and static analysis
results**, and configure as follows:
  * Fileset 'includes': `**/sigasi-warnings.xml`
  * Custom ID: `sigasi`
  * Custom Name: `Sigasi Veresta`
  * Open the advanced options and check `Enable recording for failed builds`

Now run the Jenkins job again. When the job finishes, the build result
view in Jenkins contains a warnings-ng section with the number of problems
found.

{{< figure src="/img/tech/veresta-warnings-ng-0.png" alt="Warnings-NG in job overview" width="500px" >}}

Click on the number of warnings to see more details, e.g. an overview
of problems per file...

{{< figure src="/img/tech/veresta-warnings-ng-1.png" alt="Warnings-NG file details" width="700px" >}}

... or details of each problem Veresta found in the
code.

{{< figure src="/img/tech/veresta-warnings-ng-2.png" alt="Warnings-NG error in code" width="500px" >}}

## Jenkins pipeline project

In this example, we demonstrate how to run Veresta as a pipeline
step of a **Jenkins declarative pipeline**.  A file named
`Jenkinsfile` in the Gitlab project repository defines the pipeline
steps. Before running the pipeline, you'll need to set the Veresta
PATH and license configuration in `Jenkinsfile`. As you can't do that
directly in our Gitlab project, you'll need to make your own fork if
you want to try this.


```groovy
// Set the absolute path of Veresta
String sigasiVeresta = '/path/to/veresta'

pipeline {
    agent 'any'

    environment {
        // Configure the Veresta license.
        SIGASI_LM_LICENSE_FILE = '27000@my_license_server'
    }
```

In this case, we only define one stage, in which we run Veresta code
verification. This stage could become a part of your CI pipeline,
along with regression tests, automatic synthesis, and so on. As in the
previous example, we'll have Veresta write its results in an XML file,
which the warnings-ng plugin will use to present them.
Depending on how you want to define a successful or failed Jenkins
job, you can add `--fail-on-...` flags to Veresta as discussed
earlier.

```groovy
    stages {
        stage('Veresta Verify') {
            steps {
                sh """
                    ${sigasiVeresta} verify --warnings-ng -o sigasi-verify.xml .
                """
                // Add `--fail-on-error` , `--fail-on-warning` or `--fail-on-info`
                // on the Veresta command line above as required
            }
        }
    }
    post {
        // Report Veresta errors and warnings to Jenkins' Warnings-NG plugin
        always {
            archiveArtifacts artifacts: 'sigasi-verify.xml'
            recordIssues(
                enabledForFailure: true,
                aggregatingResults: true,
                tool: issues(pattern: 'sigasi-verify.xml', analysisModelId: 'sigasi')
            )
        }
    }
```

Error/warning reporting with Warnings-NG is defined as a
post-processing step in the pipeline. As with the Freestyle job example,
the warnings-ng plugin picks up the XML from Veresta and presents the
result in a user-friendly way.

Once the `Jenkinsfile` is ready and pushed to the repository, it's time to define the Jenkins pipeline project.

1. On the Jenkins dashboard, click **New Item**, enter a name for the
  new project, select **Pipeline project** and click **OK**.
1. On the next screen (Configuration), go to the **Pipeline**
  section. Set **Definition** to **Pipeline script from SCM**, then select
  **Git** as **SCM**. Enter your repository's URL for **Repository
  URL**. Set the **Branch Specifier** and **Credentials** as
  appropriate. Leave the **Script Path** as its default value
  **Jenkinsfile**.
1. Click **Save**

Now you can run the project, sit back and relax while the job runs,
and then check the results.

## Conclusion

In this article, we **demonstrated two different ways to run
Veresta verification in Jenkins**, either in a *freestyle* project or in
a *pipeline* project.  In both cases, Jenkins' *warnings-ng* plugin was
used to present Veresta's findings in a user-friendly way.
