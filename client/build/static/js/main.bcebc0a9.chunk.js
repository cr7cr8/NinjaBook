(this.webpackJsonpninjabook=this.webpackJsonpninjabook||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),l=a.n(o),c=(a(23),a(2)),u=a(6),s=a(15),i=function(e,t){var a=t.type,r=Object(s.a)(t,["type"]);return"addBook"===a?[].concat(Object(u.a)(e),[{title:r.book.title,author:r.book.author,id:Date.now()}]):"removeBook"===a?e.filter((function(e){return e.id!==r.id})):"setLocalStorage"===a?(localStorage.setItem("books",JSON.stringify(e)),e):"removeLocalStorage"===a?(setTimeout((function(){localStorage.removeItem("books"),alert("lcoal storage removed !")}),0),[]):e},m=Object(r.createContext)(),d=function(e){var t=Object(r.useReducer)(i,JSON.parse(localStorage.getItem("books"))||[{title:"Welcome to use",author:Date(),id:Date.now()}]),a=Object(c.a)(t,2),o=a[0],l=a[1];return Object(r.useEffect)((function(){l({type:"setLocalStorage"})}),[o]),n.a.createElement(m.Provider,{value:{books:o,dispatch:l}},e.children)},p=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),o=a[0],l=a[1],u=Object(r.useState)(""),s=Object(c.a)(u,2),i=s[0],d=s[1],p=Object(r.useContext)(m).dispatch;return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p({type:"addBook",book:{title:o,author:i||Date().substr(0,24),id:Date.now()}}),l(""),d("")}},n.a.createElement("input",{placeholder:"title",type:"text",value:o,onChange:function(e){l(e.currentTarget.value)},required:!0}),n.a.createElement("input",{placeholder:"author",type:"text",value:i,onChange:function(e){d(e.currentTarget.value)}}),n.a.createElement("input",{type:"submit",value:"Add Book"}))},b=function(e){var t=e.book;Object(r.useEffect)((function(){a.current.onmouseenter=function(e){e.currentTarget.parentNode.style="opacity:0.7;  text-decoration: line-through;"},a.current.onmouseleave=function(e){e.currentTarget.parentNode.style="opacity:1;  text-decoration: none;"}}),[]);var a=Object(r.useRef)(),o=Object(r.useContext)(m).dispatch;return n.a.createElement("li",null,n.a.createElement("button",{className:"deleteBtn",ref:a,onClick:function(){o({type:"removeBook",id:t.id})}},"delete"),n.a.createElement("div",{className:"title"},t.title,"  "),n.a.createElement("div",{className:"author"},t.author," "))},f=function(e){var t=Object(r.useContext)(m).books;return t.sort((function(e,t){return e.id>=t.id?-1:1})),n.a.createElement("div",{className:"book-list"},n.a.createElement("ul",null,t.map((function(e){return n.a.createElement(b,{key:e.id,book:e})}))),n.a.createElement(p,null))},g=function(e){var t=Object(r.useContext)(m),a=t.books,o=t.dispatch;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("h1",null,"Ninja Reading List..."),n.a.createElement("p",null,"Currently you have ",a.length," books to get through..."),n.a.createElement("div",null,"  ",n.a.createElement("input",{type:"submit",value:"Default",onClick:o.bind(null,{type:"removeLocalStorage"})}))),Boolean(a.length)?n.a.createElement("p",null):n.a.createElement("p",{style:{textAlign:"center"}},"No books to read, Hello free time :)"))},v=a(5),h=a(7),E=a(4),k=a.n(E),y=function(e){var t=e.isRegisterForm,a=void 0===t||t,o=Object(r.useState)({format:["text","password","password"],data:{username:"",password:"",password2:""},error:{}}),l=Object(c.a)(o,2),s=l[0],i=l[1],m=Object(r.useRef)();Object(r.useEffect)((function(){a||(delete s.data.password2,i(Object(h.a)({},s))),m.current.disabled="true",m.current.value=a?"Sign Up":"Login"}),[]);var d={username:k.a.string().min(3).required().label("Username"),password:k.a.string().min(3).required().label("Password"),password2:k.a.any().valid(s.data.password).required().options({language:{any:{allowOnly:"is not matching"}}}).label("Retyped Passwrod")},p=function(e){s.data[e.currentTarget.name]=e.currentTarget.value,s.error=b(e)?Object(h.a)({},s.error,Object(v.a)({},e.currentTarget.name,b(e))):(delete s.error[e.currentTarget.name],s.error),a&&"password"===e.currentTarget.name&&(s.error.password||(s.data.password===s.data.password2?delete s.error.password2:s.error.password2="Two passwords are not matching")),console.log(s.error),i(Object(h.a)({},s))},b=function(e){var t=k.a.validate(e.currentTarget.value,d[e.currentTarget.name],{abortEarly:!1});return t.error?t.error.details[0].message:null};return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a?"Register":"login")}},Object.keys(s.data).map((function(e,t){return n.a.createElement("div",{className:"form-group",key:e},n.a.createElement("label",{htmlFor:e},Object(u.a)(e).shift().toLocaleUpperCase(),e.substr(1)),n.a.createElement("input",{id:e,className:"form-control",type:s.format[t],name:e,value:s.data[e],onChange:p}),n.a.createElement("div",null,s.error[e]))})),n.a.createElement("div",null," ",n.a.createElement("input",{ref:m,disabled:Boolean(Object.keys(s.error).length),type:"submit"})))},j=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null),n.a.createElement(d,null,n.a.createElement(g,null),n.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(9);l.a.render(n.a.createElement(w.a,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bcebc0a9.chunk.js.map