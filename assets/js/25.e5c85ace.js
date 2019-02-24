(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{232:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"swap-nodes-in-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swap-nodes-in-pairs","aria-hidden":"true"}},[t._v("#")]),t._v(" Swap Nodes in Pairs")]),t._v(" "),a("p",[t._v("Given a linked list, swap every two adjacent nodes and return its head.")]),t._v(" "),a("p",[t._v("For example,")]),t._v(" "),a("p",[t._v("Given "),a("code",[t._v("1->2->3->4")]),t._v(", you should return the list as "),a("code",[t._v("2->1->4->3")]),t._v(".")]),t._v(" "),a("p",[t._v("Your algorithm should use only constant space. You may "),a("strong",[t._v("not")]),t._v(" modify the values in the list, only nodes itself can be changed.")]),t._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} head\n * @return {ListNode}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("swapPairs")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dummy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dummy"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n    current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" b\n    current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Definition for singly-linked list.")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# class ListNode(object):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.next = None")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type head: ListNode\n        :rtype: ListNode\n        """')]),t._v("\n        dummy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("None")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        dummy"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            a"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n            current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" b\n            current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);