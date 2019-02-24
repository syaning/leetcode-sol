(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{198:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"surface-area-of-3d-shapes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#surface-area-of-3d-shapes","aria-hidden":"true"}},[t._v("#")]),t._v(" Surface Area of 3D Shapes")]),t._v(" "),a("p",[t._v("On a "),a("code",[t._v("N * N grid")]),t._v(", we place some "),a("code",[t._v("1 * 1 * 1")]),t._v(" cubes.")]),t._v(" "),a("p",[t._v("Each value "),a("code",[t._v("v = grid[i][j]")]),t._v(" represents a tower of "),a("code",[t._v("v")]),t._v(" cubes placed on top of grid cell "),a("code",[t._v("(i, j)")]),t._v(".")]),t._v(" "),a("p",[t._v("Return the total surface area of the resulting shapes.")]),t._v(" "),a("p",[a("strong",[t._v("Example 1:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [[2]]\nOutput: 10\n")])])]),a("p",[a("strong",[t._v("Example 2:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [[1,2],[3,4]]\nOutput: 34\n")])])]),a("p",[a("strong",[t._v("Example 3:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [[1,0],[0,2]]\nOutput: 16\n")])])]),a("p",[a("strong",[t._v("Example 4:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [[1,1,1],[1,0,1],[1,1,1]]\nOutput: 32\n")])])]),a("p",[a("strong",[t._v("Example 5:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [[2,2,2],[2,1,2],[2,2,2]]\nOutput: 46\n")])])]),a("p",[a("strong",[t._v("Note:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= N <= 50")])]),t._v(" "),a("li",[a("code",[t._v("0 <= grid[i][j] <= 50")])])]),t._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {number[][]} grid\n * @return {number}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("surfaceArea")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grid"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" surface "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cols "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" cols"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" front "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" rows "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" c "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" back "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" c "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" c "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" cols "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" c "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      surface "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" surface "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" front "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" back "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" surface\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("surfaceArea")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type grid: List[List[int]]\n        :rtype: int\n        """')]),t._v("\n        rows "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grid"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cols "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("len")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        surface "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("range")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("range")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cols"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n                front "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" rows "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                back "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" cols "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" grid"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                surface "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" surface "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" front "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" back "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" surface\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);