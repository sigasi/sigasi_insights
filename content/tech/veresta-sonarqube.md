---
title: "Monitoring HDL code quality with Sigasi Veresta and SonarQube"
layout: page 
pager: true
author: Wim Meeus
date: 2023-01-23
lastmod: 2023-06-07
comments: true
bannerad: true
tags:
  - Veresta
  - linting
  - command line
  - continuous integration
---

[**Veresta**](https://www.sigasi.com/veresta) is Sigasi's new command
line tool for HDL verification.  With **Sigasi Veresta**, you can run
the same **powerful verification** as in Sigasi Studio from the
**command line**.  Verification encompasses different aspects, such as
syntax checking (is the code syntactically correct?), linting (is
there anything suspect in the code?) including semantic checks (do
constructs make sense and are they consistent?), and style checking
(does the code comply with coding guidelines?).

In this article, we'll show how to combine **Veresta** and
[**SonarQube**](https://www.sonarsource.com/) or SonarCloud, its SaaS
sibling.  SonarQube is a tool to monitor code quality.  SonarQube can
help to keep track of errors, *code smells* (suspect code), security
issues, etc. in your projects. It supports a large number of
programming languages, but not Hardware Description Languages (HDL)
like VHDL or SystemVerilog.  Luckily, SonarQube can import findings
from external linters for languages that it doesn't support.  And
here's more good news: Sigasi Veresta can be that external linter!

In previous articles, we have demonstrated how to use Veresta in
[Continuous Integration
(CI)](https://en.wikipedia.org/wiki/Continuous_integration) in
[Jenkins]({{< ref "/tech/veresta-jenkins.md" >}}) and
[Gitlab CI]({{< ref "/tech/veresta-gitlab-ci.md" >}}).
We'll build on what we've shown in those articles, modifying the CI
pipelines for SonarQube integration.  But before we get into the CI
integration, we'll show how to combine Veresta and SonarQube on the
command line.

## Demo project

For the purpose of this article, a public git repository with a demo
project is available
[here](https://gitlab.com/sigasi/public/veresta-ci).  After cloning
the repository, switch to branch
`2-report-veresta-s-findings-in-sonarqube` for the SonarQube
demo. E.g.:

```sh
git clone https://gitlab.com/sigasi/public/veresta-ci
git checkout 2-report-veresta-s-findings-in-sonarqube
```

You'll also need to install Veresta and
[SonarScanner](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/)
on your system.

## Setting up a SonarQube project

Setting up a SonarQube project obviously requires that you have access
to either a SonarQube server, or to SonarCloud. Running an
experimental SonarCloud server can be as simple as pulling and
starting a Docker container on a Linux host. Documentation on setting
up SonarQube is available
[here](https://docs.sonarqube.org/latest/try-out-sonarqube/).  Once
SonarQube is up and running, you can set up a project in SonarQube.

1. Select **Create new project**.
1. Give your project a **Project key** and a **Display name** and select **Set up**.
1. Under **Provide a token**, select **Generate a token**. Give your token a name, select **Generate**, and click **Continue**.

Once the project setup in SonarQube is finished, open a terminal
window and `cd` into the HDL project folder.  The demo project
contains a SonarQube configuration file `sonar-project.properties`
with a few basic settings. Note that you can override these settings
on the command line.

```sh
sonar.sources=.
sonar.externalIssuesReportPaths=sigasi-sonar.json
sonar.qualitygate.wait=false
```

## Running Veresta and SonarQube from the command line

Before implementing code verification with Veresta and SonarQube in
CI, it is a good idea to run the Veresta-and-SonarQube flow from the
command line to check the configuration. Assuming that you have [set
up the Veresta license]({{< ref "/manual/veresta/_index.md#license" >}}),
use these commands to run code verification:

```sh
/path/to/veresta/veresta verify --sonarqube -o sigasi-sonar.json .
/path/to/sonar/bin/sonar-scanner -Dsonar.projectKey=<my_sonar_project_key> -Dsonar.token=<my_sonar_token> -Dsonar.host.url=<my_sonar_url>
```

The first command runs Veresta verification and puts the findings in
`sigasi-sonar.json`.  The second command runs the Sonar scan, which
picks up Veresta's findings from the JSON file, and sends them to the
SonarQube server.  Use the project key and token which were generated
in SonarQube during project creation. Note that in Windows, you need
to replace `veresta` with `veresta.bat` .

After a short while, the results of the scan are available in
SonarQube. First, you see an overview of your projects.

{{< figure src="/img/tech/veresta-sq-result1.png" alt="Veresta result in SonarQube: project overview" >}}

Going further, you can check the details of all
issues found in the code:

{{< figure src="/img/tech/veresta-sq-result2.png" alt="Veresta result in SonarQube: issues per file" >}}

And finally, you can inspect each issue in its context:

{{< figure src="/img/tech/veresta-sq-result3.png" alt="Veresta result in SonarQube: issue in file" >}}

## Veresta and SonarQube in Gitlab CI

In this section, we extend the demo from our article on [Veresta in
Gitlab CI]({{< ref "/tech/veresta-gitlab-ci.md" >}}).
The Gitlab runners in our setup make
use of Docker containers to run the CI jobs, so we'll need an extended
container with SonarScanner installed. You can build the container
using the `docker/Dockerfile` in the Gitlab project.

You'll also want to configure the SonarQube server URL and analysis
token, e.g. by setting the `SONAR_HOST_URL` and `SONAR_TOKEN` CI
variables in Gitlab. You can also [set up the Veresta
license]({{< ref "/manual/veresta/_index.md#license" >}}) using Gitlab CI
variables.

```yaml
veresta-check-sonarqube:
  # Veresta code check reporting to SonarQube
  #
  # Note that the job succeeds if code validation itself runs
  # successfully, even if the validation reports errors.
  variables:
    # Variables SONAR_HOST_URL and SONAR_TOKEN must be set in Gitlab CI
    # After project creation in SonarQube, configure the project key in MY_SONAR_PROJECT_KEY
    SONAR_SCANNER_OPTS: "-server"
    MY_SONAR_PROJECT_KEY: "veresta-ci-project"
  image:
    name: registry.gitlab.com/sigasi/public/veresta-ci:sonar.0.1
    pull_policy: if-not-present
  tags:
    - veresta
  stage: test
  script:
    - veresta verify --sonarqube . > sigasi-sonar.json
    - sonar-scanner -Dsonar.projectKey=${MY_SONAR_PROJECT_KEY}
```

When the pipeline has finished, you can check out the result in
SonarQube as shown earlier.

## Veresta and SonarQube in Jenkins

In this section, we extend the demo from our article on [Veresta in
Jenkins]({{< ref "/tech/veresta-jenkins.md" >}}).
Good news for Jenkins users: Jenkins has a
[SonarQube Scanner plugin](https://plugins.jenkins.io/sonar/) which we
recommend installing.

### SonarQube plugin setup

The SonarQube plugin requires configuration in Jenkins, which we'll
briefly discuss here.

#### Main setup

In Jenkins, open the system configuration: **Dashboard > Configure
Jenkins > Configure System**. Under *SonarQube servers*, make sure
that <SPAN STYLE="text-decoration:underline; text-decoration-color:
#323286;">**Environment variables**</SPAN> is checked. Add the <SPAN
STYLE="text-decoration:underline; text-decoration-color:
#323286;">**Server URL**</SPAN> of your server and configure a [<SPAN
STYLE="text-decoration:underline; text-decoration-color:
#323286;">**Server authentication
token**</SPAN>](https://docs.sonarqube.org/latest/user-guide/user-account/generating-and-using-tokens/). Don't
use a project analysis token here as this token will be used for all
projects to be analyzed in Jenkins.

{{< figure src="/img/tech/veresta-sq-jenkins-main-config-plus.png" alt="Main SonarQube setup in Jenkins" class="uk-align-center" >}}

#### SonarQube Scanner tool setup

Next, set up the scanner in Jenkins' global tool configuration:
**Dashboard > Configure Jenkins > Global Tool Configuration**. Add a
<SPAN STYLE="text-decoration:underline; text-decoration-color:
#323286;">SonarQube Scanner</SPAN> and enter a name for your scanner
installation. Then, if the scanner is already installed on your build
executor, enter the install path as well. Alternatively, you can
choose to <SPAN STYLE="text-decoration:underline;
text-decoration-color: #f47920;">install the scanner
automatically</SPAN> when it's needed.

{{< figure src="/img/tech/veresta-sq-jenkins-tool-config-plus.png" alt="SonarQube Tools setup in Jenkins" class="uk-align-center" >}}

### Configuring SonarQube in the Jenkins pipeline

Once SonarQube is configured in Jenkins, you can proceed to configure
the CI pipeline in `Jenkinsfile`. This example uses a declarative
pipeline with two stages. The first stage runs Veresta and writes its
findings to `sigasi-sonar.json`. The second stage runs SonarScanner,
which picks up Veresta's findings and reports to the SonarQube server.

```groovy
String sigasiVeresta = '/home/wmeeus/product/veresta-current/veresta'
String sonarProjectKey = 'Veresta-CI-Jenkins'

pipeline {
    agent 'any'
    environment {
        SIGASI_LM_LICENSE_FILE = '27040@my_license_server'
    }
    stages {
        stage('Veresta Verify') {
            steps {
                sh "veresta verify --sonarqube -o sigasi-sonar.json ."
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('Demo SonarQube') {
                    withEnv(["PATH+SONAR=${tool 'Sonar-scanner'}/bin"]) {
                        sh "sonar-scanner -Dsonar.projectKey=${sonarProjectKey}"
                    }
                }
            }
        }
    }
}
```

After running the pipeline, you can check out the result in SonarQube
as shown before.

## Using SonarQube's Quality Gate

So far we've used SonarQube to analyze and track code quality, but
there's more.  SonarQube also has the concept of a **Quality Gate**,
which is an indicator of whether the code complies with your quality
standard. For instance, a quality gate could check that the design
contains no errors and a maximum number of warnings.

The quality gate is useful in two different ways.  Firstly, you can
use the quality gate to determine whether your CI pipeline succeeded
or failed. A quality gate is a more precise tool than a simple
pass/fail check, as it can take many things into account when making a
decision: number of warnings, whether these warnings occur in new
code, or (with a coverage tool) even test coverage...

Secondly, a quality gate can stop the CI pipeline in the middle if the
code doesn't comply with quality requirements, stopping con-compliant
code from being deployed, or avoiding that expensive or time-consuming
pipeline stages like RTL synthesis or Place&Route are run.

Most likely, you'll need to define your own quality gate in SonarQube.
Sonar's default quality gate, *Sonar Way*, will always fail because it
has a coverage requirement - unless you provide coverage data to
SonarQube of course.  To resolve that, define your own quality gate in
SonarQube, and configure your project to use it. The quality gate will
fail if one or more conditions are met.

To enable the quality gate for your project, modify
`sonar-project.properties` in your project folder to set
`sonar.qualitygate.wait` to `true`.

```sh
sonar.sources=.
sonar.externalIssuesReportPaths=sigasi-sonar.json
sonar.qualitygate.wait=true
```

{{< figure src="/img/tech/veresta-sq-gate.png" alt="SonarQube: define quality gate" >}}

After pushing the updated `sonar-project.properties` to your
repository, re-run your CI pipeline and check the effect of the
quality gate.

## Conclusion

In this article, we have demonstrated how you can **integrate Sigasi
Veresta with SonarQube** to monitor the **quality** of your **HDL
code**. The integration can be implemented easily from the **command
line** or in a **CI pipeline in Jenkins or Gitlab**. Using a **quality
gate**, you can ensure that only quality-compliant code gets deployed
into your product.
