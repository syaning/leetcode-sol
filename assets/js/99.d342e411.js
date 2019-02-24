(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{273:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"min-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#min-stack","aria-hidden":"true"}},[t._v("#")]),t._v(" Min Stack")]),t._v(" "),n("p",[t._v("Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.")]),t._v(" "),n("ul",[n("li",[t._v("push(x) -- Push element x onto stack.")]),t._v(" "),n("li",[t._v("pop() -- Removes the element on top of the stack.")]),t._v(" "),n("li",[t._v("top() -- Get the top element.")]),t._v(" "),n("li",[t._v("getMin() -- Retrieve the minimum element in the stack.")])]),t._v(" "),n("p",[n("strong",[t._v("Example:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --\x3e Returns -3.\nminStack.pop();\nminStack.top();      --\x3e Returns 0.\nminStack.getMin();   --\x3e Returns -2.\n")])])]),n("h2",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),n("div",{staticClass:"language-Python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MinStack")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("object")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("__init__")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        initialize your data structure here.\n        """')]),t._v("\n        self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type x: int\n        :rtype: void\n        """')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("min")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("pop")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :rtype: void\n        """')]),t._v("\n        a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("top")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :rtype: int\n        """')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getMin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :rtype: int\n        """')]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# Your MinStack object will be instantiated and called as such:")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# obj = MinStack()")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# obj.push(x)")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# obj.pop()")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# param_3 = obj.top()")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# param_4 = obj.getMin()")]),t._v("\n\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);