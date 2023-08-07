---
title: License Server Management
showinmenu: true
pager: true
---

# Introduction

Sigasi Studio's license key management system is based on the well known FlexNet (a.k.a. FlexLM) license manager.
Sigasi Studio supports both *node-locked* and *floating* license keys.
The Sigasi Studio [edition](/manual/common/editions) is controlled by the license key.

This section details the set-up of the license server when working with floating licenses.

# License server setup

## Download the FlexNet daemons

The version of the FlexNet daemons must be equal or higher than the FlexLM version of Sigasi Studio. The required version can be found in Sigasi Studio: **Window > Preferences > Sigasi > License Key** and look for the `FLEXLM_VERSION` line.

{{< figure src="/img/manual/flexlmversion.png" alt="Check FlexLM version in Sigasi Studio" link="/img/manual/flexlmversion.png" >}}

### FlexNet version 11.16.4.0

* [Linux 64 bit](https://download.sigasi.com/flexnet/v11.16.4.0/sigasi-flexnet-linux64.zip)
* [Windows 64 bit](https://download.sigasi.com/flexnet/v11.16.4.0/sigasi-flexnet-win64.zip) (Windows 7 or newer)

### FlexNet version 11.13.1.2

* Linux:
  * [Linux 64 bit](https://download.sigasi.com/flexnet/sigasi-flexnet-linux64.zip)
  * [Linux 32 bit](https://download.sigasi.com/flexnet/sigasi-flexnet-linux32.zip)
* Windows (Windows 7 or newer):
  * [Windows 64 bit](https://download.sigasi.com/flexnet/sigasi-flexnet-win64.zip)
  * [Windows 32 bit](https://download.sigasi.com/flexnet/sigasi-flexnet-win32.zip)
* Solaris (on SPARC) \[Deprecated. The last supported Sigasi Studio version is 3.6]:
  * [Solaris 64 bit](https://download.sigasi.com/flexnet/sigasi-flexnet-solaris64.zip)

## Customize License Server settings

By default, Sigasi license files use ports `27000` and `27001` on your license server.
If these ports are already in use on the server, you can change the port numbers in the license file.

* The port of the Sigasi daemon is set on the `DAEMON` line. For example: `DAEMON sigasi port=27001`, forces the Sigasi daemon to use port 27001.

* The port of the FlexNet daemon is set on the `SERVER` line For example: `SERVER your_server_name1 BD41FCF5DE27 27000`, forces FlexNet to use port 27000. This is the port clients need to use to check out a license.

You can change the port numbers and *your_server_name1* without breaking the signature.
If you have a firewall, remember to open these ports for access.

## Starting the FlexNet and Sigasi daemon on Linux

the easiest way to start the Sigasi FlexNet daemon is like this (on Linux)

```sh
#!/bin/sh
echo "Starting the Sigasi floating license server"
LOCATION=/home/flex/flexnet-sigasi
$LOCATION/lmgrd -c $LOCATION/sigasi.lic -l $LOCATION/debug.log
```

## Starting the FlexNet and Sigasi daemon on Windows

1. Download the Sigasi daemon (see above)
2. Create a folder to hold the license manager software, in this example we will use `D:\Sigasi\license`.
3. Unpack the zip file into the license folder  (`D:\Sigasi\license`)
4. Run the license configuration tool `lmtools.exe` as administrator.
5. Save the license file supplied for Sigasi Studio to the license folder
6. Using a text editor, edit the license file and replace `your_server_name1` with the name of the machine you are using, for example, from: `SERVER your_server_name1 74e50bb0911e` to: `SERVER Maple 74e50bb0911e`.  
    **Note**: If you are not sure of the name of the machine you are using click on the **System Settings** tab of lmtools, where it is shown, see below: {{< figure src="/img/manual/flexnet_windows_1.png" >}}
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

{{< figure src="/img/manual/flexnet_windows_2.png" >}}

# Troubleshooting

If your license key does not work, the first things to check are:

* Which version of the Sigasi license daemon are you using?  
  **Note:** The Sigasi 2 daemon needs to be updated to run Sigasi 3. Otherwise you will see an `License is not valid (Internal Flexlm Error)` error message in the Sigasi Studio preference page.
* Is the MAC address correct?
* Since [Sigasi Studio 4.3](/releasenotes/sigasi-4.03), on Linux Sigasi Studio uses the `ip` command to list MAC addresses instead of the now deprecated `ifconfig` command. If you're using a version of Sigasi Studio older than 4.3 on Linux, you might need to install additional packages to obtain the `ifconfig` command.
  * On Arch, Debian or Ubuntu Linux, the "net-tools" package is needed.
  * On (Open)Suse the "net-tools-deprecated" package is needed.
* Has the license expired?
* Did you copy the license string exactly as it was sent to you?
* Did you accidentally try to use a License Token as a license key?
  * A *License Token* is a 24 character string. You can use your license token to [Activate Your License Key](https://www.sigasi.com/activate-your-license-key).
  * A *License Key*  (or license file) looks like this:
  
```text
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
  * [Download](#download-the-flexnet-daemons) the daemon zip file on the client machine
  * Run `lmutil[.exe] lmdiag -c "<port>@<server>" -n`
  * If the server is running correctly, you should see a description of the valid FlexNet features served by you license server. 
* Make sure the server name in the license key file is correct.
* Make sure both the Sigasi and FlexNet daemon are the same version (i.e. from the same zip-file from the Sigasi download server). If you need to mix versions, the FlexNet daemon version should be equal to or higher than the Sigasi daemon version.
* **Firewall** problems:
  * make sure that the port for the Sigasi FlexLM license daemon is open
  * you can force the port for the Sigasi license daemon by adding USE_SERVER and DAEMON sigasi port=<port number>to your license key
* On Linux you might have to install lsb to avoid `No such file or directory` errors when starting lmgrd or other flexlm tools:
  * `sudo apt-get install lsb-core`
  * `zypper in lsb`
  * `yum install lsb`
  * `yum install redhat-lsb.i686`

  If the installation of `lsb-core` fails (e.g. on Debian Linux 10), try this workaround (as root):

  ```sh
  cd /lib64
  ln -s ld-linux-x86-64.so.2 ld-lsb-x86-64.so.3
  ```

* The `lmgrd` license manager needs to have write access to the `/usr/tmp/` path. If your system doesn't have a directory `/usr/tmp`, you can make a link to `/tmp` (as root) :

  ```sh
  ln -s /tmp /usr/tmp
  ```

* You can not have spaces in the daemon path.
* Some users reported that specifying an arbitrary absolute path for the Sigasi daemon on Windows (e.g. `DAEMON sigasi C:\\sigasi.exe port=27021`) does not work. It only works if the Sigasi daemon is in the `C:\Sigasi` folder.
  Other users have reported that you are *not* allowed to have the directory name being the same as the daemon name. For example: `c:\flexlm\sigasi\sigasi.exe` is invalid, but `c:\flexlm\vhdl_editor\sigasi.exe` works fine.
* Make sure the environment variable is correct: `SIGASI_LM_LICENSE_FILE=<port number>@<servername>`
* Verify that your server meets the [License Server System Requirements](/faq#what-are-the-license-server-requirements).  
  If you try to run the daemon on an unsupported version of Windows, you will typically see this error message: `CreateProcess error code: 0xc1   File= sigasi.exe`. 
* You can easily check the status of your license via the License Key preference page : **Preferences > Sigasi > License Key**. At the bottom of this preference page you can see the type and expiration date of your license.
* If you are accessing your license server through an SSH tunnel, try using `127.0.0.1` instead of `localhost`.
* Sigasi Studio pre-emptively tries to check out certain license features. As a result, you might see warning message like this in your server log. These messages can be safely ignored.

```text
9:14:47 (sigasi) UNSUPPORTED: "com.sigasi.hdt.custom" (PORT_AT_HOST_PLUS   ) testuser@testmachine  (License server system does not support this feature. (-18,327:10054 ""))
9:14:47 (sigasi) UNSUPPORTED: "com.sigasi.hdt.preview" (PORT_AT_HOST_PLUS   ) testuser@testmachine  (License server system does not support this feature. (-18,327:10054 ""))  
```

If the steps above do not help, feel free to {{< send-email >}} and send us a **screenshot of the license dialog** with the error message.

## Typical error messages

Check the content of the Sigasi License preference page via : **Window > Preferences** and **Sigasi > License Key**

> No license

* Is a valid *license key path* configured (or are valid environment variables used)?
* Is the user trying to use a Sigasi Studio 3 license in Sigasi 2.x?

> Invalid license key (inconsistent authentication code)

* Did you correct the server name to the actual server name in the (floating) license key file?

> Internal Flexlm Error

* Check version number of FlexNet daemon, it is probably outdated. If not, check the daemon log on the license server

> Invalid Message Received From License Server

* Check the daemon log on the license server
  
> Updating DACL Failed: "Service has been created but failed to update the DACL settings of FlexNet Licensing Service. It will give problem for accessing TS features. Check whether FlexNet Licensing Service is correctly installed or not and delete and create this service again."

* There seems to be a bug in `lmtools.exe` version 11 on some systems. You can work around this issue by configuring the (latest) Sigasi daemon with an older version of lmtools ([Download here](https://download.sigasi.com/flexnet/lmtools.zip)).

> (lmgrd) license manager: can't initialize:No SERVER lines in license file.  
> (lmgrd) License Path: "C:\FlexLM\sigasi\license.dat"  
> (lmgrd) FlexNet Licensing error:-13,66

* If you see this error message. Double check you license file contains line with `USE_SERVER`.

> FLEXnet Error: "Exiting due to signal 32" (Exited because another server was running)

This error seems to be caused by running multiple instances of license server. If this is the case, first make sure to stop `lmtools.exe`, `lmgrd.exe`, and `sigasi.exe`. If the error still exists after stopping these processes, the real cause might be the name of the `FlexLM` folder. 
If you installed the licensing software under the custom folder `C:\FlexLM\`, rename the folder to something else, such as `C:\LMFlex\`. After renaming the folder, also update the path that you set in lmtools "Config Services" tab.
