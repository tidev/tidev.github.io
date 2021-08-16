(window.webpackJsonp=window.webpackJsonp||[]).push([[1003],{1906:function(e,t,a){"use strict";a.r(t);var i=a(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"building-the-titanium-sdk-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-titanium-sdk-from-source"}},[e._v("#")]),e._v(" Building the Titanium SDK From Source")]),e._v(" "),a("p",[e._v("This document provides information on how to build Titanium SDK from source files by listing software requirements, how to set up your environment, where to get the source files, building the SDK, how to install a build SDK, and speeding up the Titanium SDK build.")]),e._v(" "),a("h2",{attrs:{id:"software-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software Requirements")]),e._v(" "),a("p",[e._v("You must have the following software installed to be able to compile the Titanium SDK. (Click on any item to get instructions on how to install it for your system.)")]),e._v(" "),a("p",[e._v("The following software is required for building Titanium applications, and you probably already have it installed:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/"}},[e._v("Oracle JDK")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/"}},[e._v("iOS SDK")]),e._v(" (8.0+, only on macOS systems)")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/"}},[e._v("Android SDK")]),e._v(" (4.1+)")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/"}},[e._v("Node.js")]),e._v(" (8.x LTS+)")],1)])]),e._v(" "),a("p",[e._v("The following additional software is required for building the Titanium SDK:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Git/"}},[e._v("Git")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/"}},[e._v("Android NDK")])],1)]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.microsoft.com/visualstudio/eng/downloads#d-2010-express",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual C++ 2010 Express"),a("OutboundLink")],1),e._v(" (for Windows)")])])]),e._v(" "),a("p",[e._v("Many of these items you may already have installed for developing Titanium applications.")]),e._v(" "),a("p",[e._v("To build the SDK for Android, you must have either Apache Ant or Eclipse and ADT installed. In most cases, you should probably have both--Ant for command-line builds, and Eclipse and ADT for interactive builds and debugging. Building the SDK using "),a("code",[e._v("scons")]),e._v(", as described here, requires Ant.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("ADT has been discontinued and we don't recommend using it.")])]),e._v(" "),a("h3",{attrs:{id:"windows-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-notes"}},[e._v("#")]),e._v(" Windows Notes")]),e._v(" "),a("p",[e._v("For Windows, if you use Studio, you may need to reinstall some of the tools, such as Git, Java and Node.js, and modify your PATH variable to the new locations of the binary executables. Paths to tools should not contain spaces.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-your-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-environment"}},[e._v("#")]),e._v(" Setting Up Your Environment")]),e._v(" "),a("p",[e._v("The following environment variables must be set in order to build the SDK from source.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Varible")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ANDROID_SDK")]),e._v(" "),a("td",[e._v("Android SDK directory, for example, "),a("code",[e._v("/opt/android-sdk")])])]),e._v(" "),a("tr",[a("td",[e._v("ANDROID_NDK")]),e._v(" "),a("td",[e._v("Android NDK directory, for example, "),a("code",[e._v("/opt/android-ndk")])])]),e._v(" "),a("tr",[a("td",[e._v("JAVA_HOME")]),e._v(" "),a("td",[e._v("Oracle JDK directory, for example, C:\\Java\\ jdk 1.8.0_121")])])])]),e._v(" "),a("h2",{attrs:{id:"getting-the-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-source"}},[e._v("#")]),e._v(" Getting the Source")]),e._v(" "),a("p",[e._v("The simplest way to get the SDK source is to simply clone it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/appcelerator/titanium_mobile.git\n")])])]),a("p",[e._v("However, if you have any interest in contributing to Titanium, you should create your own fork of the "),a("code",[e._v("titanium_mobile")]),e._v(" repository on github, as described in the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/"}},[e._v("Pull Request Guide")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"checking-out-a-pull-request-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-out-a-pull-request-locally"}},[e._v("#")]),e._v(" Checking Out a Pull Request Locally")]),e._v(" "),a("p",[e._v("If you want to test a changes that is a pull request on Github, you can add and checkout remote PR branches to your local titanium_mobile repo. Note that there are over 10000 PRs in the titanium_mobile Github repo, and over 10000 remote PR branches will be linked to your local repo. They will not be downloaded until you explicitly clone them.")]),e._v(" "),a("p",[a("strong",[e._v("To add the remote PR branches:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("From the root level of your titanium_mobile repo, open the "),a("code",[e._v(".git/config")]),e._v(" file.")])]),e._v(" "),a("li",[a("p",[e._v('Locate the appcelerator/titanum_mobile repo contents in the file. Note that the remote repo name will be different depending on how you retrieved the appcelerator/titanum_mobile remote repo. In the example below, it was name "upstream".')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[remote "upstream"]\n        fetch = +refs/heads/*:refs/remotes/upstream/*\n        url = https://github.com/appcelerator/titanium_mobile.git\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Add the following line to the section and replace "),a("code",[e._v("<remote_name>")]),e._v(" with the name of the remote repo:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("fetch = +refs/pull/*/head:refs/remotes/<remote_name>/pr/*\n")])])]),a("p",[e._v("In the previous example, the section now looks like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[remote "upstream"]\n        fetch = +refs/heads/*:refs/remotes/upstream/*\n        url = https://github.com/appcelerator/titanium_mobile.git\n        fetch = +refs/pull/*/head:refs/remotes/upstream/pr/*\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Fetch the remote PR branches:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git fetch upstream\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Checkout the PR you want to test:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout pr/####\n")])])])])]),e._v(" "),a("p",[a("strong",[e._v("To remove the PR remote branches, run the following command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git fetch upstream --prune\n")])])]),a("h2",{attrs:{id:"build-the-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-the-sdk"}},[e._v("#")]),e._v(" Build the SDK")]),e._v(" "),a("p",[e._v("The method written below is the old way. The repo has now been updated to do away with scons. Please refer to "),a("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/blob/master/README.md#building-locally",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/appcelerator/titanium_mobile/blob/master/README.md#building-locally"),a("OutboundLink")],1),e._v(" on how to build locally with Node.JS scrips.")]),e._v(" "),a("p",[e._v("In the root of your "),a("code",[e._v("titanium_mobile")]),e._v(" repo, run the following commands:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\nnode scons.js cleanbuild\n")])])]),a("p",[e._v("By default, the above will build the SDK for all platforms. You can specify platforms to limit the generation of unmentioned platforms, e.g. "),a("code",[e._v("node scons.js cleanbuild ios")]),e._v(".")]),e._v(" "),a("p",[e._v("When updating to a new version of the SDK, it is usually necessary to rerun "),a("code",[e._v("npm install")]),e._v(" to update the local Node dependencies.")]),e._v(" "),a("h2",{attrs:{id:"installing-a-built-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-built-sdk"}},[e._v("#")]),e._v(" Installing a Built SDK")]),e._v(" "),a("p",[e._v("Once you've built the SDK successfully, the built SDK is in "),a("code",[e._v("titanium_mobile_dir/dist/mobilesdk-<version>-<os>.zip")]),e._v(", where\n"),a("code",[e._v("titanium_mobile")]),e._v(" is the root of your local repo, "),a("code",[e._v("<version>")]),e._v(" is the current version of the SDK master branch, and "),a("code",[e._v("<os>")]),e._v(" is the OS you built for,\nsuch as "),a("code",[e._v("windows")]),e._v(" or "),a("code",[e._v("osx")]),e._v(". By using the above Node commands, the SDK will automatically installed for you. To manually install a packaged SDK,\nselect one of the following options:")]),e._v(" "),a("h3",{attrs:{id:"to-install-the-sdk-using-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-install-the-sdk-using-studio"}},[e._v("#")]),e._v(" To Install the SDK Using Studio")]),e._v(" "),a("p",[e._v("Note that if you install an SDK using Studio, it will appear in Studio with the default version number. If you want to rename your custom SDK, see "),a("a",{attrs:{href:"#to-install-the-sdk-manually"}},[e._v("To Install the SDK Manually")]),e._v(".")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Click "),a("strong",[e._v("Help")]),e._v(" > "),a("strong",[e._v("Install Titanium SDK...")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("strong",[e._v("Install from URL")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Browse")]),e._v(". Browse your "),a("code",[e._v("<titanium_mobile_dir>/dist")]),e._v(" folder and select the zip file.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"to-install-the-sdk-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-install-the-sdk-manually"}},[e._v("#")]),e._v(" To Install the SDK Manually")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Unzip the zip file.")])]),e._v(" "),a("li",[a("p",[e._v("Inside the "),a("code",[e._v("mobilesdk/<os>")]),e._v(" folder, there is a folder named with the version number (for example, 7.2.0). You may want to rename this folder so you can distinguish it later – for example, 8"),a("code",[e._v(".2.0.TIMOB-1234")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Copy the SDK folder to the folder where your other Titanium SDKs are installed.")])])]),e._v(" "),a("p",[e._v("The default installation folder for SDKs varies by operating system:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("macOS:")]),e._v(" "),a("p",[a("code",[e._v("~/Library/Application Support/Titanium")])])]),e._v(" "),a("li",[a("p",[e._v("Windows:")]),e._v(" "),a("p",[a("code",[e._v("%ProgramData%\\Titanium")])])])]),e._v(" "),a("h2",{attrs:{id:"speeding-up-the-titanium-sdk-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speeding-up-the-titanium-sdk-build"}},[e._v("#")]),e._v(" Speeding Up the Titanium SDK Build")]),e._v(" "),a("p",[e._v("The process of compiling the "),a("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium SDK source code"),a("OutboundLink")],1),e._v(" can be very time consuming if your environment is not primed to do so. Here's a short list of tips and tricks for getting that compile time down. In our testing so far, these tips can reduce compile time by as much as 80%!")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("At this time, the instructions refer specifically to speeding up the Titanium SDK build on a macOS machine.")])]),e._v(" "),a("h3",{attrs:{id:"use-ccache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-ccache"}},[e._v("#")]),e._v(" Use ccache")]),e._v(" "),a("p",[e._v("The Android NDK can use "),a("a",{attrs:{href:"http://ccache.samba.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ccache"),a("OutboundLink")],1),e._v(", a tool for reusing cached C/C++ compilations. We get huge improvements in build time with it.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HomeBrew"),a("OutboundLink")],1),e._v(" if you don't have it installed already")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("ccache")]),e._v(" with the following command: "),a("strong",[a("code",[e._v("brew install ccache")])])])]),e._v(" "),a("li",[a("p",[e._v("Set an environment variable "),a("code",[e._v("NDK_CCACHE")]),e._v(" to point to it. Installed with HomeBrew, the command would be: "),a("strong",[a("code",[e._v("export NDK_CCACHE=/usr/local/bin/ccache")])])])])]),e._v(" "),a("h3",{attrs:{id:"parallelize-compiling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallelize-compiling"}},[e._v("#")]),e._v(" Parallelize Compiling")]),e._v(" "),a("p",[e._v("The NDK can also parallelize while compiling, which can speed up the process.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Determine how many cores your machine has. You can use this command on macOS: "),a("strong",[a("code",[e._v('system_profiler | grep -i "Number Of Cores"')])])])]),e._v(" "),a("li",[a("p",[e._v("Multiply the above number by 2. So if the above command returned "),a("code",[e._v("Number of Cores: 2")]),e._v(", then your value should be 4.")])]),e._v(" "),a("li",[a("p",[e._v("Set an environment variable "),a("code",[e._v("NUM_CPUS")]),e._v(" equal to the above value. In this case: "),a("strong",[a("code",[e._v("export NUM_CPUS=4")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);