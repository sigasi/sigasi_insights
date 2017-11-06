---
title: License Key Management
layout: page 
pager: true
---

# Introduction

Sigasi's license key management system is based on the well known FlexNet (a.k.a. FlexLM) license manager.
Sigasi supports both *node-locked* and *floating* license keys.


# Node locked licenses

If you have a node-locked license, you can enter your license key directly in Sigasi Studio.

1. Open the Sigasi License Key preference page: **Window > Preferences > Sigasi > License Key**
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

An example floating license looks like this. Note that the first line starts with `DAEMON`:

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

## Configuring Floating license in Sigasi Studio (Flexnet Client)

In order to use a floating license, Sigasi Studio needs to know how to contact the server.
The license server can be configured in Sigasi Studio or using an environment variable.

### Configure the license server in Sigasi Studio

In Sigasi Studio, navigate to the **License Key** preference page via:
**Window > Preferences > Sigasi > License Key**.
Next enter `<portnumber>@<servername>` in the **License key path**. For example:
```
27000@myserver.example.com
```

If you have redundant license servers, enter each of the license servers separated by "&".
For example:
```
27000@myserver1.example.com&27000@myserver2.example.com&27000@myserver3.example.com
```

If you leave the **License key path** empty, Sigasi Studio will try to use an environment variable
to find the license server.

### Configure the license server in an environment variable

You can also set your license server via an environment variable instead of configuring it in Sigasi Studio.
Both `SIGASI_LM_LICENSE_FILE` and `LM_LICENSE_FILE` are supported.
When `SIGASI_LM_LICENSE_FILE` is set, `LM_LICENSE_FILE` is ignored.

Note that if you want to use an environment variable, you can not enter a path in the License Key preference page. The value on this page has priority over environment variables. 

Linux Example:
```
export SIGASI_LM_LICENSE_FILE=27000@myserver.example.com
```

For redundant license servers, the servers should be separated using ":" on Linux and using ";" on Windows.

Linux Example:
```
export SIGASI_LM_LICENSE_FILE="27000@myserver1.example.com:27000@myserver2.example.com:27000@myserver3.example.com"
```

## License server setup

### Download the FlexNet daemons {: #download-flexnet-daemons}

* Linux:
	* [Linux 64 bit](http://download.sigasi.com/flexnet/sigasi-flexnet-linux64.zip)
	* [Linux 32 bit](http://download.sigasi.com/flexnet/sigasi-flexnet-linux32.zip)
* Windows (Windows 7 or newer):
	* [Windows 64 bit](http://download.sigasi.com/flexnet/sigasi-flexnet-win64.zip)
	* [Windows 32 bit](http://download.sigasi.com/flexnet/sigasi-flexnet-win32.zip)
* Solaris (on SPARC) \[Deprecated. Last supported Sigasi Studio version will be 3.6]:
	* [Solaris 64 bit](http://download.sigasi.com/flexnet/sigasi-flexnet-solaris64.zip)

### Customize License Server settings

You can change the port of the FlexNet and Sigasi daemon by changing the port numbers in the license key. By default ports `27000` and `27001` are used.

The port of the Sigasi daemon is set on the `DAEMON` line. For example: `DAEMON sigasi port=27001`, forces the Sigasi to use port 27001. 

The port of the FlexNet daemon is set on the `SERVER` line For example: `SERVER your_server_name1 BD41FCF5DE27 27000`, forces FlexNet to use port 27000.

You can change the ports and servername without breaking the signature.
	

### Starting the Flexnet and Sigasi Daemon on Linux

the easiest way to start the Sigasi Flexnet Daemon is like this (on Linux)

```
#!/bin/sh
echo "Starting the Sigasi floating license server"
LOCATION=/home/flex/flexnet-sigasi
$LOCATION/lmgrd -c $LOCATION/sigasi.lic -l $LOCATION/debug.log
```

### Starting the Flexnet and Sigasi Daemon on Windows

1. Download the Sigasi daemon (see above)
2. Create a folder to hold the license manager software, in this example we will use `D:\Sigsi\license`.
3. Unpack the zip file into the license folder  (`D:\Sigasi\license`)
4. Run the license configuration tool `lmtools.exe` as administrator.
5. Save the license file supplied for Sigasi to the license folder
6. Using a text editor edit the license file and replace `your_server_name1` with the name of the machine you are using, for example:
	From: `SERVER your_server_name1 74e50bb0911e`
	To: `SERVER Maple 74e50bb0911e`
	
	**Note**: If you are not sure of the name of the machine you are using click on the **System Settings** tab of lmtools, where it is shown, see below: ![](images/flexnet_windows_1.png)

7. Click on the **Config Services** tab and fill in the following, use the browse button when available:
	* **Service Name**: Sigasi License Manager
	* **Path to lmgrd.exe**: `D:\sigasi\license\lmgrd.exe`
	* **Path to license file**: `D:\sigasi\license\sigasi.lic`
	* **Path to the debug log file**: `D:\sigasi\license\debug.log`
	**Note**: You will probably need to type the "Path to the debug log file", in full as the file will not exist so you cannot browse to it.
8. Ensure both the following check boxes are checked:
	* **Use Services**
	* **Start Server at Power Up**
9. Now click the **Save Service** button, and click **yes** on the confirmation dialog.
10. Switch to the **Start/Stop/Reread** tab and start the server.

The license server should now be configured correctly, and looks a bit like this one

![](images/flexnet_windows_2.png)


## Floating License options


### Release a floating license

You can release a floating license (*check a license in*) without closing your Sigasi application or Eclipse application. This is useful if you use Eclipse to edit other files than VHDL files, like C or Tcl.

First, make sure that all VHDL and Verilog files are closed and all VHDL and Verilog projects are closed. Next select  **Help > Sigasi > Floating license > Release Sigasi Floating Licenses**

To get the license back (to check the license out), open the license dialog **Help > Sigasi > Configure License...** and press **Apply**.

### How to block Sigasi Studio from checking out a license?

If you have configured an environment variable with the location of a Flexnet license server, you can instruct Sigasi **not** to check out a license by setting the Sigasi Studio License key to `none`.

### Mix of Creator and XL licenses

If your license server serves both Sigasi Studio **Creator** and **XL** licenses, you can configure Sigasi studio to only checkout Sigasi **Creator** licenses (and **not** XL licenses) by enabling the "**Do not try to checkout floating Sigasi Studio XL licenses**" option on **Window > Preferences > Sigasi > License Key > Floating Options**

### Checking out and releasing the Doc addon license

If you have licenses for Sigasi Studio XL Doc, this is actually licensed as Sigasi Studio XL, with a Doc add-on license. The XL license is checked out as described above.

The Doc add-on is checked out automatically in the following cases:

* When you open the Block Diagram view
* When you open the State Machine view
* When you try to export PDF documentation
* When you click **Help > Sigasi > Floating License > Check out Sigasi Studio XL Doc license**

The Doc add-on license is released via: **Help > Sigasi > Floating license > Release Sigasi Studio XL Doc Floating Licenses**.


# Troubleshooting

If your license key does not work, the first things to check are:

* Which version of the Sigasi license daemon are you using?  
  **Note:** The Sigasi 2 daemon needs to be updated to run Sigasi 3. Otherwise you will see an `License is not valid (Internal Flexlm Error)` error message in the Sigasi preference page.
* Is the MAC address correct?
* Are you on Arch Linux?  
  Make sure to install the "net-tools" package
* Has the license expired?
* Did you copy the license string exactly as it was sent to you?
* Did you accidentally try to use a License Token as a license key?
    * A *License Token* is a 24 character string. You can use your license token to [activate_key].
    * A *License Key*  (or license file) looks like this:
```
INCREMENT com.sigasi.hdt sigasi 2.0 18-nov-2012 uncounted \
        VENDOR_STRING="company:www.example.com;mac:10f2dd92c5ac;name:John \
        Doe;type:trial" HOSTID=ANY ISSUER=Sigasi ISSUED=21-Oct-2012 \
        START=21-Oct-2012 SIGN="0CCC 87EA 9BB6 256E 7D81 E49D B2A6 \
        E53D 1CA5 41D4 63DF 8671 5695 EF82 0E30 1028 732D DED3 0999 \
        FD11 8B97 42B0 7CF2 F51F 20A0 DA6E 7F54 9D64 FF29 49AB"
``` 

## Floating licenses

If your floating license server does not function properly, try the following steps:

* Start the FlexLM daemon with the `-z` option to see what is going wrong
* You can check that the FlexNet daemon is running as expected by following these steps:
    * [Download][#download-flexnet-daemons] the daemon zip file on the client machine
    * Run
    ```
    lmutil[.exe] lmdiag -c "<port>@<server>" -n
    ```
    * If the server is running correctly, you should see a description of the valid FlexNet features served by you license server. 
* Make sure the server name in the license key file is correct.
* Make sure both the Sigasi and Flexnet Daemon are the same version (i.e. from the same zip-file from the Sigasi download server).   
* **Firewall** problems:
	* make sure that the port for the Sigasi FlexLM license daemon is open
	* you can force the port for the Sigasi license daemon by adding USE_SERVER and DAEMON sigasi port=<port number>to your license key
* On Linux you might have to install lsb:
	* `sudo apt-get install lsb-core`
	* `zypper in lsb`
	* `yum install lsb`
	* `yum install redhat-lsb.i686`
* You can not have spaces in the daemon path.
* Some users reported that specifying an arbitrary absolute path for the Sigasi daemon on Windows (e.g. `DAEMON sigasi C:\\sigasi.exe port=27021`) does not work. It only works if the sigasi daemon is in the `C:\Sigasi` folder.
  Other users have reported that you are *not* allowed to have the directory name being the same as the daemon name. For example: `c:\flexlm\sigasi\sigasi.exe` is invalid, but `c:\flexlm\vhdl_editor\sigasi.exe` works fine.
* Make sure the environment variable is correct: `SIGASI_LM_LICENSE_FILE=<port number>@<servername>`
* Verify that your server meets the [/faq#what-are-the-system-requirements].  
  If you try to run the daemon on an unsupported version of Windows, you will typically see this error message: `CreateProcess error code: 0xc1   File= sigasi.exe`. 
* You can easily check the status of your license via the License Key preference page : **Preferences > Sigasi > License Key**. At the bottom of this preference page you can see the type and expiration date of your license.
* If you are accessing your license server through an SSH tunnel, try using `127.0.0.1` instead of `localhost`. 
* Sigasi Studio pre-emptively tries to check out certain license features. As a result, you might see warning message like this in your server log. These messages can be safely ignored.
```
9:14:47 (sigasi) UNSUPPORTED: "com.sigasi.hdt.custom" (PORT_AT_HOST_PLUS   ) testuser@testmachine  (License server system does not support this feature. (-18,327:10054 ""))
9:14:47 (sigasi) UNSUPPORTED: "com.sigasi.hdt.preview" (PORT_AT_HOST_PLUS   ) testuser@testmachine  (License server system does not support this feature. (-18,327:10054 ""))  
```

If the steps above do not help, feel free to [contact-us] and send us a **screenshot of the license dialog** with the error message.


## Typical error messages

Check the content of the Sigasi License preference page via : **Window > Preferences** and **Sigasi > License Key**

> No license

  * Is a valid *license key path* configured (or are valid environment variables used)?
  * Is the user trying to use a Sigasi Studio 3 license in Sigasi 2.x?

> No Such Feature Exists

  * If you have an XL (doc) license, make sure you did **not enable** the **Do not try to checkout floating Sigasi Studio XL licenses** option on **Preferences > Sigasi > License Key > Options**.

> Invalid license key (inconsistent authentication code)

* Did you correct the server name to the actual server name in the (floating) license key file?

> Internal Flexlm Error

  * Check version number of FlexNet daemon, it is probably outdated. If not, check the daemon log on the license server

> Invalid Message Received From License Server

  * Check the daemon log on the license server
  
> Updating DACL Failed: "Service has been created but failed to update the DACL settings of FlexNet Licensing Service. It will give problem for accessing TS features. Check whether FlexNet Licensing Service is correctly installed or not and delete and create this service again."

  * There seems to be a bug in `lmtools.exe` version 11 on some systems. You can work around this issue by configuring the (latest) Sigasi daemon with an older version of lmtools ([Download here](http://download.sigasi.com/flexnet/lmtools.zip)). 
  
> (lmgrd) license manager: can't initialize:No SERVER lines in license file.  
> (lmgrd) License Path: "C:\FlexLM\sigasi\license.dat"  
> (lmgrd) FlexNet Licensing error:-13,66

  * If you see this error message. Double check you license file contains line with `USE_SERVER`.
