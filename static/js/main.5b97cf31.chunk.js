(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),s=a(7),o=a(4),m=a(1),u=(a(13),function(e){var t=e.name,a=e.email,n=e.address;return c.a.createElement("section",{className:"userInfo"},c.a.createElement("h3",null,"about autor:"),c.a.createElement("p",null,c.a.createElement("strong",null,t)),c.a.createElement("h4",null,"email:"),c.a.createElement("p",null,a),c.a.createElement("h4",null,"adress:"),c.a.createElement("p",null,n.street,","," "," ",n.suite,","," ",n.city))}),i=function(e){var t=e.name,a=e.email,n=e.body;return c.a.createElement("div",{className:"comment"},c.a.createElement("h4",null,"name: "),c.a.createElement("p",null,t),c.a.createElement("h4",null," email: "),c.a.createElement("p",null,a),c.a.createElement("section",{className:"commet__text"},c.a.createElement("h4",null," comment: "),c.a.createElement("p",null,n)))},f=function(e){var t=e.comments;return c.a.createElement("section",{className:"comments"},c.a.createElement("h3",null,"Comments:"),t.map((function(e){return c.a.createElement(i,Object.assign({},e,{key:e.id}))})))},E=function(e){var t=e.title,a=e.body,n=e.userInfo,l=e.comments;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"article__content"},c.a.createElement("h2",{className:"article__title"},t),c.a.createElement("p",{className:"article__text"},a),c.a.createElement(u,n)),c.a.createElement("div",{className:"article__comments"},c.a.createElement(f,{comments:l})))},d=function(e){var t=e.posts;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("article",{className:"article",key:e.id},c.a.createElement("div",{className:"article__main-info"},c.a.createElement(E,{title:e.title,body:e.body,userInfo:e.user,comments:e.comments})))})))},p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(m.a)(r,2),i=u[0],f=u[1],E=Object(n.useState)(""),p=Object(m.a)(E,2),h=p[0],b=p[1],v=Object(n.useState)(!1),j=Object(m.a)(v,2),y=j[0],_=j[1],N=Object(n.useState)(!1),g=Object(m.a)(N,2),O=g[0],w=g[1],C=function(){var e=Object(s.a)(a).filter((function(e){return e.title.toLowerCase().includes(h)||e.body.toLowerCase().includes(h)}));f(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Posts"),y?c.a.createElement("div",{className:"control"},c.a.createElement("label",{className:"search"},c.a.createElement("input",{value:h,type:"search",id:"search-query",className:"input",placeholder:"Type to search",onChange:function(e){b(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&C()}}),c.a.createElement("button",{onClick:C,className:"button__subm"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg-inline--fa fa-search fa-w-16",role:"img","aria-hidden":"true",viewBox:"0 0 512 512",focusable:"false","data-icon":"search","data-prefix":"fas"},c.a.createElement("path",{fill:"currentColor",d:"M 505 442.7 L 405.3 343 c -4.5 -4.5 -10.6 -7 -17 -7 H 372 c 27.6 -35.3 44 -79.7 44 -128 C 416 93.1 322.9 0 208 0 S 0 93.1 0 208 s 93.1 208 208 208 c 48.3 0 92.7 -16.4 128 -44 v 16.3 c 0 6.4 2.5 12.5 7 17 l 99.7 99.7 c 9.4 9.4 24.6 9.4 33.9 0 l 28.3 -28.3 c 9.4 -9.4 9.4 -24.6 0.1 -34 Z M 208 336 c -70.7 0 -128 -57.2 -128 -128 c 0 -70.7 57.2 -128 128 -128 c 70.7 0 128 57.2 128 128 c 0 70.7 -57.2 128 -128 128 Z"})))),c.a.createElement("p",{className:"count__posts"},"Post: ",i.length),c.a.createElement(d,{posts:i})):c.a.createElement("button",{type:"button",className:"button__load",onClick:function(){w(!0),setTimeout((function(){!function(){var e=[];Promise.all([fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})),fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()})),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}))]).then((function(t){var a=Object(m.a)(t,3),n=a[0],c=a[1],l=a[2];e=n.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{comments:c.filter((function(t){return t.postId===e.id})),user:l.find((function(t){return t.id===e.userId}))})}))})).then((function(){l(e),f(e),w(!1),_(!0)}))}()}),1e3)}},O?"Loading...":"Load"))};r.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5b97cf31.chunk.js.map