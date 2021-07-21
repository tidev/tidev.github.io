(window.webpackJsonp=window.webpackJsonp||[]).push([[970],{1861:function(t,e,o){"use strict";o.r(e);var n=o(21),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"installing-the-android-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-android-sdk"}},[t._v("#")]),t._v(" Installing the Android SDK")]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("This guide describes where to obtain and how to install the Google Android SDK and associated packages.")]),t._v(" "),o("h2",{attrs:{id:"compatibility-and-download"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-and-download"}},[t._v("#")]),t._v(" Compatibility and Download")]),t._v(" "),o("p",[t._v("Titanium requires the Android SDK Tools to be installed in order to allow you to develop Android applications.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("Remember that Oracle JDK is a prerequisite for Android development and should be installed first. You need at least JDK 8 installed. See "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/"}},[t._v("Installing Oracle JDK")]),t._v(" for instructions.")],1)]),t._v(" "),o("p",[o("img",{attrs:{src:"/images/guide/download/attachments/29004851/download_02.png",alt:"download_02"}})]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Android SDK Manager")]),t._v(" installer may be obtained from the "),o("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio and SDK tools"),o("OutboundLink")],1),t._v(" site.")]),t._v(" "),o("h3",{attrs:{id:"required-android-packages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#required-android-packages"}},[t._v("#")]),t._v(" Required Android Packages")]),t._v(" "),o("p",[t._v("As of Titanium 9.0.0, the build system will automatically download the Android SDK platforms and tools needed.")]),t._v(" "),o("p",[t._v("For Titanium 8.x.x, you need to installed the following packages via the Android SDK Manager yourself:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Package")]),t._v(" "),o("th",[t._v("Minimum Version")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Android SDK Tools")]),t._v(" "),o("td",[t._v("Rev 28")])]),t._v(" "),o("tr",[o("td",[t._v("Android SDK Build-tools")]),t._v(" "),o("td",[t._v("Rev 23")])]),t._v(" "),o("tr",[o("td",[t._v("Android SDK Platform (API Level)")]),t._v(" "),o("td",[t._v("API Level 29 for Titanium 8.3.x"),o("br"),o("br"),t._v("API Level 28 for Titanium version older than 8.3.0")])])])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("Titanium SDK 7.0.0+ requires Android SDK Tools v25 or newer as a minimum requirement.")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),o("p",[t._v("Take caution before upgrading these packages, as changes to the way they work has broken the Titanium toolchain a number of times in the past. Although these problems are often beyond our control, we always do our utmost to fix them as soon as we are made aware of them.")]),t._v(" "),o("p",[t._v("With this in mind, it's important to only upgrade these packages "),o("em",[t._v("between")]),t._v(" major projects, so that you have time to fix any problems that may result. Always consult the Android Tools "),o("a",{attrs:{href:"http://developer.android.com/sdk/tools-notes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Release Notes"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"http://tools.android.com/knownissues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Known Issues"),o("OutboundLink")],1),t._v(" first, and refer to our "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installation_Troubleshooting/"}},[t._v("Installation Troubleshooting")]),t._v(" guide to check whether there are any further actions that need to be taken to make the Titanium and the Android SDK compatible.")],1)]),t._v(" "),o("h3",{attrs:{id:"android-sdk-target-android-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-sdk-target-android-platform"}},[t._v("#")]),t._v(" Android SDK / Target Android platform")]),t._v(" "),o("p",[t._v("Each Titanium SDK supports building against a specific range of Android versions, as shown in the following table, and requires at least one of these versions to be installed. If you specify a "),o("code",[t._v("android:targetSDKVersion")]),t._v(" in the "),o("code",[t._v("tiapp.xml")]),t._v(" file of your project, you must specify one within the target min and max values. The minimum Android/SDK version column indicates the minimum version of Android that a device can run, which a Titanium application supports.")]),t._v(" "),o("h4",{attrs:{id:"supported-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions"}},[t._v("#")]),t._v(" Supported versions")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK Version")]),t._v(" "),o("th",[t._v("Min Target Android/SDK Version  "),o("br"),t._v("(android:targetSdkVersion)")]),t._v(" "),o("th",[t._v("Max Target Android/SDK Version  "),o("br"),t._v("(android:targetSdkVersion)")]),t._v(" "),o("th",[t._v("Minimum Android/SDK Version  "),o("br"),t._v("(android:minSdkVersion)")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("9.3.0 - latest")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("11.0.x (API 30)")]),t._v(" "),o("td",[t._v("4.4.x (API 19)")])]),t._v(" "),o("tr",[o("td",[t._v("8.3.0 - 9.2.2")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("10.0.x (API 29)")]),t._v(" "),o("td",[t._v("4.4.x (API 19)")])]),t._v(" "),o("tr",[o("td",[t._v("8.0.0 - 8.2.2")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("9.0.x (API 28)")]),t._v(" "),o("td",[t._v("4.4.x (API 19)")])]),t._v(" "),o("tr",[o("td",[t._v("7.5.0 - 7.5.1")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("9.0.x (API 28)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")])]),t._v(" "),o("tr",[o("td",[t._v("7.3.0 - 7.4.1")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("8.1.x (API 27)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")])]),t._v(" "),o("tr",[o("td",[t._v("7.0.0 - 7.2.0")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("7.0.x (API 25)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")])])])]),t._v(" "),o("h4",{attrs:{id:"unsupported-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-versions"}},[t._v("#")]),t._v(" Unsupported versions")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Titanium SDK Version")]),t._v(" "),o("th",[t._v("Min Target Android/SDK Version  "),o("br"),t._v("(android:targetSdkVersion)")]),t._v(" "),o("th",[t._v("Max Target Android/SDK Version  "),o("br"),t._v("(android:targetSdkVersion)")]),t._v(" "),o("th",[t._v("Minimum Android/SDK Version  "),o("br"),t._v("(android:minSdkVersion)")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("6.2.0 - 6.3.0")]),t._v(" "),o("td",[t._v("7.1.x (API 25)")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")])]),t._v(" "),o("tr",[o("td",[t._v("6.0.0 - 6.1.x")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")])]),t._v(" "),o("tr",[o("td",[t._v("5.1.0 - 5.5.x")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("4.0.x (API 14)")])]),t._v(" "),o("tr",[o("td",[t._v("5.0.0 - 5.0.x")]),t._v(" "),o("td",[t._v("5.0.x (API 21)")]),t._v(" "),o("td",[t._v("6.0.x (API 23)")]),t._v(" "),o("td",[t._v("4.0.x (API 14)")])]),t._v(" "),o("tr",[o("td",[t._v("4.0.0 - 4.1.x")]),t._v(" "),o("td",[t._v("5.0.x (API 21)")]),t._v(" "),o("td",[t._v("5.1.x (API 22)")]),t._v(" "),o("td",[t._v("4.0.x (API 14)")])]),t._v(" "),o("tr",[o("td",[t._v("3.4.1 - 3.5.1")]),t._v(" "),o("td",[t._v("4.0.x (API 14)*")]),t._v(" "),o("td",[t._v("5.0.x (API 21)**")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")])]),t._v(" "),o("tr",[o("td",[t._v("3.3.0 - 3.4.0")]),t._v(" "),o("td",[t._v("4.0.x (API 14)*")]),t._v(" "),o("td",[t._v("4.4.x (API 19)")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")])]),t._v(" "),o("tr",[o("td",[t._v("3.2.0 - 3.2.3")]),t._v(" "),o("td",[t._v("2.3.x (API 10)*")]),t._v(" "),o("td",[t._v("4.4.x (API 19)")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.2 - 3.1.3")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")]),t._v(" "),o("td",[t._v("4.3.x (API 18)")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.1")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")]),t._v(" "),o("td",[t._v("4.2.x (API 17)")]),t._v(" "),o("td",[t._v("2.3.x (API 10)")])]),t._v(" "),o("tr",[o("td",[t._v("3.1.0")]),t._v(" "),o("td",[t._v("2.2 (API 8)")]),t._v(" "),o("td",[t._v("4.2.x (API 17)")]),t._v(" "),o("td",[t._v("2.2 (API 8)")])]),t._v(" "),o("tr",[o("td",[t._v("2.1.2 - 3.0.2")]),t._v(" "),o("td",[t._v("2.2 (API 8)")]),t._v(" "),o("td",[t._v("4.1.x (API 16)")]),t._v(" "),o("td",[t._v("2.2 (API 8)")])]),t._v(" "),o("tr",[o("td",[t._v("2.0 - 2.1.1")]),t._v(" "),o("td",[t._v("2.2 (API 8)")]),t._v(" "),o("td",[t._v("4.0.x (API 15)")]),t._v(" "),o("td",[t._v("2.2 (API 8)")])]),t._v(" "),o("tr",[o("td",[t._v("1.8.x")]),t._v(" "),o("td",[t._v("2.2 (API 8)")]),t._v(" "),o("td",[t._v("3.x.x (API 11)")]),t._v(" "),o("td",[t._v("2.2 (API 8)")])]),t._v(" "),o("tr",[o("td",[t._v("1.7.x")]),t._v(" "),o("td",[t._v("2.1 (API 7)")]),t._v(" "),o("td",[t._v("3.x.x (API 11)")]),t._v(" "),o("td",[t._v("2.1 (API 7)")])])])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️ Notes")]),t._v(" "),o("p",[t._v("* If you are building an Android module, you need to have Android SDK 6.0.x (API 23) installed if using Release 6.0.0 and greater.")]),t._v(" "),o("p",[t._v("** The Titanium SDK does not support the "),o("a",{attrs:{href:"http://developer.android.com/wear/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android 4.4W SDK"),o("OutboundLink")],1),t._v(" (API 20), also known as the Android Wear SDK.")])]),t._v(" "),o("p",[t._v("Most mobile device manufacturers have been licensed to use Google's enhanced API, which provides support for Maps and other functionality. If this is the case for your target devices, you will need to install the relevant Google packages, listed as "),o("em",[t._v("Google APIs by Google Inc., Android API x...")]),t._v(" by the "),o("strong",[t._v("Android SDK Manager")]),t._v(' tool. In Studio, choose the SDKs with the naming format "Google APIs x.x" to use the enhanced APIs, or those without the "Google APIs" prefix otherwise.')]),t._v(" "),o("p",[t._v("Android SDK packages can be installed using the "),o("strong",[t._v("Android SDK Manager")]),t._v(" tool. See "),o("a",{attrs:{href:"#undefined"}},[t._v("Installing the Android SDK")]),t._v(" for detailed instructions.")]),t._v(" "),o("p",[t._v("The default Android SDK can be configured using Studio's "),o("em",[t._v("Preferences")]),t._v(", and then selected per-project using the "),o("em",[t._v("Run Configurations")]),t._v(".")]),t._v(" "),o("h3",{attrs:{id:"android-native-add-on-module-development-on-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-native-add-on-module-development-on-macos"}},[t._v("#")]),t._v(" Android Native Add-on Module Development on macOS")]),t._v(" "),o("p",[t._v("The Xcode command line tools are required to develop native Android add-on modules on macOS.")]),t._v(" "),o("p",[t._v("See "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#InstallingCommandLineToolsandPreviousSimulators"}},[t._v("Installing the iOS SDK: Installing Command Line Tools")]),t._v(" for detailed instructions.")],1),t._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),o("h3",{attrs:{id:"macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),o("p",[t._v("Note that the typical filesystem location of this software can be found in the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/"}},[t._v("macOS Software Locations")]),t._v(" section of these guides.")],1),t._v(" "),o("h4",{attrs:{id:"installing-android-sdk-tools-on-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-android-sdk-tools-on-macos"}},[t._v("#")]),t._v(" Installing Android SDK Tools on macOS")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Point a browser towards "),o("a",{attrs:{href:"https://developer.android.com/studio?pkg=studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio and SDK tools"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Download Android Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Once the .dmg file has downloaded, the "),o("strong",[t._v("Android Studio installer")]),t._v(" should pop up. "),o("strong",[t._v("Drag the Android Studio icon")]),t._v(" to the "),o("strong",[t._v("Applications folder")]),t._v(".")])])]),t._v(" "),o("h3",{attrs:{id:"windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),o("p",[t._v("Note that the typical filesystem location of this software can be found in the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/"}},[t._v("Windows Software Locations")]),t._v(" section of these guides.")],1),t._v(" "),o("h4",{attrs:{id:"installing-android-sdk-tools-on-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-android-sdk-tools-on-windows"}},[t._v("#")]),t._v(" Installing Android SDK Tools on Windows")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Point a browser towards "),o("a",{attrs:{href:"https://developer.android.com/studio?pkg=studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio and SDK tools"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("Download Android Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Once the .exe file has downloaded, "),o("strong",[t._v("double-click")]),t._v(" "),o("strong",[t._v("on the executable file")]),t._v(" to start the install process.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Next >")]),t._v(" button in the Android Studio Setup window.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Select the components")]),t._v(" you wish to install. By default, you should install both "),o("strong",[t._v("Android Studio")]),t._v(" and "),o("strong",[t._v("Android Virtual Device")]),t._v(". Click the "),o("strong",[t._v("Next >")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Choose the install location and click "),o("strong",[t._v("Next >")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Install")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Once installation is complete, click "),o("strong",[t._v("Next >")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Finish")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Launch Android Studio so it can download any necessary components for your version of Windows.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Finish")]),t._v(" button once Android Studio has finished downloading components.")])])]),t._v(" "),o("p",[t._v("Refer to the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/"}},[t._v("Windows Software Locations")]),t._v(" section, and add the path of the "),o("strong",[t._v("Android SDK Tools")]),t._v(" directory to your system's "),o("code",[t._v("PATH")]),t._v(".")],1),t._v(" "),o("p",[t._v("Then proceed to the "),o("a",{attrs:{href:"#installing-android-packages-with-android-sdk-manager"}},[t._v("Installing Android Packages with Android SDK Manager")]),t._v(" section.")]),t._v(" "),o("h2",{attrs:{id:"installing-android-packages-with-android-sdk-manager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-android-packages-with-android-sdk-manager"}},[t._v("#")]),t._v(" Installing Android Packages with Android SDK Manager")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Android SDK Tools")]),t._v(" package that has been installed contains the "),o("em",[t._v("Android SDK Manager")]),t._v(" that is used to install the rest of the Android SDK packages.")]),t._v(" "),o("p",[t._v("Launching the "),o("em",[t._v("Android SDK Manager")]),t._v(" differs depending on the platform.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("On macOS, go to Launchpad and click on Android Studio")])]),t._v(" "),o("li",[o("p",[t._v("On Windows, double-click on the Android Studio icon. Note: You may get prompted to run as an administrator. If so, from the Windows Start Menu and select "),o("em",[t._v("Run as administrator")]),t._v(". Enter the Administrator password.")])])]),t._v(" "),o("p",[t._v("In the Android SDK Manager, you will see different versions of the following items listed:")]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Android SDK Tools")]),t._v(" (mandatory) - includes the "),o("em",[t._v("Android SDK Manager")]),t._v(" and "),o("em",[t._v("Android Virtual Device Manager")]),t._v(" ("),o("code",[t._v("android")]),t._v(" executable)")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Android SDK Platform Tools")]),t._v(" (mandatory) - includes Android Debug Bridge, ("),o("code",[t._v("adb")]),t._v(" executable)")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("SDK Platform")]),t._v(" - provides the libraries for building for a specific version of the Android OS that uses the standard Google APIs.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Google APIs by Google Inc")]),t._v(" - provides the libraries for building for a specific version of Android that uses the "),o("em",[t._v("enhanced")]),t._v(" Google APIs (includes maps support).")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("System Image")]),t._v(" - For Android API versions 14 and above, the emulator system images are packaged separately from the SDK Platform package. Three versions of the system images are provided – ARM, Intel x86, and MIPS. The ARM system image is supplied by default in earlier SDK Platform packages, and corresponds to the hardware in most phones.")])])]),t._v(" "),o("p",[t._v("To install Android SDK on macOS:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Android Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Go to "),o("strong",[t._v("Tools")]),t._v(" > "),o("strong",[t._v("SDK Manager")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Under "),o("strong",[t._v("Appearance & Behavior")]),t._v(" > "),o("strong",[t._v("System Settings")]),t._v(" > "),o("strong",[t._v("Android SDK")]),t._v(", you will see a list of SDK Platforms to choose from. "),o("strong",[t._v("Select the SDK(s)")]),t._v(" you wish to use and click "),o("strong",[t._v("OK")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Android Studio will confirm your selection. Click "),o("strong",[t._v("OK")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Once the requested components have been installed, click "),o("strong",[t._v("Finish")]),t._v(" button.")])])]),t._v(" "),o("p",[t._v("To install Android SDK on Windows:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Android Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the Welcome to Android Studio window, click on "),o("strong",[t._v("Configure")]),t._v(" > "),o("strong",[t._v("SDK Manager")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Under "),o("strong",[t._v("Appearance & Behavior")]),t._v(" > "),o("strong",[t._v("System Settings")]),t._v(" > "),o("strong",[t._v("Android SDK")]),t._v(", you will see a list of SDK Platforms to choose from. "),o("strong",[t._v("Select the SDK(s)")]),t._v(" you wish to use and click "),o("strong",[t._v("OK")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Android Studio will confirm your selection. Click "),o("strong",[t._v("OK")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Accept")]),t._v(" radio button and click the "),o("strong",[t._v("Next")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Once the requested components have been installed, click "),o("strong",[t._v("Finish")]),t._v(" button.")])])]),t._v(" "),o("p",[t._v("The following steps are the normal process to install an Android SDK with Axway Appcelerator Studio (Appc Studio) but due to the bug noted in "),o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9035",target:"_blank",rel:"noopener noreferrer"}},[t._v("TISTUD-9035"),o("OutboundLink")],1),t._v(", Studio cannot install Android SDKs at this time.")]),t._v(" "),o("p",[t._v("In Appc Studio, confirm that your Android SDK(s) have been installed:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Launch "),o("strong",[t._v("Axway Appcelerator Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Login")]),t._v(" using your credentials (if you haven't already).")])]),t._v(" "),o("li",[o("p",[t._v("Go to "),o("strong",[t._v("Axway Appcelerator Studio")]),t._v(" > "),o("strong",[t._v("Preferences")]),t._v(" in the menu bar.")])]),t._v(" "),o("li",[o("p",[t._v("In the Preferences window, go to "),o("strong",[t._v("Studio")]),t._v(" > "),o("strong",[t._v("Platforms")]),t._v(" > "),o("strong",[t._v("Android")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Install SDKs...")]),t._v(" button in the "),o("strong",[t._v("General")]),t._v(" section.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("Android SDK(s)")]),t._v(" you wish to use.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Install")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Accept")]),t._v(" button for the "),o("strong",[t._v("Review License")]),t._v(" window.")])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Progress")]),t._v(" tab, you should see the status of the Android SDK(s) being downloaded and installed.")])]),t._v(" "),o("li",[o("p",[t._v("Review the installed SDKs in the General section of the Preferences window. You should now see the newly installed Android SDK(s).")])])]),t._v(" "),o("p",[t._v("Even though Appc Studio not display newly installed Android SDK(s), they are installed and available for use. You can confirm this by creating a new AVD (Android Virtual Device) and see the options to use the newly installed Android SDK(s).")]),t._v(" "),o("p",[t._v("There are two ways to create an AVD to use in Appc Studio: Create the AVD in Appc Studio or create it in Android Studio. Appc Studio should pick up the new AVD automatically if you created a new one via Android Studio.")]),t._v(" "),o("p",[t._v("To create an AVD via Appc Studio:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Appc Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the menu, go to "),o("strong",[t._v("Axway Appcelerator Studio")]),t._v(" > "),o("strong",[t._v("Preferences")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the Preferences window, go to "),o("strong",[t._v("Studio")]),t._v(" > "),o("strong",[t._v("Platforms")]),t._v(" > "),o("strong",[t._v("Android")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the Android Preferences section, click on the "),o("strong",[t._v("Create AVDs...")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Give the AVD a name in the "),o("strong",[t._v("AVD Name")]),t._v(" field using a-z A-Z 0-9 ._- characters only (no spaces or other special characters).")])]),t._v(" "),o("li",[o("p",[t._v("Select the desired device in the "),o("strong",[t._v("Device")]),t._v(" field.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("Android SDK")]),t._v(" from the "),o("strong",[t._v("System Image")]),t._v(" field.")])]),t._v(" "),o("li",[o("p",[t._v("After making your selections, click "),o("strong",[t._v("OK")]),t._v(" button to build the AVD.")])])]),t._v(" "),o("p",[t._v("To create an AVD via Android Studio:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Android Studio")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In the menu, go to "),o("strong",[t._v("Tools")]),t._v(" > "),o("strong",[t._v("AVD Manager")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Create Virtual Device...")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("category")]),t._v(" of virtual device you want to use.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("device")]),t._v(" and click the "),o("strong",[t._v("Next")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("System Image")]),t._v(" you want to use in the virtual device and click the "),o("strong",[t._v("Next")]),t._v(" button.")])]),t._v(" "),o("li",[o("p",[t._v("Android Studio will provide a name for you automatically based on the virtual device and system image you selected. Confirm you selections and click the "),o("strong",[t._v("Finish")]),t._v(" button.")])])]),t._v(" "),o("p",[t._v("Refer to the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#AndroidSDK/TargetAndroidPlatform"}},[t._v("Titanium Compatibility Matrix")]),t._v(" for the latest list of required packages.")],1),t._v(" "),o("h3",{attrs:{id:"installing-x86-emulator-packages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-x86-emulator-packages"}},[t._v("#")]),t._v(" Installing x86 Emulator Packages")]),t._v(" "),o("p",[t._v('In the Android SDK Manager, under the SDK Platforms tab, you can find "Intel x86 Atom" and "Intel x86 Atom_64" system images. These are 32-bit and 64-bit emulator images of that platform\'s API Level and will run faster in the emulator compared to the ARM emulator images.')]),t._v(" "),o("p",[t._v("Extra software may be required to take advantage of the x86 emulator – see "),o("a",{attrs:{href:"http://developer.android.com/tools/devices/emulator.html#accel-vm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring Virtual Machine Acceleration"),o("OutboundLink")],1),t._v(" in the Android Tools documentation.")]),t._v(" "),o("h2",{attrs:{id:"configuring-appcelerator-studio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-appcelerator-studio"}},[t._v("#")]),t._v(" Configuring Appcelerator Studio")]),t._v(" "),o("p",[t._v("To use the Android SDK with Appcelerator Studio, the path to the SDK must be set in the "),o("strong",[t._v("Preferences")]),t._v(" dialog.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open the Preferences dialog:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("On macOS, from the menu bar, select "),o("strong",[t._v("Appcelerator Studio")]),t._v(" > "),o("strong",[t._v("Preferences")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("On Windows, from the menu bar, select "),o("strong",[t._v("Window > Preferences")]),t._v(".")])])])]),t._v(" "),o("li",[o("p",[t._v("In the "),o("strong",[t._v("Preferences")]),t._v(" dialog, navigate to "),o("strong",[t._v("Studio > Platforms > Android SDK")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Set your Android SDK path. Enter the path to your Android SDK in the "),o("strong",[t._v("Android SDK Home")]),t._v(" textbox or click the "),o("strong",[t._v("Configure")]),t._v(" button to navigate to the SDK directory.")])]),t._v(" "),o("li",[o("p",[t._v("Select your default Android SDK. Select a "),o("strong",[t._v("Google APIs")]),t._v(" item from the "),o("strong",[t._v("Default Android SDK")]),t._v(" drop-down menu.")])])]),t._v(" "),o("h2",{attrs:{id:"configuring-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-cli"}},[t._v("#")]),t._v(" Configuring the CLI")]),t._v(" "),o("p",[t._v("To use the Android SDK with the Titanium CLI, the path to the SDK must be set in the Titanium CLI configuration settings. Run the following command and replace "),o("code",[t._v("/Users/appc/sdk/android-sdk/")]),t._v(" with the path to your Android SDK:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("titanium config android.sdk /Users/appc/sdk/android-sdk/\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);