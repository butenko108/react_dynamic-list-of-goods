(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(6),c=n.n(o),r=n(5),a=n(1),s=(n(12),n(0)),i=function(t){var e=t.goods;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},u=n(7);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),l=Object(r.a)(c,2),b=l[0],f=l[1];return Object(a.useEffect)((function(){switch(b){case"all":d().then(o);break;case"first 5":d().then((function(t){return Object(u.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).splice(0,5)})).then(o);break;case"red":d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}}),[b]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return f("all")},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return f("first 5")},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return f("red")},children:"Load red goods"}),n.length>0&&Object(s.jsx)(i,{goods:n})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e765d47.chunk.js.map