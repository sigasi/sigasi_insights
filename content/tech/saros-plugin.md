---
title: "Remote collaboration using the Saros Plugin"
date: 2020-05-26
pager: true
author: Bart Brosens
comments: true
bannerad: true
---

## Remote collaboration is a hot topic

These days many people use Google docs or other online collaboration suites.
Not only you see your own cursor and text updates in a browser window.
Also the cursors and text updates from remote collaborators are visible while they happen.
Wouldn't it be cool to have this in your Sigasi Studio too?
With so many engineers working from home these days, that could be very helpful.
It can replace hopping over to the desk of a colleague to discuss code changes or to do actual pair programming.

Recently, a customer contacted us with a question about the [Saros Eclipse plugin][saros].
We hadn't heard about this plugin before.
After investigating we learned that [Sigasi Studio](https://www.sigasi.com/download/) is compatible with this plugin since the Sigasi Studio 4.5 release.

## Installing and using the plugin

{{< figure src="/img/tech/saros-plugin.png" link="/img/tech/saros-plugin.png" alt="alt text" caption="The Saros plugin in action" title="title text" width="500" class="uk-align-right" >}}

To install the Saros plugin in Sigasi Studio, go to **Help > Install New Software...** and add the update site for Saros in **Work with:** https://www.saros-project.org/update-site/eclipse.

To use the Saros plugin you need an [XMPP server][xmpp].
You can create an account on the Saros project XMPP server.
Or you might want to set up your own company-wide server.
Check the [Saros documentation][saros-getting-started] for more details.

Once installed, follow these steps to start collaborating.

1. You and one or more colleagues should set up your XMPP accounts.
1. Invite your colleagues as participants in your Sigasi project.

No need to share any project files beforehand, the Saros plugin takes care of that.
It can also update an existing project when joining a session.
Once you are sharing a project, you'll see each others updates in real time.
Even the library mapping gets updated when a colleague modifies it.


There is an important difference with online collaboration suites. Your code is not hosted online.
Instead, it resides on each of the collaborators machines.
Saros synchronizes the project files using the XMPP protocol.

This is a wonderful plugin that might be of good use while working from home.
It can be very useful for our customers.
For help on installing the Saros plugin in Sigasi Studio you can refer to the {{< page "/manual/eclipse/plugins.md" >}} manual page.

**Keep being productive, wherever you are!**

[saros]: https://marketplace.eclipse.org/content/saros-distributed-collaborative-editing-and-pair-programming
[xmpp]: https://xmpp.org/
[saros-getting-started]: https://www.saros-project.org/documentation/getting-started.html
