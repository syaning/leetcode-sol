(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"container-with-most-water"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-with-most-water","aria-hidden":"true"}},[t._v("#")]),t._v(" Container With Most Water")]),t._v(" "),a("p",[t._v("Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.")]),t._v(" "),a("p",[t._v("Note: You may not slant the container.")]),t._v(" "),a("h2",{attrs:{id:"go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go","aria-hidden":"true"}},[t._v("#")]),t._v(" Go")]),t._v(" "),a("div",{staticClass:"language-Go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("maxArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresult "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\tleft"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tarea "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tresult "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" area"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ti "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" left\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ti"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\tleft "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ti "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" right\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ti"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\tright "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" y "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" y\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" y "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" y\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} height\n * @return {number}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("maxArea")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" area "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" area"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        i"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("maxArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type height: List[int]\n        :rtype: int\n        """')]),t._v("\n        result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            area "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" area"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    i "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n                left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    i "),a("span",{attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n                right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);