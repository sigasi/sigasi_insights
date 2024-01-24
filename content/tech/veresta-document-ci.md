---
title: "Documentation generation in CI with Sigasi Veresta"
layout: page 
pager: true
author: Wim Meeus
date: 2024-01-24
comments: true
bannerad: true
tags:
  - Veresta
  - documentation
  - command line
  - continuous integration
---

At the start of 2023, Sigasi introduced
[**Veresta**](https://www.sigasi.com/veresta), a **command line** tool
for HDL validation. In December, we released version 5.4, which introduced **documentation generation** capabilities, long a favorite feature of Sigasi Studio.  You can read our earlier article about the [**importance of good
documentation**]({{< ref "generate-documentation-sigasi.md" >}}), which also explains 
how Sigasi Studio can assist you with documenting your HDL
code as you design.

In this article, we walk through how
you can **generate documentation with Veresta** in [**Continuous Integration**
(CI)](https://en.wikipedia.org/wiki/Continuous_integration), using
either [**Jenkins**](https://www.jenkins.io/) or [**GitLab
CI**](https://docs.gitlab.com/ee/ci). To read up on general use of Veresta, see the [Veresta product manual]({{<
ref "/manual/veresta/_index.md" >}}).

## Veresta documentation in Jenkins

We're demonstrating `veresta document` with a **Jenkins freestyle
project** here. Note that it is equally possible to run Veresta in a pipeline project.
We're using a fairly simple Jenkins setup, which we explained in
[this earlier article]({{< ref "veresta-jenkins/#jenkins-setup" >}}). In
addition, we've installed the [HTML
Publisher](https://plugins.jenkins.io/htmlpublisher/) plugin.

Before you start, make sure that Jenkins has an executor with Veresta installed. The executor needs to have access to a Veresta license. If necessary, use tags in Jenkins to ensure that your Veresta jobs will run on a Veresta-capable executor.

In Jenkins, create a new freestyle project and configure your code repository. For demonstration purposes, you are welcome to use our [demo repository](https://gitlab.com/sigasi/public/veresta-doc). Add an **Execute shell** build step with the following content. (Make sure to set `SIGASI_LM_LICENSE_FILE` and `VERESTA_CMD` for your environment.)

```sh
export SIGASI_LM_LICENSE_FILE=27000@my.license.server
export VERESTA_CMD=/veresta/path/veresta
xvfb-run -a $VERESTA_CMD document design
```

Then, add a **Post-build Action** to **Publish HTML reports**. Set the **HTML directory to archive** to the `sigasi-doc` subfolder of the design folder. In our example it's `design/sigasi-doc` . Set **Index page\[s\]** to `documentation.html` . Also configure the **Report title** as appropriate.

{{< figure alt="Jenkins Post-build Action configuration" src="/img/tech/veresta-doc-jenkins-postbuild.png" >}}

Once that's done, it's time to save and run the job. Once the job has finished, the **Jenkins project page contains
links to the generated documentation**, both in the toolbar at the left and in the middle of the page. These links
take you directly to the generated documentation. You can add this link to your project's webpage, wiki, or wherever as
a **permanent link to up-to-date documentation**.

{{< figure alt="Jenkins project with links to generated documentation" src="/img/tech/veresta-doc-jenkins-result.png" >}}

## Veresta documentation in GitLab CI

In this section, we'll demonstrate how to generate documentation with Veresta document in GitLab CI.
We'll also publish the documentation with [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/). 
The [example project](https://gitlab.com/sigasi/public/veresta-doc) is available as a public GitLab repository.
You'll need a [GitLab runner](https://docs.gitlab.com/runner/) with Veresta on it. In our example, we've
used a Docker container for the purpose. Check out the `docker` folder in the repository for how to build
a container for Veresta. We recommend tagging your runner with `veresta` so GitLab CI will run Veresta jobs
on an appropriate runner.

In addition to the project, you need a `.gitlab-ci.yml` file to tell GitLab CI what to do. The content of
`.gitlab-ci.yml` is shown below. It defines a single job `pages` which sets op the license and then runs
Veresta on the design in subfolder `design`. Afterwards, the script renames the folder with the generated
documentation and the HTML file for compatibility with GitLab Pages.

```yaml
# This Docker image will be used to build your documentation
image: registry.gitlab.com/sigasi/public/veresta-ci:rocky-5.4.0
pages:
  script:
    # Make sure that the license is set correctly for your setup
    - export SIGASI_LM_LICENSE_FILE=27000@my.license.server
    - xvfb-run -a veresta document design
    - mv design/sigasi-doc public
    - mv public/documentation.html public/index.html
  artifacts:
    paths:
      # The folder that contains the files to be exposed at the Page URL
      - public
  rules:
    # This ensures that only pushes to the default/main branch will trigger
    # a pages deploy
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  tags:
    # This ensures that the job will run on a runner with Veresta
    - veresta
```

With the GitLab CI job named `pages` and the `public` folder saved as an artifact, GitLab CI knows that
it needs to publish this folder as a webpage. When the job has run, navigate to **Deploy > Pages** in the left toolbar
to find the link to access the page with the generated documentation.

{{< figure alt="GitLab Pages with link to generated documentation" src="/img/tech/veresta-doc-gitlab-pages.png" >}}

This link will remain the same after each build, so you can now share this link on your team's
project page, or include it in `README.md` in the project root folder as a **permanent link to up-to-date
project documentation**. You can find the generated documentation of our demo project
[here](https://veresta-doc-sigasi-public-217d5549e0ccfbda36062f362b91fface4987.gitlab.io/).

## Other CI

Generating project documentation with Veresta isn't limited to Jenkins and GitLab CI.
If you're using a different CI platform, you can use the above examples as inspiration to integrate Veresta into it.
If you are using a different CI platform, let us know how you're using Veresta in it. Veresta customers
are also welcome to [contact support](https://www.sigasi.com/support). We'll help you as
best we can.
