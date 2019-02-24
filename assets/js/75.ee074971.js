(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{310:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"binary-tree-inorder-traversal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-tree-inorder-traversal","aria-hidden":"true"}},[t._v("#")]),t._v(" Binary Tree Inorder Traversal")]),t._v(" "),a("p",[t._v("Given a binary tree, return the "),a("em",[t._v("inorder")]),t._v(" traversal of its nodes' values.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("p",[t._v("Given binary tree "),a("code",[t._v("[1,null,2,3]")]),t._v(",")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   1\n    \\\n     2\n    /\n   3\n")])])]),a("p",[t._v("return "),a("code",[t._v("[1,3,2]")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" Recursive solution is trivial, could you do it iteratively?")]),t._v(" "),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @return {number[]}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("inorderTraversal")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("inorderTraversal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("inorderTraversal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Definition for a binary tree node.")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# class TreeNode(object):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.left = None")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.right = None")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inorderTraversal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type root: TreeNode\n        :rtype: List[int]\n        """')]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inorderTraversal"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inorderTraversal"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n")])])]),a("h2",{attrs:{id:"javascript-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-2","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @return {number[]}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("inorderTraversal")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stack "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" root\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"python-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Definition for a binary tree node.")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# class TreeNode(object):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#     def __init__(self, x):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.val = x")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.left = None")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#         self.right = None")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token builtin"}},[t._v("object")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inorderTraversal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type root: TreeNode\n        :rtype: List[int]\n        """')]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" root"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        stack "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" root\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" current "),a("span",{attrs:{class:"token operator"}},[t._v("or")]),t._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left\n            current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            current "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);