(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),a=n.n(s),i=n(6),l=n(8),o=(n(13),n(1)),r=n(4),u=n.n(r),b=(n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.alphabetically="alphabet",t.byLength="length",t.default=""}(c||(c={}));var d=function(){var t=Object(o.useState)(c.default),e=Object(i.a)(t,2),n=e[0],s=e[1],a=Object(o.useState)(!1),r=Object(i.a)(a,2),d=r[0],j=r[1],g=function(t,e){var n=e.sortField,s=e.reverseField,a=Object(l.a)(t);return n&&a.sort((function(t,e){switch(n){case c.alphabetically:return t.localeCompare(e);case c.byLength:return t[c.byLength]-e[c.byLength];default:return 0}})),s&&a.reverse(),a}(h,{sortField:n,reverseField:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==c.alphabetically}),onClick:function(){return s(c.alphabetically)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==c.byLength}),onClick:function(){return s(c.byLength)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!1===d}),onClick:function(){return j(!d)},children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.default),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};a.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.417a1337.chunk.js.map