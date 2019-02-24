(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"reverse-string-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-string-ii","aria-hidden":"true"}},[t._v("#")]),t._v(" Reverse String II")]),t._v(" "),a("p",[t._v("Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Input: s = "abcdefg", k = 2\nOutput: "bacdfeg"\n')])])]),a("p",[a("strong",[t._v("Restrictions:")])]),t._v(" "),a("ol",[a("li",[t._v("The string consists of lower English letters only.")]),t._v(" "),a("li",[t._v("Length of the given string and k will in the range [1, 10000]")])]),t._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {string} s\n * @param {number} k\n * @return {string}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("reverseStr")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reverse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    i "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" k\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("reverseStr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type s: str\n        :type k: int\n        :rtype: str\n        """')]),t._v("\n        result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n        i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            i "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" k\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n")])])])])}],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);