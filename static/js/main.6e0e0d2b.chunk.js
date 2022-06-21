(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,s=c(5),o=c.n(s),l=c(2),r=c(1),a=(c(10),c(11),c(12),c(4)),i=c.n(a),d=c(0);!function(e){e.all="all",e.active="active",e.completed="completed"}(n||(n={}));var u=function(e){var t=e.todos,c=e.selectedUserId,s=e.setSelectedUserId,o=Object(r.useState)(""),a=Object(l.a)(o,2),u=a[0],j=a[1],b=Object(r.useState)(n.all),h=Object(l.a)(b,2),O=h[0],m=h[1],p=t.filter((function(e){var t=u.toLowerCase();return e.title.includes(t)})).filter((function(e){switch(O){case n.active:return!1===e.completed;case n.completed:return!0===e.completed;default:return e}}));return Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsx)("h2",{children:"Todos:"}),Object(d.jsx)("input",{"data-cy":"filterByTitle",type:"text",placeholder:"enter the todo`s title",value:u,onChange:function(e){j(e.target.value)}}),Object(d.jsxs)("select",{onChange:function(e){m(e.target.value)},children:[Object(d.jsx)("option",{value:n.all,children:"Show all"}),Object(d.jsx)("option",{value:n.active,children:"Show active"}),Object(d.jsx)("option",{value:n.completed,children:"Show completed"})]}),Object(d.jsx)("div",{className:"TodoList__list-container",children:Object(d.jsx)("ul",{"data-cy":"listOfTodos",className:"TodoList__list",children:p.map((function(e){return Object(d.jsxs)("li",{className:i()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(d.jsx)("p",{children:e.title})]}),Object(d.jsx)("button",{"data-cy":"userButton",className:i()("TodoList__user-button button",{"TodoList__user-button--selected":e.userId===c}),type:"button",onClick:function(){s(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},j=(c(14),"https://mate.academy/students-api");var b=function(e){var t=e.selectedUserId,c=e.setSelectedUserId,n=Object(r.useState)(null),s=Object(l.a)(n,2),o=s[0],a=s[1];return Object(r.useEffect)((function(){var e;(e=t,fetch("".concat(j,"/users/").concat(e)).then((function(e){return e.ok?e.json():Promise.reject()}))).then((function(e){return a(e)})).catch((function(e){console.log(e),a(null),c(0)}))}),[t]),o?Object(d.jsxs)("div",{className:"CurrentUser",children:[Object(d.jsx)("h2",{className:"CurrentUser__title",children:Object(d.jsx)("span",{children:"Selected user: ".concat(o.id)})}),Object(d.jsx)("h3",{"data-cy":"userName",className:"CurrentUser__name",children:o.name}),Object(d.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(d.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(d.jsx)("button",{className:"button",type:"button",onClick:function(){c(0)},children:"Clear"})]}):Object(d.jsx)("div",{children:"user not selected"})},h=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([]),o=Object(l.a)(s,2),a=o[0],i=o[1];return Object(r.useEffect)((function(){fetch("".concat(j,"/todos")).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){return i(e)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"App__sidebar",children:a.length>0?Object(d.jsx)(u,{todos:a,selectedUserId:c,setSelectedUserId:n}):"Loading..."}),Object(d.jsx)("div",{className:"App__content",children:Object(d.jsx)("div",{className:"App__content-container",children:Object(d.jsx)(b,{selectedUserId:c,setSelectedUserId:n})})})]})};o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.6e0e0d2b.chunk.js.map