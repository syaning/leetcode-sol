(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{279:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"reverse-words-in-a-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reverse-words-in-a-string","aria-hidden":"true"}},[t._v("#")]),t._v(" Reverse Words in a String")]),t._v(" "),n("p",[t._v("Given an input string, reverse the string word by word.")]),t._v(" "),n("p",[t._v("For example,")]),t._v(" "),n("p",[t._v("Given s = "),n("code",[t._v('"the sky is blue"')]),t._v(",")]),t._v(" "),n("p",[t._v("return "),n("code",[t._v('"blue is sky the"')]),t._v(".")]),t._v(" "),n("p",[n("strong",[t._v("Clarification:")])]),t._v(" "),n("ul",[n("li",[t._v("What constitutes a word?\n"),n("ul",[n("li",[t._v("A sequence of non-space characters constitutes a word.")])])]),t._v(" "),n("li",[t._v("Could the input string contain leading or trailing spaces?\n"),n("ul",[n("li",[t._v("Yes. However, your reversed string should not contain leading or trailing spaces.")])])]),t._v(" "),n("li",[t._v("How about multiple spaces between two words?\n"),n("ul",[n("li",[t._v("Reduce them to a single space in the reversed string.")])])])]),t._v(" "),n("h2",{attrs:{id:"javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {string} str\n * @returns {string}\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("reverseWords")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("split")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/\\s+/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reverse")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("join")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("' '")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("object")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("reverseWords")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type s: str\n        :rtype: str\n        """')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("' '")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("reversed")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);