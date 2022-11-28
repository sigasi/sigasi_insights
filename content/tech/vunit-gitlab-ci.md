---
title: "Using VUnit in a Gitlab CI Verification Environment"
layout: page
pager: true
author: Tobias Baumann
date: 2022-11-27
comments: true
bannerad: true
---

# Prerequisites

- **GHDL**, supported since [Sigasi 3.7](releasenotes/sigasi-3.07.html) (this article uses GHDL because it's open - other verification tools supported by Sigasi are working as well)
- **VUnit Flow** is working within your Sigasi installation, supported since [Sigasi 4.1](releasenotes/sigasi-4.01.html)
- **Gitlab.com** (or self-hosted Gitlab server) with **Gitlab CI** enabled

This tech article uses GHDL within a [Docker Container](https://www.docker.com/) on server side verification. Docker setup and handling is outside of the scope of this article. But I promise to write another one in the near future which explains the Docker workflow.

The Git repositories for demonstrating the content of this article and other Sigasi features can be found under [https://gitlab.com/Elpra/sigasi-demos/vunit-example-ci](https://gitlab.com/Elpra/sigasi-demos/vunit-example-ci).

# Introduction

Continous Integration (CI) and Continous Deployment (CD) are getting more and more important in todays development processes, especially when working agile/lean by using DevOps principles. It helps to find errors earlier, makes designs more reliable and in the end it takes pressure from the FPGA developers who have too often too long days in playing fire brigade.

In a CI process, unit tests run after every commit to ensure that changes doesn't break functionality of existing code. In the past, employees were needed to carry out tests by hand. Today, these tests are automatically carried out on a server and a test protocol is generated. Ideally, commits are avoided for deployment if tests are failing.

One framework for running these tests automatically is [VUnit](https://vunit.github.io/), which is open and actively under development with regular bugfixes and nw feature implementations. The establishment and use of VUnit is assumed to be known and is outside the scope of this article.

Since Sigasi 4.1, VUnit projects can be managed pretty user friendly. This is very important, because on the one hand, users do verification when it is easy to use and setup. And on the other hand, the local verification runs the same way as in the CI process on the server side. This prevents wasting debug time by using different verification environments. The operation part of your DevOps team will be pretty thankful for that.

# Getting Started

## Part 1: Intoduction to the Example Project

A demonstration project can be found at [Sigasi public repository on gitlab.com](https://gitlab.com/sigasi/public/vunit-ci). The repository contains an VHDL design for a 74161 4-bit counter, a self-checking VUnit testbench and a Gitlab CI configuration.

To run the testbench, a public Docker image with GHDL and VUnit, procided by the GHDL maintainers, is used. This makes the project ready to start, you can simply fork it into your Gitlab account and play around.

## Part 1: Let's Setup a local Development Environment

As starting point, you can fork the example project into your Gitlab.com account and import it in Sigasi. The project is ready to go with the Sigasi VUnit Integration. If you are not familiar with the Sigasi VUnit integration, you should have a look into the [
VUnit projects in Sigasi Studio](https://insights.sigasi.com/tech/vunit-integration) tech article.

After running the VUnit tests in Sigasi, you will see six executed tests in the VUnit tree, whereby one is failing (which is intended at the moment).

{{< figure src="/img/tech/vunit-gitlab-ci/vunit-view.png" alt="VUnit View showing six executed tests including one failing." class="uk-align-center" >}}

Let's see how a simple development process could look like, to fix this failing test. In DevOps language, we call this `looking for green builds`. You will see in a few moments, what this will mean. ;-)

## Part 2: Let's Setup a remote CI Environment

Now you have run your project with VUnit locally and you have forked it into your own Gitlab.com repository, it is time to get the Ci pipeline running. The CI pipeline in Gitlab can either be triggered manually, time scheduled or, what we prefer here, on every commit pushed to server.

To run initially the CI pipeline immediately after forking, you can go to the `CI/CD` menue and click on the `Run pipeline` button. Keep settings as they are and click on `Run pipeline`. While waiting for the execution, let's have a look into the Gitlab CI configuration file `.gitlab-ci.yml`. All the Gitlab CI configuration are within this file and the main advantage compared to e.g. Jenkins is, that this flow puts your CI process in parallel to your code also under version management. This unifies software version and configuration management in one single process and ensures that you reproducible builds.

The Gitlab CI definition is `YAML` file. It's syntax is very detailed explained in the official [Gitlab documentation](https://docs.gitlab.com/ee/ci/yaml/).

```yaml
image: ghdl/vunit:mcode-master

vunit-test:
  script:
    - python3 run.py --xunit-xml test_output.xml
  artifacts:
    when: always
    reports:
      junit: "**/test_output.xml"
    paths:
      - "vunit_out/test_output/*"
```

The `image` keyword defines the Docker image which will be pulled from Docker Hub. In this case, we use the offical `GHDL with VUnit` Docker image, which is hosted [here](https://hub.docker.com/r/ghdl/vunit).

The `script` keyword contains the script which is executed in the Unix shell environment within the Docker container. Because VUnit is that simple to run, the script is too.

VUnit produces its outputs by default in the `vunit_out` folder. We can tell this Gitlab CI by using the `artifacts` keyword and specify the folder under `paths`. The `when: always` part is used to store the artifacts even when the pipeline fails. A special feature is the `reports` keyword. This forces Gitlab to parse the `junit` XML file and report the results in Gitlab itself. This can be found under the pipeline view and should look like this:

{{< figure src="/img/tech/vunit-gitlab-ci/junit-results.png" alt="JUnit results within Gitlab." class="uk-align-center" >}}

After reading this section, your trigered pipeline should be finished executing. And due we have a failed test, we have a `red build` like expected. Now we can focus on getting a `green build`.

## Part 2: If it's broken - fix it!

Within a good development process, only green builds can be merged into the target branch. This is what Gitlab manages for us. Therefore we have to fix something.

The current demonstration have implemented an intentionally failure test. See `tb_counter` something around line 160. You see

```vhdl
            elsif run("test_intentional_fail") then
                check(false, "This test is meant to fail");

            end if;
```

Simply remove these both lines and verify locally in Sigasi that all tests are running now successfully. When the VUnit View shows zero errors, commit the changes and push them into your remote target. The Gitlab CI pipeline should trigger now and produce a green build.

You successfully fixed your design, which is now ready to merge and deploy. Congratulations, to your first green CI build!

In daily business, your design will propably be much more complex and even the related tests. Gitlab provides a wide varity of useful features to optimize your development process. Even deployment processes on real world hardware targets can be implemented, but this is a topic for a much larger tech article. See this article as a starting point for your modern DevOps process, to reach a maximum amount of design reliability by minimize the development time and costs.

# Comment

I wrote this article neither as employee of Sigasi nor of VUnit and Gitlab or any other tool mentioned. I'm just a Sigasi user (since 2011) who is happy with this piece of software. Because `Continous Integration` and `Continous Deployment` is becoming more and more important, especially in large and safty critical designs, I'm pretty glad that the Sigasi team put in VUnit support in their software. This is why I decided to wrote this tech article which hopefully inspire others to optimize their development processes.
