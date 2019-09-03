---
title: "Using VUnit in a Gitlab CI Verification Environment"
layout: page
pager: true
author: Tobias Baumann
date: 2019-03-17
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

## Part 1: Let's Setup a CI Environment

## Part 2: If it's broken - fix it!

# Comment

I wrote this article neither as employee of Sigasi nor of VUnit or any other tool mentioned. I'm just a Sigasi user (since 2011) who is happy with this piece of software. Because Continous Integration and Continous Deployment is becoming more and more important, especially in large and safty critical designs, I'm pretty glad that the Sigasi team put in VUnit support in their software. This is why I decided to wrote this tech article which hopefully inspire others to optimize their development process.

