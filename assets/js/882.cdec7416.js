(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1723:function(e,t,a){"use strict";a.r(t);var n=a(21),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adding-command-line-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-command-line-options"}},[e._v("#")]),e._v(" Adding Command-Line Options")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Several tools and techniques require you to either pass options on the command line or edit your .ini file. This gives you instructions for both techniques.")]),e._v(" "),a("h2",{attrs:{id:"finding-your-ini-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-your-ini-configuration-file"}},[e._v("#")]),e._v(" Finding Your INI Configuration File")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Locate the INI configuration file:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Mac OS X")]),e._v(":")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Navigate to the "),a("code",[e._v("/Applications/Appcelerator Studio")]),e._v(" folder in Finder.")])]),e._v(" "),a("li",[a("p",[e._v("Right-click (or control-click) on "),a("code",[e._v("AppceleratorStudio.app")]),e._v(" and choose Show package contents.")])]),e._v(" "),a("li",[a("p",[e._v("In the new Finder window, navigate to "),a("code",[e._v("Contents/MacOS")]),e._v(".")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Windows")]),e._v(": Navigate to the location of your Studio application (likely under "),a("code",[e._v("C:\\Users\\username\\AppData\\Local\\Appcelerator Studio")]),e._v(").")])])])]),e._v(" "),a("li",[a("p",[e._v("Open "),a("code",[e._v("AppceleratorStudio.ini.")])])]),e._v(" "),a("li",[a("p",[e._v("Edit the options as desired.")])]),e._v(" "),a("li",[a("p",[e._v("Save and close the file.")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("You can follow the same procedures on Eclipse. The folder structure will be identical, but the file to edit is "),a("strong",[e._v("eclipse.ini")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"vm-args-vs-launcher-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-args-vs-launcher-arguments"}},[e._v("#")]),e._v(" VM args vs. Launcher Arguments")]),e._v(" "),a("p",[e._v("When working with command-line arguments, they are generally split into two camps: launcher arguments and VM (virtual machine) arguments. The Launcher arguments are arguments that come from the following "),a("a",{attrs:{href:"http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("list"),a("OutboundLink")],1),e._v(". VM arguments are arguments that will be passed to Studio or the Java virtual machine.")]),e._v(" "),a("p",[e._v("In general, launcher arguments control options about how Studio starts and some initial configuration options. VM arguments control how Studio behaves when it is running.")]),e._v(" "),a("h2",{attrs:{id:"specifying-launcher-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifying-launcher-arguments"}},[e._v("#")]),e._v(" Specifying Launcher Arguments")]),e._v(" "),a("p",[e._v("Launcher arguments can be passed on the command line, like so:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TitaniumStudio.exe -debug\n")])])]),a("p",[e._v("or they can appear in the .ini file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-debug\n--launcher.defaultAction\nopenFile\n-vmargs\n-Xms40m\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("Note that launcher arguments always appear first, before the vmargs section. No matter which type of item you are specifying, generally the value goes on the "),a("em",[e._v("next")]),e._v(" line (see launcher.defaultAction above)")])]),e._v(" "),a("h2",{attrs:{id:"specifying-vm-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifying-vm-arguments"}},[e._v("#")]),e._v(" Specifying VM Arguments")]),e._v(" "),a("p",[e._v("Virtual machine arguments may be specified in one of two ways:")]),e._v(" "),a("p",[e._v("Use -DpropName=propValue as an argument to the Java Virtual Machine on the command line, like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TitaniumStudio.exe -vmargs -DpropName=propValue\n")])])]),a("p",[e._v("Set the property in question to the desired value in the config.ini file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("--launcher.defaultAction\nopenFile\n-vmargs\n-DpropName=propValue\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);