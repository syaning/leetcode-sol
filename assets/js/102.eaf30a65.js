(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{264:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"employees-earning-more-than-their-managers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#employees-earning-more-than-their-managers","aria-hidden":"true"}},[a._v("#")]),a._v(" Employees Earning More Than Their Managers")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("Employee")]),a._v(" table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+----+-------+--------+-----------+\n| Id | Name  | Salary | ManagerId |\n+----+-------+--------+-----------+\n| 1  | Joe   | 70000  | 3         |\n| 2  | Henry | 80000  | 4         |\n| 3  | Sam   | 60000  | NULL      |\n| 4  | Max   | 90000  | NULL      |\n+----+-------+--------+-----------+\n")])])]),t("p",[a._v("Given the "),t("code",[a._v("Employee")]),a._v(" table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("+----------+\n| Employee |\n+----------+\n| Joe      |\n+----------+\n")])])]),t("h2",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql","aria-hidden":"true"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("select")]),a._v(" Name "),t("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" Employee e \n\t"),t("span",{attrs:{class:"token keyword"}},[a._v("where")]),a._v(" e"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ManagerId "),t("span",{attrs:{class:"token operator"}},[a._v("is")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("not")]),a._v(" "),t("span",{attrs:{class:"token boolean"}},[a._v("null")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("and")]),a._v(" e"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Salary"),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token keyword"}},[a._v("Select")]),a._v(" Salary \n\t\t\t"),t("span",{attrs:{class:"token keyword"}},[a._v("from")]),a._v(" Employee "),t("span",{attrs:{class:"token keyword"}},[a._v("where")]),a._v(" e"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ManagerId"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("Id"),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);