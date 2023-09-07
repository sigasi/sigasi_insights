---
title: Sigasi Studio 5.N
date: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 
---

We are proud to present the Sigasi Studio X.Y release: ...

As per usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://www.sigasi.com/vscode/) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}.

## TL;DR

# Further New and Noteworthy

# Quality of Life

# Updates and Deprecations

# Bug Fixes

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise go unnoticed.

# System Requirements

- Sigasi Studio standalone is supported on:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    - Sigasi Studio depends on `webkit2gtk4.0` which can be installed through your package manager of choice
  - More information on supported Linux OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
- Sigasi Studio as a plugin in your Eclipse installation:
  - Eclipse IDE 2021-03 up to and including Eclipse IDE 2023-03
  - Java JRE 11 or 17
- Sigasi Studio [extension](https://www.sigasi.com/vscode/) for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)
- [Veresta](https://www.sigasi.com/veresta/)
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
  - Java JRE 11 or 17 (shipped with Veresta)

We recommend having at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.
