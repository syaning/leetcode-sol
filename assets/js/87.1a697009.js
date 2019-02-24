(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{309:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"path-sum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-sum","aria-hidden":"true"}},[t._v("#")]),t._v(" Path Sum")]),t._v(" "),a("p",[t._v("Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("p",[t._v("Given the below binary tree and "),a("code",[t._v("sum = 22")]),t._v(",")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("              5\n             / \\\n            4   8\n           /   / \\\n          11  13  4\n         /  \\      \\\n        7    2      1\n")])])]),a("p",[t._v("return true, as there exist a root-to-leaf path "),a("code",[t._v("5->4->11->2")]),t._v(" which sum is 22.")]),t._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @param {number} sum\n * @return {boolean}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("hasPathSum")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" sum\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Definition for a binary tree node.")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# class TreeNode(object):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.left = None")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.right = None")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasPathSum")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type root: TreeNode\n        :type sum: int\n        :rtype: bool\n        """')]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasPathSum"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("or")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasPathSum"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasPathSum"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasPathSum"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("sum")]),t._v("\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);