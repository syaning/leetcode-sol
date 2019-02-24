(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{215:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"palindrome-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#palindrome-number","aria-hidden":"true"}},[t._v("#")]),t._v(" Palindrome Number")]),t._v(" "),a("p",[t._v("Determine whether an integer is a palindrome. Do this without extra space.")]),t._v(" "),a("p",[a("strong",[t._v("Some hints:")])]),t._v(" "),a("p",[t._v("Could negative integers be palindromes? (ie, -1)")]),t._v(" "),a("p",[t._v("If you are thinking of converting the integer to string, note the restriction of using extra space.")]),t._v(" "),a("p",[t._v('You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?')]),t._v(" "),a("p",[t._v("There is a more generic way of solving this problem.")]),t._v(" "),a("h2",{attrs:{id:"go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go","aria-hidden":"true"}},[t._v("#")]),t._v(" Go")]),t._v(" "),a("div",{staticClass:"language-Go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("isPalindrome")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tcopyed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reversed "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copyed "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\treversed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reversed"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" copyed"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n\t\tcopyed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" copyed "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" reversed\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {number} x\n * @return {boolean}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("isPalindrome")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" copy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reverse "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("copy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reverse "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" copy "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n    copy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" copy "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" reverse\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("isPalindrome")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type x: int\n        :rtype: bool\n        """')]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        copy"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reverse "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" copy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            reverse "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" copy "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n            copy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" copy "),a("span",{attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" reverse\n\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);