---
title: "Using Sigasi Veresta as a Git Commit Hook"
layout: page 
pager: true
author: Wim Meeus
date: 2023-01-16
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
the same **powerful verification** as Sigasi Studio from the
**command line**.  Verification encompasses different aspects, such as
syntax checking (is the code syntactically correct?), linting (is there
anything suspect in the code?) including semantic checks (do constructs
make sense and are they consistent?) and style checking (does the code
comply with coding guidelines?).

In a number of previous articles, we have demonstrated how to use
Veresta in [Continuous Integration
(CI)](https://en.wikipedia.org/wiki/Continuous_integration) in
[Jenkins]({{< ref "veresta-jenkins" >}}) and [Gitlab CI]({{< ref "veresta-gitlab-ci.md" >}}).  In
this configuration, Veresta verifies your project's HDL code when
it's pushed to the Git repository.  But wouldn't it be better to prevent
flawed code from reaching the repository at all?

In this article, we'll show how to use **Veresta** as a **commit
hook** for Git repostories.  With the setup which we will present
here, Veresta runs whenever anyone issues a `git commit`, and an
unsatisfactory Veresta outcome prevents the commit from happening.
The designer is required to fix the problems in the code before they
submit their work.  By doing so, we can keep flawed code out of the
repository.

## Setting up a commit hook

### Linux setup

Setting up a commit hook is easy and straightforward. In the root
folder of your Git project, you'll probably find a subfolder
`.git/hooks` with a number of sample hooks in it.  If the folder is
not there, you can simply create it, e.g. `mkdir -p .git/hooks` .  If
you're not using a pre-commit hook yet, create a file `pre-commit` in
the `.git/hooks` subfolder with this content:

```sh
#!/bin/bash
veresta verify --fail-on-error .
```

The above script assumes that Veresta is installed in your `PATH`. If
that is not the case, either add Veresta to your `PATH` environment
variable or add the full path in the script.

You also need a valid Veresta license. You can install the license
file as `~/sigasi.lic` or have either `$SIGASI_LM_LICENSE_FILE` or
`$LM_LICENSE_FILE` point to the license. These variables can be set
either in your shell or in the `pre-commit` script.  Further
information on license configuration can be found in the [Sigasi
manual](/manual/license-key/).

The path and license setup could look like this (bash syntax)

```sh
export SIGASI_LM_LICENSE_FILE=/path/to/sigasi.lic
export PATH=$PATH:/path/to/veresta/folder
```

You can (preferably) add these lines to your `.profile`, `.bashrc`
etc. so they apply to both your interactive shell and the commit
hook. Alternatively, you can place them inside `pre-commit` after the
first line, in which case they only apply to the pre-commit hook.

Finally, don't forget to make the file executable (`chmod +x
.git/hooks/pre-commit`).  For testing, `cd` to the root folder of the
git project and run the script from the command line.

```sh
.git/hooks/pre-commit
```

If all goes well, Veresta runs and shows its findings on the console.
If you don't get any output, that means that Veresta didn't find
any suspicious code in your project. If anything is wrong with
your `PATH` or license setup, this test will tell you as well.

Now make a (small) change to the HDL code and commit the change, e.g.

```sh
git commit -a
```

The pre-commit hook runs before you're prompted to enter a commit
message. Veresta shows its findings in the console. If any **errors**
were reported, the commit is **aborted**. If no errors are found, the
commit continues and you're prompted to enter a commit message. **Goal
achieved**: one can **only commit code without errors**.

### Windows setup

Setting up a git hook on Windows is very similar to the Linux
setup. Git on Windows comes with an installation of a number of Linux
tools, including the *bash* shell. Git uses bash to run hooks, and not
Windows's cmd shell or Powershell. So in fact, you'll be using a
Linux-style script in Windows. One important difference though is that
in Windows, you need to run Veresta using a Windows batch script. To
install the pre-commit hook, put a file `.git/hooks/pre-commit` in
your git project with the following content:

```sh
#!/bin/bash
veresta.bat verify --fail-on-error .
```

You'll also need to configure the license and add Veresta to the
`PATH` setting. Open the environment variables for your account.

{{< figure src="/img/tech/veresta-hook-env-plus.png" alt="Windows account variables menu item" class="uk-align-center" >}}

Configure the Veresta license using either the
`SIGASI_LM_LICENSE_FILE` or `LM_LICENSE_FILE` variable. The value of
the license variable depends on your setup. Additional information on
license configuration is in the [Sigasi
manual](/manual/license-key/). Also add the Veresta folder to the
`Path` variable.

{{< figure src="/img/tech/veresta-hook-env-path-plus.png" alt="Windows account variables details" class="uk-align-center" >}}

Once this is done, you can test the hook from a bash shell in Windows
(not cmd or PowerShell!) by simply running the script from the git
root folder:

```sh
.git/hooks/pre-commit
```

Or you can commit a change to the project. `git commit` will run
Veresta. You'll see Veresta's findings on the console, and if no
errors are found, you'll be prompted for a commit message.

### Adding a clear message

Now that our initial goal, keeping code in revision control compliant
with Sigasi/Veresta's checks, has been achieved, we'll look into a
small refinement.  As it is now, `git commit` simply terminates with a
list of errors and warnings if errors are present.  It would be nicer
to explicitly tell the user why the commit has failed, and what
they're supposed to do to fix that.

Extending the pre-commit hook `.git/hooks/pre-commit` as follows will
produce the desired message.  Note that the script stores Veresta's
exit code in a variable, and calls `exit` with this exit code at the
end. This is necessary to report Veresta's exit code, which indicates
success or failure, to `git commit`.

```sh
#!/bin/bash
veresta verify --fail-on-error .
VERESTA_RESULT=$?
if [[ $VERESTA_RESULT -ne 0 ]] ; then
    echo
    echo Project contains errors, please fix them before committing
    echo
fi
exit $VERESTA_RESULT
```

In a project with errors, the output now clearly tells the user what needs to happen.

{{< figure src="/img/tech/veresta-hook-msg-plus.png" alt="Error message from pre-commit hook" class="uk-align-center" >}}

### Using the pre-commit hook in a team

An important thing to know is that hooks are not automatically
installed or activated when a git repository is cloned or updated.
Automatically installing hooks would be a security threat, as someone
may - accidentally or not - introduce harmful code in a hook, which
would be executed by everyone who uses the repository.  Installation
of hooks is always up to the user.  Design teams may set up scripts to
copy hooks into a newly cloned copy of a repository.

### A small caveat

A further consideration is that users can get around hooks. If a user
either hasn't installed the pre-commit hook, or they tell git to skip
the pre-commit hook using `git commit --no-verify`, verification
doesn't run and buggy code can still be committed and pushed to a
repository. So, while Veresta in a pre-commit hook is a helpful tool,
it's not a silver bullet to keep your design repository clean.
Running Veresta in a Continuous Integration (CI) pipeline remains
instrumental for that purpose.

## Conclusion

In this article, we have demonstrated how to use Veresta as a
pre-commit hook in a Git repository.  It helps to keep a high code
quality by preventing faulty code from being committed to the
repository.  In addition, it is recommended to also run Veresta as
part of a CI pipeline.