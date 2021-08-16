(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1580:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-slider"}},[t._v("#")]),t._v(" Titanium.UI.Slider")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Android")]),t._v(" "),n("th",[t._v("iOS")]),t._v(" "),n("th",[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:s(490),alt:"Android"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(491),alt:"iOS"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(492),alt:"Windows"}})])])])]),t._v(" "),n("p",[t._v("A slider lets the user select from a range of values by dragging the slider thumb.")]),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createSlider"}},[t._v("Titanium.UI.createSlider")]),t._v(" method or "),n("strong",[n("code",[t._v("<Slider>")])]),t._v(" Alloy element to create a slider.")],1),t._v(" "),n("h3",{attrs:{id:"android-platform-implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes"}},[t._v("#")]),t._v(" Android Platform Implementation Notes")]),t._v(" "),n("p",[t._v("On Android, the user can also maniuplate the slider using the arrow keys. For this\nreason, placing other focusable UI elements to the left or right of\nthe slider is not recommended.")]),t._v(" "),n("p",[t._v("On Android, both "),n("code",[t._v("min")]),t._v(" and "),n("code",[t._v("max")]),t._v(" must be specified for the slider to work properly.")]),t._v(" "),n("p",[t._v("Earlier versions of the Titanium SDK implicitly enforced that both the "),n("type-link",{attrs:{type:"Titanium.UI.Slider.leftTrackImage"}},[t._v("leftTrackImage")]),t._v(" and\n"),n("type-link",{attrs:{type:"Titanium.UI.Slider.rightTrackImage"}},[t._v("rightTrackImage")]),t._v(" properties be specified before the properties would be honored. Beginning with\nTitanium SDK 4.0.0 this limitation has been removed. However it is recommended that either both or neither be specified.")],1),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-slider"}},[t._v("#")]),t._v(" Simple Slider")]),t._v(" "),n("p",[t._v("The following sample demonstrates creating a slider and adding a listener to\nhandle the change events.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slider "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSlider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    min"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" slider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    textAlign"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT_ALIGNMENT_CENTER")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nslider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%3.1f'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example as an Alloy view.")]),t._v(" "),n("p",[t._v("Implement the "),n("code",[t._v("updateLabel")]),t._v(" callback in the controller to update the label value\nand set the initial "),n("code",[t._v("text")]),t._v(" value for the label in the TSS file or controller.")]),t._v(" "),n("p",[t._v("index.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Slider")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("slider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Ti.UI.FILL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onChange")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("updateLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Ti.UI.FILL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("index.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%3.1f'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports},490:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAZCAMAAAAfbtICAAAAclBMVEX////9/v/h8/zN6vnv7+9it+qX0/KU0PLz+/6/5PiV0fL4/f7t+P3I6Pig1/Ob1fKRz/KKzPBjt+pftena7/vT7Pqo2/St2/ODye9csun6/v+64ve24PaBxu1sve2QzOvo9f214PeNzfHf6e95w+13wu3tIQY/AAAApElEQVRYw+3UBw7CMBBEUceQXZe4kl6p978iieAMFlj7bvA10jBCCCF/YxRCFyxbur5Z28ory5QwDg9tneeIY2MRdgo7znJUzQAYlrtCZzRLSZySmH3fP+OwBlBTVSTx6SuaMoVYXnbDEJdt6x7nJL6FmidhXAj9Gl9egRQsQ0ICAHoEtE2eN8pbVEcjTBXLUsE7hR6dzLRvJ2opDdeMEEII+RFvGoQNZF1hMO8AAAAASUVORK5CYII="},491:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAAAZCAMAAAC/8brsAAAAV1BMVEX////+/v3S0tKBrv/U1NR+rP/6+vr29vb4+Pjy8vL19fX8/Pzw8O/t7ezl5eXp6eni4uJ8q//f39/W1tbY2NjPz8/Nzc2qy/95pPnT3/Pa2tqRs++Mru0BpJ0tAAABKUlEQVRYw+2Vu27DMAxFZdXhS89atpOm/f/vrKWkNZShkz0Q6Nmk6R6QFzT//MXwxCilhVcs0XIDISI5lQ4tvwgSACKCPoUtsEOm4fEAIadMoQoIw+/bIYIqhbZBTGYHdCkMG+ily0tCirpQR8Aeuj+HomgIWwko8ND/IYOeNtcZeDY9JGDO4fp2Apfb54fp8eNqK+OxzGKul2N5b9y+Xg2CXRd7PDOb42nnOISXHrAnJSWoBkAYM/Y1SAEJlDS5GYR76tL6rMrAEfI0e7MjU2YERQZAksaylwynexACp8agrhHH0UZoHxDmEhlJz1HeDADFx7LaKYWUiy3RCym7yVQVpmKXZbFzTl7RDj0MXFXgkGKeckyeUZXAzxSqQ0OQQE8HusP85Nz437W6D/0OpKGhAAAAAElFTkSuQmCC"},492:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAZCAMAAAC4s2T5AAAAb1BMVEUTExM6OjoeHh44Zv82Yv8REAofLF4hLlz///8WFhcQEA8NDAwnJyXDw8M2Njb6+/+kuP9Cbf/7+/vLy8tGRkY9PT2dnZtQUFApQY0oPollZWVkZGQeKltSUlItLS2epLmfpLgwPGoyPmkbIjsYITnRhNs3AAAAkklEQVRYw+3W3Q6CMAyG4TpQ24KoiOIP4B/3f40shIQTTj/CSJ8reJN13cgYY8ySaOIpBUqysq4LR2i6hUhvzHwoEgL77xGq3yf3+aU4BBkP+R4hxOfTkfnyzDYA13TMf0QxwJD/svyp/LUMD7U7hOr77q+ug5AZFmcOW5xKaDrkh/rsSuOHtHEUKg35y2OMgekAHRoWUuL9sdQAAAAASUVORK5CYII="}}]);