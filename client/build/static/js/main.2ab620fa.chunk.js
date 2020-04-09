(this.webpackJsonpninjabook=this.webpackJsonpninjabook||[]).push([[0],{40:function(e,t,a){e.exports=a(84)},45:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),i=a.n(r),c=(a(45),a(14)),l=a(3),s=a(6),u=a(11),d=a(17),m=a.n(d),f=a(10),p=a.n(f),b="/api",g=(a(65),a(9));E()&&(p.a.defaults.headers.common["x-auth-token"]=E());var h=E()?[{title:"... loading ...",author:Date(),id:Date.now()}]:[{title:o.a.createElement(o.a.Fragment,null,"Please ",o.a.createElement(g.b,{to:"/login",style:{color:"#eee"}}," Login ")," or ",o.a.createElement(g.b,{to:"/register",style:{color:"#eee"}}," Regist "),"  to use"),author:Date(),id:Date.now()}];function E(){return localStorage.getItem("token")}var j=Object(n.createContext)(),O=function(e){var t=Object(n.useState)(h),a=Object(l.a)(t,2),r=a[0],i=a[1];return o.a.createElement(j.Provider,{value:{bookList:r,dispatch:function(e){return function(e,t,a){var n=a.type,o=void 0===n?"":n,r=Object(u.a)(a,["type"]);if("initialize"===o);else{if("toggleStatus"===o){var i=e.find((function(e){return e.id===r.id}));return i.finish=!i.finish,t(Object(s.a)(e)),console.log(e.find((function(e){return e.id===r.id}))),p.a.put("".concat(b,"/booklist/updatebook/")+r.id,i).then((function(e){})).catch((function(a){var n=e.find((function(e){return e.id===r.id}));n.finish=!n.finish,t(Object(s.a)(e)),console.log(a.response.data),alert(a.response.data)}))}if(E()){if("deleteBook"===o){var c=e.filter((function(e){if(e.id!==r.id)return e}));return p.a.delete("".concat(b,"/booklist/deletebook/")+r.id).then((function(e){setTimeout((function(){t(c)}),500)})).catch((function(a){t(Object(s.a)(e)),console.log(a.response),alert(a.response.data)}))}if("logout"===o)t([]);else{if("cleanFinish"!==o){if("getBookList"===o)return p.a.get(r.justUnfished?"".concat(b,"/booklist/getunfinishedbooklist"):"".concat(b,"/booklist/getbooklist")).then((function(e){var a=e.data.map((function(e){return{title:e.title,author:e.author,id:e.id,finish:e.finish,files:e.files}}));t(a)})).catch((function(e){console.log(e.response.data),alert(e.response.data)}));if("addBook"===o)return t([].concat(Object(s.a)(e),[r.book]).sort((function(e,t){return e.id>=t.id?-1:1}))),p.a.post("".concat(b,"/booklist/addbook"),r.book).then((function(e){})).catch((function(a){t(e),console.log(a.response.data),alert(a.response.data)}));if("uploadFile"===o){t([].concat(Object(s.a)(e),[r.book]).sort((function(e,t){return e.id>=t.id?-1:1})));var l=new FormData;return r.file&&l.append("file",r.file),l.append("obj",JSON.stringify(r.book)),p.a.post("".concat(b,"/booklist/upload"),l,{headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){var t=Math.floor(100*e.loaded/e.total);r.setProgress((100*e.loaded/e.total).toFixed(2)+"%"),console.log(t)}}).then((function(e){r.setFile(null),console.log(e.data)})).catch((function(e){console.log(e.response.data),alert(e.response.data)}))}return"downloadFile"===o?p()({url:"".concat(b,"/booklist/download/").concat(String(r.id)),method:"GET",responseType:"blob",onDownloadProgress:function(e){r.obj((100*e.loaded/e.total).toFixed(2)+"%"),console.log((100*e.loaded/e.total).toFixed(2))}}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",decodeURIComponent(e.headers["file-name"])),document.body.appendChild(a),a.click()})).catch((function(e){console.log(e.response.data),alert(e.response.data)})):e}t(e.filter((function(e){return!0!==e.finish})))}}else console.log("no tokens to perferm booklist functions")}}(r,i,e)}}},e.children)},k=a(15),v=function(){var e=function(){var e=localStorage.getItem("token");return Boolean(e)?m()(e):null}();return e?{username:e.username}:{username:""}}();function w(e){localStorage.setItem("token",e)}var y=Object(n.createContext)(),x=function(e){var t=Object(n.useState)(v),a=Object(l.a)(t,2),r=a[0],i=a[1];return o.a.createElement(y.Provider,{value:{user:r,dispatch:function(e){return function(e,t,a){var n=a.type,o=void 0===n?"":n,r=Object(u.a)(a,["type"]);if("removeLocalStorage"!==o)return"register"===o?p.a.post("".concat(b,"/user/register"),{username:r.username,password:r.password}).then((function(e){w(e.headers["x-auth-token"]),window.location.assign("/")})).catch((function(e){e.response.data.indexOf("user"),r.setErrMsg("username",e.response.data)})):"login"===o?p.a.post("".concat(b,"/user/login"),r).then((function(e){w(e.headers["x-auth-token"]),window.location.assign("/")})).catch((function(e){e.response.data.indexOf("user")>-1?r.setErrMsg("username",e.response.data):r.setErrMsg("password",e.response.data)})):e;localStorage.removeItem("token"),t(Object(k.a)({},e,{username:""}))}(r,i,e)}}},e.children)},C=a(38),S=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),u=s[0],d=s[1],m=Object(n.useState)(null),f=Object(l.a)(m,2),p=f[0],b=f[1],g=Object(n.useState)("0%"),h=Object(l.a)(g,2),E=h[0],O=h[1],k=Object(n.useContext)(j).dispatch,v=(Object(n.useContext)(y).user,Object(n.createRef)());return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{value:r,placeholder:"title",onChange:function(e){i(e.currentTarget.value)}}),o.a.createElement("input",{placeholder:Date().substr(0,24),type:"text",value:u,onChange:function(e){d(e.currentTarget.value)}}),p&&o.a.createElement("img",{src:p?URL.createObjectURL(p):"",style:{opacity:1,width:200,height:100}}),o.a.createElement("div",null,o.a.createElement("input",{type:"file",style:{display:"none"},onChange:function(e){e.preventDefault(),console.log(e.currentTarget.files[0]),i((r+" "+e.currentTarget.files[0].name).trim()),e.currentTarget.files[0]?b(e.currentTarget.files[0]):b(null)},ref:function(e){return v=e}}),o.a.createElement("button",{className:"btn",onClick:function(){v.click()}},E),o.a.createElement("button",{disabled:!r,className:"btn",style:{float:"right",marginTop:"5px"},onClick:function(e){if(e.preventDefault(),""===r)return null;k({type:"uploadFile",setProgress:O,setFile:b,file:p,book:{title:r,files:p?[p.name]:null,author:u||Date().substr(0,24),id:Date.now(),finish:!1}}),i(""),d("")}},"Add Book")))},T=a(20),F=a(18),L=function(e){var t=e.whenClick,a=Object(u.a)(e,["whenClick"]),r=Object(n.useState)("0%"),i=Object(l.a)(r,2),c=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),f=m[0],p=m[1],b=Object(F.b)({from:{width:"0%"},margin:"0",width:c,paddingLeft:"10px",padding:"0",background:"linear-gradient(to right, #4880EC, #019CAD)",whiteSpace:"nowrap",borderRadius:"4px"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",Object.assign({disabled:f,style:{padding:"0",border:"0"},onClick:function(){p(!0),t(s)}},a),o.a.createElement(F.a.div,{style:b,onClick:function(){s("5%")}},o.a.createElement("div",{style:{paddingLeft:"10px",paddingRight:"10px",wordWrap:"break-word"}},a.children))))},N=function(e){var t=e.book,a=e.dispatch,n=e.setGoalOpa,r=e.setGoalHeight,i=Object(u.a)(e,["book","dispatch","setGoalOpa","setGoalHeight"]),c=0,l=!1;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"deleteBtn",onClick:function(){c=setTimeout((function(){l||a({type:"toggleStatus",id:t.id}),l=!1}),200)},onDoubleClick:function(){clearTimeout(c),l=!0,n(0),r(0),a({type:"deleteBook",id:t.id})},onMouseEnter:function(e){e.currentTarget.parentNode.style="opacity:0.7;  text-decoration: line-through;"},onMouseOut:function(e){e.currentTarget.parentNode.style="opacity:1;  text-decoration: none;"}},i.children))},B=function(e){var t=e.book,a=(Object(u.a)(e,["book"]),Object(n.useContext)(j).dispatch),r=Object(n.useContext)(y).user,i=Object(n.useState)(1),c=Object(l.a)(i,2),s=c[0],d=c[1],m=Object(n.useState)("auto"),f=Object(l.a)(m,2),p=f[0],b=f[1];return o.a.createElement(T.Spring,{from:{opacity:0,height:0},to:{opacity:s,height:p}},(function(e){return o.a.createElement("li",{className:t.finish?"done":"",style:e},r.username&&o.a.createElement(N,{setGoalOpa:d,setGoalHeight:b,dispatch:a,book:t,props:e},"delete"),o.a.createElement("div",{className:t.finish?"title done":"title"},t.title,"  "),o.a.createElement("div",{className:t.finish?"author done":"author"},t.author," "),t.files&&o.a.createElement(L,{whenClick:function(e){a({type:"downloadFile",id:t.id,obj:e})},className:"btn bar"},t.files[0]))}))},R=function(e){var t=Object(n.useContext)(j),a=t.bookList,r=t.dispatch,i=Object(n.useContext)(y).user;return Object(n.useEffect)((function(){setTimeout((function(){r({type:"getBookList",justUnfished:!0})}),0)}),[]),o.a.createElement("div",{className:"book-list "},i.username&&o.a.createElement(S,null),o.a.createElement("ul",null,a.map((function(t){return o.a.createElement(B,Object.assign({style:e},{key:t.id,book:t}))}))))},D=a(39),U=a.n(D),P=function(e){var t=Object(n.useContext)(j),a=t.bookList,r=t.dispatch,i=Object(n.useContext)(y),c=i.user,s=i.dispatch,u=Object(n.useState)(!1),d=Object(l.a)(u,2),m=d[0],f=d[1];return document.title=c.username||"NinjaBook",o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar",style:e},o.a.createElement("h1",null,c.username," Reading List..."),o.a.createElement("p",null,"Currently you have ",a.length," books to get through..."),o.a.createElement(U.a,{checked:m,onChange:function(){r(m?{type:"cleanFinish"}:{type:"getBookList"}),f(!m)},onColor:"#6d3d6d",offColor:"#6d3d6d",offHandleColor:"#eeeeee",onHandleColor:"#eeeeee",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:1,width:48,className:"react-switch",id:"material-switch"})),o.a.createElement("button",null," ",o.a.createElement(g.b,{to:"/"},"home ")," "),!c.username&&o.a.createElement("button",null,"  ",o.a.createElement(g.b,{to:"/login"},"login  ")),!c.username&&o.a.createElement("button",null,"  ",o.a.createElement(g.b,{to:"/register"},"register  ")),c.username&&o.a.createElement("button",{style:{float:"right"},onClick:function(){r({type:"logout"}),s({type:"removeLocalStorage"}),window.location.assign("/")}},"logout"),Boolean(a.length)||o.a.createElement("p",{style:{textAlign:"center"}},"No books to read, Hello free time :)"))},I=a(12),G=a(19),M=a.n(G),H=function(e){var t=e.isRegisterForm,a=Object(n.useContext)(y),r=a.user,i=a.dispatch;r.username&&e.history.push("/");var c=Object(n.useState)({format:t?["text","password","password"]:["text","password"],data:t?{username:"",password:"",password2:""}:{username:"",password:""},error:t?{username:"",password:"",password2:""}:{username:"",password:""}}),u=Object(l.a)(c,2),d=u[0],m=u[1],f=function(e,t){m(Object(k.a)({},d,{error:Object(k.a)({},d.error,Object(I.a)({},e,t))}))},p=Object(n.useRef)(),b={username:M.a.string().min(3).required().label("Username"),password:M.a.string().min(3).required().label("Password"),password2:M.a.any().valid(d.data.password).required().options({language:{any:{allowOnly:"is not matching"}}}).label("Retyped Passwrod")},g=function(e){d.data[e.currentTarget.name]=e.currentTarget.value,d.error=h(e)?Object(k.a)({},d.error,Object(I.a)({},e.currentTarget.name,h(e))):(delete d.error[e.currentTarget.name],d.error),t&&"password"===e.currentTarget.name&&(d.error.password||(d.data.password===d.data.password2?delete d.error.password2:d.error.password2="Two passwords are not matching")),m(Object(k.a)({},d))},h=function(e){var t=M.a.validate(e.currentTarget.value,b[e.currentTarget.name],{abortEarly:!1});return t.error?t.error.details[0].message:null};return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(Object(k.a)({type:t?"register":"login"},d.data,{setErrMsg:f}))}},Object.keys(d.data).map((function(e,t){return o.a.createElement("div",{className:"form-group",key:e},o.a.createElement("label",{htmlFor:e},Object(s.a)(e).shift().toLocaleUpperCase(),e.substr(1)),o.a.createElement("input",{id:e,className:"form-control",type:d.format[t],name:e,value:d.data[e],onChange:g}),o.a.createElement("div",null,d.error[e]))})),o.a.createElement("div",null,o.a.createElement("input",{ref:p,type:"submit",disabled:Boolean(Object.keys(d.error).length),value:t?"Regist":"Login"})))},A=function(e){return o.a.createElement(H,Object.assign({isRegisterForm:!1},e))},q=function(e){return o.a.createElement(H,Object.assign({isRegisterForm:!0},e))};console.log("production");var J=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(n.Suspense,null),o.a.createElement(x,null,o.a.createElement(O,null,o.a.createElement(P,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/login",render:function(e){return o.a.createElement(A,e)}}),o.a.createElement(c.a,{path:"/register",render:function(e){return o.a.createElement(q,e)}}),o.a.createElement(R,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g.a,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2ab620fa.chunk.js.map