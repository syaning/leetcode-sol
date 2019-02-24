(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{312:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"minimum-depth-of-binary-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#minimum-depth-of-binary-tree","aria-hidden":"true"}},[t._v("#")]),t._v(" Minimum Depth of Binary Tree")]),t._v(" "),n("p",[t._v("Given a binary tree, find its minimum depth.")]),t._v(" "),n("p",[t._v("The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.")]),t._v(" "),n("h2",{attrs:{id:"javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @return {number}\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("minDepth")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Math"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("min")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("minDepth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("minDepth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("minDepth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("minDepth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# Definition for a binary tree node.")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# class TreeNode(object):")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("#         self.left = None")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("#         self.right = None")]),t._v("\n\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("object")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("minDepth")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type root: TreeNode\n        :rtype: int\n        """')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("min")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDepth"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDepth"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDepth"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDepth"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);