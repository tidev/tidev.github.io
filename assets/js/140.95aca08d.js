(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1687:function(e,t,r){"use strict";r.r(t);var o=r(21),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"using-studio-from-behind-a-proxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-studio-from-behind-a-proxy"}},[e._v("#")]),e._v(" Using Studio From Behind a Proxy")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Studio "),o("strong",[e._v("requires")]),e._v(" an internet connection to authenticate the user to the Appcelerator cloud on the first launch, although the credentials are cached for subsequent use. Also, internet access is used for news, documentation, and code updates. This guide explains how to configure it for use behind a proxy. For Windows systems, use the system proxy settings (see the "),o("a",{attrs:{href:"#windows-system-settings"}},[e._v("Windows system settings")]),e._v(" section below for details).")]),e._v(" "),o("h2",{attrs:{id:"startup-splash-screen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#startup-splash-screen"}},[e._v("#")]),e._v(" Startup splash screen")]),e._v(" "),o("p",[e._v("If no user credentials are available for Studio on launch, the Studio splash screen will ask you to enter your user name and password. At the bottom of this dialog, click the "),o("strong",[e._v("Proxy Setup...")]),e._v(" link to open the following dialog:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(516),alt:"ProxySetup"}})]),e._v(" "),o("p",[e._v("The proxy schema ("),o("code",[e._v("HTTP")]),e._v(", "),o("code",[e._v("HTTPS")]),e._v(", and "),o("code",[e._v("SOCKS")]),e._v(" are all supported), server name or IP address, service port number, and authentication details can be configured. After clicking "),o("strong",[e._v("OK,")]),e._v(" then "),o("strong",[e._v("Login")]),e._v(" to start, all internet traffic will be directed via this proxy.")]),e._v(" "),o("h2",{attrs:{id:"preferences-window"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preferences-window"}},[e._v("#")]),e._v(" Preferences window")]),e._v(" "),o("p",[e._v("To configure your proxy settings once Studio has started, open the "),o("strong",[e._v("Preferences")]),e._v(" window and navigate to "),o("strong",[e._v("Network Connections")]),e._v(":")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu bar,")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Windows")]),e._v(": select "),o("strong",[e._v("Windows")]),e._v(" > "),o("strong",[e._v("Preferences")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Mac OS")]),e._v(": select "),o("strong",[e._v("Titanium Studio")]),e._v(" > "),o("strong",[e._v("Preferences")]),e._v(" or "),o("strong",[e._v("Appcelerator Studio")]),e._v(" > "),o("strong",[e._v("Preferences")]),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("Navigate to "),o("strong",[e._v("General")]),e._v(" > "),o("strong",[e._v("Network Connections")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the Proxy entry that you would like to edit, for example, "),o("strong",[e._v("HTTP,")]),e._v(" and click "),o("strong",[e._v("Edit...")])])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Host")]),e._v(" and "),o("strong",[e._v("Port")]),e._v(" fields, specify the name or IP address and port number of your proxy server.")])]),e._v(" "),o("li",[o("p",[e._v("If you have authentication enabled, check the "),o("strong",[e._v("Requires Authentication")]),e._v(" box and type in your proxy User and Password.")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("OK")]),e._v(" to apply your settings.")])]),e._v(" "),o("li",[o("p",[e._v("Restart Studio. All internet traffic will be directed via this proxy.")])])]),e._v(" "),o("h2",{attrs:{id:"windows-system-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-system-settings"}},[e._v("#")]),e._v(" Windows system settings")]),e._v(" "),o("p",[e._v("For Windows systems, Studio should use the system's proxy settings. You may need to enter the proxy settings when the splash screen appears to get to the "),o("strong",[e._v("Preferences")]),e._v(" window to change the settings.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the menu bar, select "),o("strong",[e._v("Windows")]),e._v(" > "),o("strong",[e._v("Preferences")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to "),o("strong",[e._v("General")]),e._v(" > "),o("strong",[e._v("Network Connections")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Change the "),o("strong",[e._v("Active Provider")]),e._v(" drop-down to "),o("strong",[e._v("Native")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("OK")]),e._v(" to apply your settings.")])]),e._v(" "),o("li",[o("p",[e._v("Restart Studio. All internet traffic will be directed via the Windows system proxy settings.")])])]),e._v(" "),o("h2",{attrs:{id:"whitelisting-urls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#whitelisting-urls"}},[e._v("#")]),e._v(" Whitelisting URLs")]),e._v(" "),o("p",[e._v("You may need to whitelist several URLs in some network environments. Below are the set of URLs to whitelist. If possible, it is easiest to whitelist "),o("code",[e._v("*.appcelerator.com")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Web access")])]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://www.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://university.axway.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("university.axway.com/"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://developer.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("developer.appcelerator.com"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[o("strong",[e._v("Software")])]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://registry.npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("registry.npmjs.org"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://admin.cloudapp-enterprise.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("admin.cloudapp-enterprise.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://appc-studio.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("appc-studio.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://www.appcelerator.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://go.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("go.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://preview.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("preview.appcelerator.com"),o("OutboundLink")],1),e._v(" (only for beta software downloads)")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://platform.axway.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://platform.axway.com/"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://security.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("security.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://secure-identity.cloud.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("secure-identity.cloud.appcelerator.com"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://downloads.platform.axway.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("downloads.platform.axway.com"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[e._v("The port numbers used for the URLs are 80 and 443.")]),e._v(" "),o("p",[e._v("For debugger and profiler, Studio will find a free port for the specific IP address, and if it does not locate one, it will use 8999 as the default. For LiveView, it requires ports 8323 and 8324.")]),e._v(" "),o("p",[e._v("For the local web server that Studio creates, the range of the port Studio looks for is controlled by the preference defined in Preferences > Studio > Web Servers > Built-in. By default, the range is 8020-8079.")]),e._v(" "),o("h2",{attrs:{id:"network-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-connections"}},[e._v("#")]),e._v(" Network connections")]),e._v(" "),o("p",[e._v("This section describes the preferences available on the General > Network Connections preference page.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Option")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("Default")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Active Provider")]),e._v(" "),o("td",[e._v("Specifies the settings profile to be used when opening connections. Choosing the "),o("strong",[e._v("Direct")]),e._v(" provider causes all the connections to be opened without the use of a proxy server. Selecting "),o("strong",[e._v("Manual")]),e._v(" causes settings defined in Eclipse to be used. On some platforms, there is also a "),o("strong",[e._v("Native")]),e._v(" provider available, selecting this one causes settings that were discovered in the OS to be used.")]),e._v(" "),o("td",[e._v("Native (if present)  "),o("br"),e._v("Manual (otherwise)")])]),e._v(" "),o("tr",[o("td",[e._v("Proxy entries")]),e._v(" "),o("td",[e._v("The table displays entries that are available for all providers. Checkboxes in the first column of the table indicate entries to be used for the currently selected provider.")]),e._v(" "),o("td")]),e._v(" "),o("tr",[o("td",[e._v("Proxy bypass")]),e._v(" "),o("td",[e._v("Use this table to specify, either by name or pattern, which hosts should not use any proxy. A direct connection will always be used for matching hosts. Checkboxes in the first column of the table indicate entries to be used for the currently selected provider.")]),e._v(" "),o("td")])])]),e._v(" "),o("h3",{attrs:{id:"proxy-entries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proxy-entries"}},[e._v("#")]),e._v(" Proxy entries")]),e._v(" "),o("p",[e._v("When using "),o("strong",[e._v("Manual")]),e._v(" proxy provider, there are three predefined schemas to set settings for: HTTP, HTTPS, and SOCKS. Configuration for each schema is displayed in the "),o("strong",[e._v("Proxy entries")]),e._v(" table. To edit settings for a particular schema, double-click the entry or select the entry and click "),o("strong",[e._v("Edit...")]),e._v(" button. If the "),o("strong",[e._v("Port")]),e._v(" field is left blank, the default port number will be used. Following table lists default port numbers for each of the predefined schemas.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Schema")]),e._v(" "),o("th",[e._v("Default Port")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("HTTP")]),e._v(" "),o("td",[e._v("80")])]),e._v(" "),o("tr",[o("td",[e._v("SSL")]),e._v(" "),o("td",[e._v("443")])]),e._v(" "),o("tr",[o("td",[e._v("SOCKS")]),e._v(" "),o("td",[e._v("1080")])])])]),e._v(" "),o("p",[e._v("This section was adapted from "),o("a",{attrs:{href:"https://help.eclipse.org/mars/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Freference%2Fref-net-preferences.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse's Network Connections"),o("OutboundLink")],1),e._v(" document.")])])}),[],!1,null,null,null);t.default=s.exports},516:function(e,t,r){e.exports=r.p+"assets/img/ProxySetup.ee31bdba.png"}}]);