(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(9),r=(c(34),c(35),c(36),c(3)),s=c(4),j=c(6),i=c(5),l=c(0),o="https://mate-academy.github.io/react_people-table/api/people.json";function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(o)})).then((function(e){return e.json()}));var e}c(37);var d=c(2),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=c(13),x=c.n(u),O=function(e){var t=e.person,c="f"===t.sex;return Object(d.jsx)(a.b,{to:"../".concat(t.slug),className:function(){return x()({"has-text-danger":c})},children:t.name})},p=function(e){var t=e.person,c=e.selectedSlug,n=e.mother,a=e.father,r=t.slug===c,s=t.motherName||"-",j=t.fatherName||"-";return Object(d.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":r}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(O,{person:t})}),Object(d.jsx)("td",{children:t.sex}),Object(d.jsx)("td",{children:t.born}),Object(d.jsx)("td",{children:t.died}),Object(d.jsx)("td",{children:n?Object(d.jsx)(O,{person:n}):s}),Object(d.jsx)("td",{children:a?Object(d.jsx)(O,{person:a}):j})]})},m=function(e){var t=e.people,c=e.selectedSlug;return 0===t.length?Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(d.jsx)(p,{person:e,selectedSlug:c,mother:n,father:a},e.slug)}))})]})},f=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),o=Object(i.a)(a,2),u=o[0],x=o[1],O=Object(l.useState)(!1),p=Object(i.a)(O,2),f=p[0],v=p[1],g=Object(r.p)().slug,N=void 0===g?"":g,y=function(){var e=Object(j.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,b();case 4:t=e.sent,v(!1),n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){y()}),[]),u?Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"box table-container",children:f?Object(d.jsx)(h,{}):Object(d.jsx)(m,{people:c,selectedSlug:N})})]})},v=function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:c})},g=function(){return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(v,{to:"/",text:"Home"}),Object(d.jsx)(v,{to:"/people",text:"People"})]})})})},N=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(g,{}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})}),Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(r.b,{path:"/home",element:Object(d.jsx)(r.a,{to:"/",replace:!0})}),Object(d.jsxs)(r.b,{path:"/people",children:[Object(d.jsx)(r.b,{index:!0,element:Object(d.jsx)(f,{})}),Object(d.jsx)(r.b,{path:":slug",element:Object(d.jsx)(f,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(N,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e3fd538a.chunk.js.map