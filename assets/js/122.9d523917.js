(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{194:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ransom-note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ransom-note","aria-hidden":"true"}},[t._v("#")]),t._v(" Ransom Note")]),t._v(" "),s("p",[t._v("Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.")]),t._v(" "),s("p",[t._v("Each letter in the magazine string can only be used once in your ransom note.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("p",[t._v("You may assume that both strings contain only lowercase letters.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('canConstruct("a", "b") -> false\ncanConstruct("aa", "ab") -> false\ncanConstruct("aa", "aab") -> true\n')])])]),s("h2",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {string} ransomNote\n * @param {string} magazine\n * @return {boolean}\n */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("canConstruct")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("split")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forEach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        map"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),s("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        map"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("canConstruct")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type ransomNote: str\n        :type magazine: str\n        :rtype: bool\n        """')]),t._v("\n        lookup "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            lookup"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lookup"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" lookup"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n            lookup"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("canConstruct2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type ransomNote: str\n        :type magazine: str\n        :rtype: bool\n        """')]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ransomNote"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" magazine"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";a.default=o.exports}}]);