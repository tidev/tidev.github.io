(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1906:function(e,t,a){"use strict";a.r(t);var s=a(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-coding-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-coding-standards"}},[e._v("#")]),e._v(" JavaScript Coding Standards")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Contents")])]),e._v(" "),a("h2",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),a("p",[e._v("Any violation to these standards is allowed if it enhances readability.")]),e._v(" "),a("p",[e._v("This guide serves as the coding standard for all Appcelerator JavaScript code including the Mobile Web platform, Titanium Mobile project templates, KitchenSink, and all other sample code.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("All variables, functions, methods, class names, and comments SHOULD be written in English.")])]),e._v(" "),a("li",[a("p",[e._v('Line length SHOULD be limited to a "screen width" which can vary between 100 and 200 characters.')])]),e._v(" "),a("li",[a("p",[e._v("BE CONSISTENT.")])])]),e._v(" "),a("h2",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Filenames SHOULD be all lower case if the file does not contain any instantiable objects (classes).")])]),e._v(" "),a("li",[a("p",[e._v("Filenames SHOULD be CamelCase if the file contains an instantiable object (class).")])]),e._v(" "),a("li",[a("p",[e._v("Directories SHOULD be all lower case and unless the directory serves as a part of a module path (i.e. /path/to/Ti/Filesystem).")])])]),e._v(" "),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Public variables SHOULD be mixedCase (i.e. containerNode, firstItem, etc).")])]),e._v(" "),a("li",[a("p",[e._v("Private variables SHOULD be _underscoreMixedCase (i.e. _position, _layerIdx).")])]),e._v(" "),a("li",[a("p",[e._v("Constants SHOULD be UPPER_CASE.")])]),e._v(" "),a("li",[a("p",[e._v('All variables SHOULD be defined at the top of the function with a single "var" keyword.')])]),e._v(" "),a("li",[a("p",[e._v("Global variables SHOULD be kept to a minimum to avoid naming collisions and scope lookups.")])]),e._v(" "),a("li",[a("p",[e._v("Variables SHOULD be descriptive, but short names are acceptable in small functions.")])]),e._v(" "),a("li",[a("p",[e._v("Variable names MUST NOT be reserved words or web browser built-in objects: window, document, etc..")])]),e._v(" "),a("li",[a("p",[e._v("Complementary names MUST be used for complementary entities (i.e. get/set, add/remove, create/destroy, start/stop, etc).")])])]),e._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Public functions and methods SHOULD be mixedCase (i.e. myFunction, doSomething, etc).")])]),e._v(" "),a("li",[a("p",[e._v("Private functions and methods SHOULD be _underscoreMixedCase (i.e. _init, _destroyUI, etc).")])]),e._v(" "),a("li",[a("p",[e._v("Anonymous functions SHOULD be named for easier debugging (names would be removed during minification).")])]),e._v(" "),a("li",[a("p",[e._v("Nested functions ARE permitted.")])]),e._v(" "),a("li",[a("p",[e._v("Closures ARE permitted, but caution is advised to avoid memory leaks.")])]),e._v(" "),a("li",[a("p",[e._v("Method names SHOULD be verbs or verb phrases (i.e. getValue(), isEnabled()).")])])]),e._v(" "),a("h2",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('Methods SHOULD be defined on the object\'s prototype, not via "this" in the constructor.')])]),e._v(" "),a("li",[a("p",[e._v("Array and object properties SHOULD be initialized in the constructor, not in the prototype.")])]),e._v(" "),a("li",[a("p",[e._v("Array and object properties MUST NOT be added to the prototype.")])]),e._v(" "),a("li",[a("p",[e._v("Properties that are boolean-ish and default to falsey (false, null, undefined, 0) do not NEED to be defined before use.")])])]),e._v(" "),a("h2",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Modules MUST follow the CommonJS modules or AMD (asynchronous module definition) specification.")])]),e._v(" "),a("li",[a("p",[e._v("Module IDs MUST NOT start with a forward slash.")])]),e._v(" "),a("li",[a("p",[e._v("Module IDs MAY contain periods.")])]),e._v(" "),a("li",[a("p",[e._v('Module IDs MUST NOT be named "require", "exports", or "module".')])]),e._v(" "),a("li",[a("p",[e._v("Module names SHOULD NOT begin with a number.")])]),e._v(" "),a("li",[a("p",[e._v("AMD modules SHOULD NOT provide a name to define() and let the loader automatically detect it.")])]),e._v(" "),a("li",[a("p",[e._v("AMD modules SHOULD NOT contain more than one module definition, though it is possible.")])]),e._v(" "),a("li",[a("p",[e._v("AMD modules MUST NOT contain more than one anonymous module definition.")])])]),e._v(" "),a("h2",{attrs:{id:"whitespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitespace"}},[e._v("#")]),e._v(" Whitespace")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Tabs (set to 4 spaces) MUST be used for indentation rather than spaces.")])]),e._v(" "),a("li",[a("p",[e._v("Blank lines SHOULD NOT contain any tabs or spaces.")])]),e._v(" "),a("li",[a("p",[e._v("Blank lines SHOULD be used to separate blocks of logic.")])]),e._v(" "),a("li",[a("p",[e._v("Commas SHOULD be followed by a space.")])]),e._v(" "),a("li",[a("p",[e._v("Ternary operators (inline-ifs) SHOULD have spaces around both the ? and : operators.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('drink = (location == "scotland") ? "whisky" : "whiskey";\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Semi-colons in for loops SHOULD be followed by a space.")])]),e._v(" "),a("li",[a("p",[e._v("There SHOULD be a space around the outside of the parentheses in if, switch, catch, while, and for constructs.")])]),e._v(" "),a("li",[a("p",[e._v("Operands and operators SHOULD be separated by spaces.")])]),e._v(" "),a("li",[a("p",[e._v("Statements MAY be aligned wherever it improves readability.")])])]),e._v(" "),a("h2",{attrs:{id:"braces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#braces"}},[e._v("#")]),e._v(" Braces")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("All block structures including if, else, switch, try, catch, function, while, for, and so on MUST use braces around body.")])]),e._v(" "),a("li",[a("p",[e._v("Opening braces SHOULD be at the end of the first line of the block statement.")])]),e._v(" "),a("li",[a("p",[e._v("Closing braces SHOULD be on a separate line and indented to match indentation of the opening brace's line.")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (error) {\n   crashAndBurn();\n}\n")])])]),a("h2",{attrs:{id:"semicolons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semicolons"}},[e._v("#")]),e._v(" Semicolons")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("All lines of code MUST end with one and only one semicolon.")]),e._v(" "),a("ol",[a("li",[e._v("A compile-time JavaScript minifier may remove semicolons to reduce file size.")])])])]),e._v(" "),a("h2",{attrs:{id:"loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loops"}},[e._v("#")]),e._v(" Loops")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Generally, index variables SHOULD be defined with all other variables at the top of the function.")])]),e._v(" "),a("li",[a("p",[e._v("Empty for and while loops SHOULD have empty braces or a semicolon at the end of the line.")])]),e._v(" "),a("li",[a("p",[e._v("When looping over arrays, for loops SHOULD pre-determine the length (i.e. for (var i = 0, len = arr.length; i < len; i++) {}).")])]),e._v(" "),a("li",[a("p",[e._v("for loops SHOULD be used instead of for-in loops when looping over arrays.")]),e._v(" "),a("ol",[a("li",[e._v("for-in is acceptable for looping over objects, though it is preferred to use the ECMAScript 5 Object.keys() method.")])])]),e._v(" "),a("li",[a("p",[e._v("You SHOULD use a for loop instead of Array.forEach().")]),e._v(" "),a("ol",[a("li",[e._v("The overhead of calling a function for each items is significant.")])])]),e._v(" "),a("li",[a("p",[e._v("Iterator variables SHOULD be named i, j, k, etc.")])])]),e._v(" "),a("h2",{attrs:{id:"conditionals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditionals"}},[e._v("#")]),e._v(" Conditionals")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Short circuiting conditionals are acceptable (i.e. hasX && doSomething()).")])]),e._v(" "),a("li",[a("p",[e._v("The last statements in a switch SHOULD NOT end with a break statement.")])]),e._v(" "),a("li",[a("p",[e._v("switch cases MAY be broken with either a break or return.")])]),e._v(" "),a("li",[a("p",[e._v("Ternary operators should be used for simple code conditions (i.e. var y = x ? 1 : 2; isEnabled() ? doSomething() : doSomethingElse()😉.")])]),e._v(" "),a("li",[a("p",[e._v("Use !~ with an indexOf() to check if it contains a value.")])]),e._v(" "),a("li",[a("p",[e._v("Use !(a<b || b<a) to check if two dates or arrays are equal.")])])]),e._v(" "),a("h2",{attrs:{id:"data-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[e._v("#")]),e._v(" Data Types")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Non-boolean variables SHOULD be cast to boolean using !! or ! operators.")])]),e._v(" "),a("li",[a("p",[e._v('Non-integer variables SHOULD be cast to integer using |0 (i.e. "123.4"|0 outputs 123).')])]),e._v(" "),a("li",[a("p",[e._v("Non-string variables SHOULD be cast to strings using ''+ (i.e. ''+123 outputs \"123\").")])]),e._v(" "),a("li",[a("p",[e._v("Multiline strings SHOULD be broken up into separate concatenated strings instead of using backslashes at the end of lines.")])]),e._v(" "),a("li",[a("p",[e._v("Strings SHOULD generally use single quotes, though double quotes are acceptable unless the string contains zero or one characters or contains HTML/XML/JSON codes.")])]),e._v(" "),a("li",[a("p",[e._v("Literals SHOULD be used instead of constructors (i.e. use [] instead of Array(), {} instead of Object(), '' instead of String()).")])]),e._v(" "),a("li",[a("p",[e._v("Object literal keys SHOULD only use quotes if the key is a reserved word or contains a space.")])]),e._v(" "),a("li",[a("p",[e._v("Custom object MAY have toString() methods as long as they return a string without error.")])]),e._v(" "),a("li",[a("p",[e._v("Arrays and objects SHOULD NOT have hanging commas.")])]),e._v(" "),a("li",[a("p",[e._v("Floating point constants SHOULD be written with a digit, followed by a decimal point, and at least one decimal (i.e. 1.0).")])])]),e._v(" "),a("h2",{attrs:{id:"allowed-constructs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowed-constructs"}},[e._v("#")]),e._v(" Allowed Constructs")]),e._v(" "),a("ol",[a("li",[e._v("Use built-in standard functions (i.e. string.charAt(3) instead of string[pe:3]).")])]),e._v(" "),a("h2",{attrs:{id:"disallowed-constructs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disallowed-constructs"}},[e._v("#")]),e._v(" Disallowed Constructs")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("with statements ARE NOT permitted.")])]),e._v(" "),a("li",[a("p",[e._v("You SHOULD NOT modify prototypes of internal objects.")]),e._v(" "),a("ol",[a("li",[e._v("Possible exception when trying to shim a standardized function that is missing in the given implementation.")])])]),e._v(" "),a("li",[a("p",[e._v("You SHOULD NOT use parenthesis when using delete, typeof, void or calling return, throw, case, in, or new.")])]),e._v(" "),a("li",[a("p",[e._v("You SHOULD NOT use commas at the beginning of a line; they should be at the end of the line.")])])]),e._v(" "),a("h2",{attrs:{id:"comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[e._v("#")]),e._v(" Comments")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Single line comments MUST use C++ style single-line comments, introduced by two slashes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// my comment\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Multi-line comments MUST use C-style comments, beginning with /* and ending with */:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* my multi-\nline comment */\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),a("ol",[a("li",[e._v("Code SHOULD be documented using JSDoc annotations ("),a("a",{attrs:{href:"https://github.com/jsdoc3/jsdoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/jsdoc3/jsdoc"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"exception-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-handling"}},[e._v("#")]),e._v(" Exception Handling")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("try/catch SHOULD be used instead of return codes for complex routines.")])]),e._v(" "),a("li",[a("p",[e._v("Thrown exceptions SHOULD use built-in exception types: a string, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError.")]),e._v(" "),a("ol",[a("li",[e._v("Custom exceptions are acceptable as long as they define their own toString() function.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);