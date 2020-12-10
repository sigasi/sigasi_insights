---
title: "Checking case statements in SystemVerilog"
layout: youtube
date: 2020-12-10
pager: false
comments: false
videoid: g_C3kwiFh2U
tags:
  - editor
  - SystemVerilog
  - linting
---

`Case statements` are used a lot in SystemVerilog because they provide the most elegant way to describe state machines.
In this video we show you how Sigasi Studio helps you avoid typical mistakes.

When we hover the case statement in this example file we see two warnings: 
* `Case statement does not cover all cases`
* `Default clause missing from case statement`

Indeed, when we look at the state machine view, we see an unused state.

When we add a case item, the first warning disappears.
It is also recommended to add a default clause.
This resolves the second warning.

Sigasi Studio also recommends having the default clause as the last option.
If not, the code is harder to read, and may lead to unexpected results.
Sigasi Studio also checks for duplicate default clauses, which is not allowed.

If you do not agree with Sigasi Studio flagging this as a warning, you can change the severity in the SystemVerilog Preferences.

Note that you can also configure this per project as you can see [here](https://insights.sigasi.com/manual/rules/verilog_case/).