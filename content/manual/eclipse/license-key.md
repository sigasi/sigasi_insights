---
title: License Key Management
showinmenu: true
weight: 20
pager: true
aliases:
  - /manual/license-key/
---

# Introduction

Sigasi Studio's license key management system is based on the well known FlexNet (a.k.a. FlexLM) license manager.
Sigasi Studio supports both *node-locked* and *floating* license keys.
The Sigasi Studio [edition](/manual/common/editions) is controlled by the license key.


# Node locked licenses

If you have a node-locked license, you can enter your license key directly in Sigasi Studio.

1. Open the Sigasi Studio License Key preference page: **Window > Preferences > Sigasi > License Key**
2. Click **Edit License File**
3. paste your key in the dialog

An example node-locked license looks like this. Note that the first line starts with `INCREMENT`

```
INCREMENT com.sigasi.hdt sigasi 2.0 18-nov-2012 uncounted \
        VENDOR_STRING="company:www.example.com;mac:10f2dd92c5ac;name:John \
        Doe;type:trial" HOSTID=ANY ISSUER=Sigasi ISSUED=21-Oct-2012 \
        START=21-Oct-2012 SIGN="0CCC 87EA 9BB6 256E 7D81 E49D B2A6 \
        E53D 1CA5 41D4 63DF 8671 5695 EF82 0E30 1028 732D DED3 0999 \
        FD11 8B97 42B0 7CF2 F51F 20A0 DA6E 7F54 9D64 FF29 49AB"
```

# Floating licenses

If you have a floating license key, you need to configure both a license server and Sigasi Studio. 

An example floating license looks like this. Note that the first line starts with `SERVER` or `DAEMON`:

```
DAEMON sigasi port=27001
SERVER your_server_name1 BD41FCF5DE27 27000
INCREMENT com.sigasi.hdt sigasi 2.0 18-nov-2012 4 \
        VENDOR_STRING="company:www.example.com;mac:10f2dd92c5ac;name:John \
        Doe;type:trial" HOSTID=ANY ISSUER=Sigasi ISSUED=21-Oct-2012 \
        START=21-Oct-2012 SIGN="0960 9728 7193 4DA5 15C2 3652 21E1 \
        EF82 1060 8FC1 9EA6 0C43 4842 C50B 684F E4DA 8EEF 37E9 5384 \
        8DF4 106C 52B4 EECE 0A69 CBAC 0CF2 47E2 00F2 A244 E22F"
```

## Configuring Floating license in Sigasi Studio (FlexNet Client)

In order to use a floating license, Sigasi Studio needs to know how to contact the server.
The license server can be configured in Sigasi Studio or using an environment variable.

### Configure the license server in Sigasi Studio

In Sigasi Studio, navigate to the **License Key** preference page via:
**Window > Preferences > Sigasi > License Key**.
Next enter `<portnumber>@<servername>` in the **License key path**. For example:
```
27000@myserver.example.com
```

If you have redundant license servers, enter each of the license servers separated using ",".
It is recommended to specify the primary server first in the list.
For example:
```
27000@myserver1.example.com,27000@myserver2.example.com,27000@myserver3.example.com
```

If you have multiple, non-redundant license servers, the servers should be separated using ":" on Linux and using ";" on Windows.

If you leave the **License key path** empty, Sigasi Studio will try to use an environment variable
to find the license server.

### Configure the license server in an environment variable

You can also set your license server via an environment variable instead of configuring it in Sigasi Studio.
Both `SIGASI_LM_LICENSE_FILE` and `LM_LICENSE_FILE` are supported.
When `SIGASI_LM_LICENSE_FILE` is set, `LM_LICENSE_FILE` is ignored.

Note that if you want to use an environment variable, you can not enter a path in the License Key preference page.
The value on the License Key preference page has priority over environment variables.

Linux Example:
```sh
export SIGASI_LM_LICENSE_FILE=27000@myserver.example.com
```

For redundant license servers, the servers should be separated using ",".
It is recommended to specify the primary server first in the list.
Example:
```sh
export SIGASI_LM_LICENSE_FILE="27000@myserver1.example.com,27000@myserver2.example.com,27000@myserver3.example.com"
```

## Floating License options

### Release a floating license

You can release a floating license (*check a license in*) without closing your Sigasi Studio application or Eclipse application. This is useful if you use Eclipse to edit other files than VHDL files, like C or Tcl.

First, make sure that all VHDL and Verilog files are closed and all VHDL and Verilog projects are closed. Next select  **Help > Sigasi > Floating license > Release Sigasi Floating Licenses**

To get the license back (to check the license out), open the license dialog **Help > Sigasi > Configure License...** and press **Apply**.

### How to block Sigasi Studio from checking out a license?

If you have configured an environment variable with the location of a FlexNet license server, you can instruct Sigasi Studio **not** to check out a license by setting the Sigasi Studio License key to `none`.

### Checking out and releasing the XPRT license

If you have a license for {{< xprt >}}, this is actually licensed as a `com.sigasi.hdt.xl` FlexNet feature
combined with a `com.sigasi.hdt.xl.doc` FlexNet feature.
The XL license is checked out as described above.

The XPRT license is checked out automatically in the following cases:

* When you open the Block Diagram view
* When you open the State Machine view
* When you open the Class Hierarchy view
* When you open the VUnit view
* When you export documentation
* When you click **Help > Sigasi > Floating License > Check out Sigasi Studio XPRT license**

The XPRT license can be released via: **Help > Sigasi > Floating license > Release Sigasi Studio XPRT Floating Licenses**.
