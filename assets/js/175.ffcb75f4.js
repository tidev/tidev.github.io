(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1883:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maintaining-a-custom-androidmanifest-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maintaining-a-custom-androidmanifest-xml"}},[t._v("#")]),t._v(" Maintaining a Custom AndroidManifest.xml")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("For the most part, if you have to add properties to the "),e("code",[t._v("AndroidManifest.xml")]),t._v(" file, you can simply add them to the application's "),e("code",[t._v("tiapp.xml")]),t._v(" file. If you encounter a setting that you can't override in "),e("code",[t._v("tiapp.xml")]),t._v(", you can create a custom "),e("code",[t._v("AndroidManifest.xml")]),t._v(" file.")]),t._v(" "),e("h2",{attrs:{id:"how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),e("p",[t._v('When you create a new mobile application, you will now see an "android" section inside '),e("code",[t._v("tiapp.xml")]),t._v(". When empty, it just looks like this:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Note we've included the official Android namespace qualifier, and the reason for that is because we wanted the ability to take things out of this section and plop them right into the "),e("code",[t._v("AndroidManifest.xml")]),t._v(' for you. To that end, things that you put inside of a "manifest" sub-element will be put into your android manifest for you at build time. See '),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/"}},[t._v("tiapp.xml and timodule.xml Reference")]),t._v(" for details on elements that you can put in the "),e("code",[t._v("tiapp.xml")]),t._v(" file.")],1),t._v(" "),e("h3",{attrs:{id:"custom-manifest-entries-in-tiapp-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-manifest-entries-in-tiapp-xml"}},[t._v("#")]),t._v(" Custom Manifest Entries in tiapp.xml")]),t._v(" "),e("p",[t._v("For the most part, if you add a manifest entry to the "),e("code",[t._v("tiapp.xml")]),t._v(" file, it replaces the entry in the generated file. Consider the following section of a tiapp.xml file:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-sdk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("minSdkVersion")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("14"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("supports-screens")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("smallScreens")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("normalScreens")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("largeScreens")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("xlargeScreens")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Most elements inside the "),e("code",[t._v("<manifest>")]),t._v(" will be added as children to the "),e("code",[t._v("<manifest>")]),t._v(" element inside of "),e("code",[t._v("AndroidManifest.xml")]),t._v(" at build time, with some intelligence built in. The "),e("code",[t._v("<supports-screen>")]),t._v(" tag in your tiapp.xml replaces the default "),e("code",[t._v("<supports-screen>")]),t._v(" tag.")]),t._v(" "),e("p",[t._v("The manifest's all-important "),e("a",{attrs:{href:"http://developer.android.com/guide/topics/manifest/application-element.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("<application>")]),e("OutboundLink")],1),t._v(" element is handled differently. Your elements are applied additively, rather than replacing the "),e("strong",[t._v("whole")]),t._v(" "),e("code",[t._v("<application>")]),t._v(" element.")]),t._v(" "),e("p",[t._v("For example, let's say you want the "),e("code",[t._v("debuggable")]),t._v(" attribute of "),e("code",[t._v("<application>")]),t._v(" to be set to "),e("code",[t._v("true")]),t._v(" (it's false in the default manifest template), you can do this:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("debuggable")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("The official "),e("a",{attrs:{href:"http://developer.android.com/guide/topics/manifest/manifest-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developers"),e("OutboundLink")],1),t._v(" website describes all the other elements that are supported, such as "),e("code",[t._v("<service>")]),t._v(", "),e("code",[t._v("<uses-permission>")]),t._v(" and "),e("code",[t._v("<activity>")]),t._v(" for instance, and these will be added using the same logic.")]),t._v(" "),e("h2",{attrs:{id:"using-a-custom-manifest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-manifest"}},[t._v("#")]),t._v(" Using a Custom Manifest")]),t._v(" "),e("p",[t._v("In rare circumstances, you may still need to create a custom "),e("code",[t._v("AndroidManifest.xml")]),t._v(". If this is the case, be aware of the following advice:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Name the custom manifest file "),e("code",[t._v("AndroidManifest.xml")]),t._v(", and put it in the directory "),e("code",[t._v("platform/android")]),t._v(" beneath your application's root project directory.")]),t._v(" "),e("p",[t._v('Create the platform directory if you need to, ensuring that the directory is a sibling of the "Resources" directory, (right below your project root).')]),t._v(" "),e("p",[e("img",{attrs:{src:s(676),alt:"proj"}})])]),t._v(" "),e("li",[e("p",[t._v("If you do have a custom manifest, generates a file named "),e("code",[t._v("AndroidManifest.xml.gen")]),t._v(" in the "),e("code",[t._v("build/android")]),t._v(" directory during each build. You can use this to see the "),e("code",[t._v("AndroidManifest.xml")]),t._v(" that would be generated by default.")])])])])}),[],!1,null,null,null);a.default=n.exports},676:function(t,a,s){t.exports=s.p+"assets/img/proj.ee78263b.png"}}]);