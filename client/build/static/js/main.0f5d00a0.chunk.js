(this.webpackJsonpninjabook=this.webpackJsonpninjabook||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),c=(a(18),a(2)),i=a(12),u=function(e,t){return"addBook"===t.type?[].concat(Object(i.a)(e),[{title:t.book.title,author:t.book.author,id:Date.now()}]):"removeBook"===t.type?e.filter((function(e){return e.id!==t.id})):"removeLocalStorage"===t.type?(localStorage.removeItem("books"),alert("lcoal storage removed !"),e):e},s=Object(n.createContext)(),m=function(e){var t=Object(n.useReducer)(u,JSON.parse(localStorage.getItem("books"))||[{title:"name of the wind",author:"Patrick rothfuss",id:1},{title:"the way of kings",author:"brande sandera",id:2},{title:"the final empire",author:"jillk huss",id:3},{title:"the hero of ages",author:"snelck dussbd",id:4}]),a=Object(c.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(r))}),[r]),o.a.createElement(s.Provider,{value:{books:r,dispatch:l}},e.children)},d=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),m=u[0],d=u[1],h=Object(n.useContext)(s).dispatch;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h({type:"addBook",book:{title:r,author:m,id:Date.now()}}),l(""),d("")}},o.a.createElement("input",{type:"text",value:r,onChange:function(e){l(e.currentTarget.value)},required:!0}),o.a.createElement("input",{type:"text",value:m,onChange:function(e){d(e.currentTarget.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"Add Book"}))},h=function(e){var t=e.book,a=Object(n.useContext)(s).dispatch;return o.a.createElement("div",null,o.a.createElement("li",{key:t.id},o.a.createElement("button",{className:"deleteBtn",onClick:function(){a({type:"removeBook",id:t.id})},onMouseEnter:function(e){e.currentTarget.parentNode.parentNode.style="opacity:0.7;  text-decoration: line-through;"},onMouseOut:function(e){e.currentTarget.parentNode.parentNode.style="opacity:1;  text-decoration: noe;"}},"delete"),o.a.createElement("div",{className:"title"},t.title,"  "),o.a.createElement("div",{className:"author"},t.author," ")))},b=function(e){var t=Object(n.useContext)(s).books;return o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(o.a.Fragment,{key:e.id},o.a.createElement(h,{book:e}))}))),o.a.createElement(d,null))},p=function(e){var t=Object(n.useContext)(s),a=t.books,r=t.dispatch;return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar"},o.a.createElement("h1",null,"Ninja Reading List..."),o.a.createElement("p",null,"Currently you have ",a.length," books to get through..."),o.a.createElement("input",{type:"submit",value:"Default",onClick:r.bind(null,{type:"removeLocalStorage"})})),Boolean(a.length)?o.a.createElement("p",null):o.a.createElement("p",{style:{textAlign:"center"}},"No books to read, Hello free time :)"))},f=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null,o.a.createElement(p,null),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(4);l.a.render(o.a.createElement(v.a,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.0f5d00a0.chunk.js.map