(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{263:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"maximum-subarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maximum-subarray","aria-hidden":"true"}},[t._v("#")]),t._v(" Maximum Subarray")]),t._v(" "),s("p",[t._v("Find the contiguous subarray within an array (containing at least one number) which has the largest sum.")]),t._v(" "),s("p",[t._v("For example, given the array "),s("code",[t._v("[−2,1,−3,4,−1,2,1,−5,4]")]),t._v(",")]),t._v(" "),s("p",[t._v("the contiguous subarray "),s("code",[t._v("[4,−1,2,1]")]),t._v(" has the largest sum = "),s("code",[t._v("6")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("More practice:")])]),t._v(" "),s("p",[t._v("If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.")]),t._v(" "),s("h2",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("maxSubArray")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maxSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newSum "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    maxSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxSum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newSum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" maxSum\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token builtin"}},[t._v("object")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("maxSubArray")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type nums: List[int]\n        :rtype: int\n        """')]),t._v("\n        newSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" maxSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" nums"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            newSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newSum "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            maxSum "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("max")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxSum"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newSum"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" maxSum\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";a.default=o.exports}}]);