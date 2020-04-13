(this.webpackJsonpninjabook=this.webpackJsonpninjabook||[]).push([[0],{40:function(e,t,a){e.exports=a(84)},45:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),i=a.n(r),l=(a(45),a(14)),c=a(3),s=a(6),u=a(11),d=a(17),m=a.n(d),p=a(10),f=a.n(p),g="/api",b=(a(65),a(9));E()&&(f.a.defaults.headers.common["x-auth-token"]=E());var h=E()?[{title:"... loading ...",author:Date(),id:Date.now()}]:[{title:o.a.createElement(o.a.Fragment,null,"Please ",o.a.createElement(b.b,{to:"/login",style:{color:"#eee"}}," Login ")," or ",o.a.createElement(b.b,{to:"/register",style:{color:"#eee"}}," Regist "),"  to use"),author:Date(),id:Date.now()}];function E(){return localStorage.getItem("token")}var O=Object(n.createContext)(),j=function(e){var t=Object(n.useState)(h),a=Object(c.a)(t,2),r=a[0],i=a[1];return o.a.createElement(O.Provider,{value:{bookList:r,dispatch:function(e){return function(e,t,a){var n=a.type,o=void 0===n?"":n,r=Object(u.a)(a,["type"]);if("initialize"===o);else{if("toggleStatus"===o){var i=e.find((function(e){return e.id===r.id}));return i.finish=!i.finish,t(Object(s.a)(e)),console.log(e.find((function(e){return e.id===r.id}))),f.a.put("".concat(g,"/booklist/updatebook/")+r.id,i).then((function(e){})).catch((function(a){var n=e.find((function(e){return e.id===r.id}));n.finish=!n.finish,t(Object(s.a)(e)),console.log(a.response.data),alert(a.response.data)}))}if(E()){if("deleteBook"===o){var l=e.filter((function(e){if(e.id!==r.id)return e}));return f.a.delete("".concat(g,"/booklist/deletebook/")+r.id).then((function(e){setTimeout((function(){t(l)}),500)})).catch((function(a){t(Object(s.a)(e)),console.log(a.response),alert(a.response.data)}))}if("logout"===o)t([]);else{if("cleanFinish"!==o){if("getBookList"===o)return f.a.get(r.justUnfished?"".concat(g,"/booklist/getunfinishedbooklist"):"".concat(g,"/booklist/getbooklist")).then((function(e){var a=e.data.map((function(e){return{title:e.title,author:e.author,id:e.id,finish:e.finish,files:e.files}}));t(a)})).catch((function(e){console.log(e.response.data),alert(e.response.data)}));if("addBook"===o)return t([].concat(Object(s.a)(e),[r.book]).sort((function(e,t){return e.id>=t.id?-1:1}))),f.a.post("".concat(g,"/booklist/addbook"),r.book).then((function(e){})).catch((function(a){t(e),console.log(a.response.data),alert(a.response.data)}));if("uploadFile"===o){var c=new FormData;return r.file&&c.append("file",r.file),c.append("obj",JSON.stringify(r.book)),f.a.post("".concat(g,"/booklist/upload"),c,{headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){var t=Math.floor(100*e.loaded/e.total);r.setProgress((100*e.loaded/e.total).toFixed(2)+"%"),(100*e.loaded/e.total).toFixed(2)+"%"==="100.00%"&&r.setProgress("Processing on server"),console.log(t)}}).then((function(a){t([].concat(Object(s.a)(e),[r.book]).sort((function(e,t){return e.id>=t.id?-1:1}))),r.setProgress("File"),r.setFile(null),console.log(a.data)})).catch((function(e){console.log(e.response.data),alert(e.response.data)}))}return"downloadFile"===o?f()({url:"".concat(g,"/booklist/download/").concat(String(r.id)),method:"GET",responseType:"blob",onDownloadProgress:function(e){r.obj((100*e.loaded/e.total).toFixed(2)+"%"),console.log((100*e.loaded/e.total).toFixed(2))}}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download",decodeURIComponent(e.headers["file-name"])),document.body.appendChild(a),a.click()})).catch((function(e){console.log(e.response.data),alert(e.response.data)})):e}t(e.filter((function(e){return!0!==e.finish})))}}else console.log("no tokens to perferm booklist functions")}}(r,i,e)}}},e.children)},v=a(15),k=function(){var e=function(){var e=localStorage.getItem("token");return Boolean(e)?m()(e):null}();return e?{username:e.username}:{username:""}}();function w(e){localStorage.setItem("token",e)}var y=Object(n.createContext)(),x=function(e){var t=Object(n.useState)(k),a=Object(c.a)(t,2),r=a[0],i=a[1];return o.a.createElement(y.Provider,{value:{user:r,dispatch:function(e){return function(e,t,a){var n=a.type,o=void 0===n?"":n,r=Object(u.a)(a,["type"]);if("removeLocalStorage"!==o)return"register"===o?f.a.post("".concat(g,"/user/register"),{username:r.username,password:r.password}).then((function(e){w(e.headers["x-auth-token"]),window.location.assign("/")})).catch((function(e){e.response.data.indexOf("user"),r.setErrMsg("username",e.response.data)})):"login"===o?f.a.post("".concat(g,"/user/login"),r).then((function(e){w(e.headers["x-auth-token"]),window.location.assign("/")})).catch((function(e){e.response.data.indexOf("user")>-1?r.setErrMsg("username",e.response.data):r.setErrMsg("password",e.response.data)})):e;localStorage.removeItem("token"),t(Object(v.a)({},e,{username:""}))}(r,i,e)}}},e.children)},C=a(38),S=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(null),p=Object(c.a)(m,2),f=p[0],g=p[1],b=Object(n.useState)("File"),h=Object(c.a)(b,2),E=h[0],j=h[1],v=Object(n.useContext)(O).dispatch,k=(Object(n.useContext)(y).user,Object(n.createRef)());return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{value:r,placeholder:"title",onChange:function(e){i(e.currentTarget.value)}}),o.a.createElement("input",{placeholder:Date().substr(0,24),type:"text",value:u,onChange:function(e){d(e.currentTarget.value)}}),f&&o.a.createElement("img",{src:f?URL.createObjectURL(f):"",style:{opacity:1,width:200,height:100}}),o.a.createElement("div",null,o.a.createElement("input",{type:"file",style:{display:"none"},onChange:function(e){e.preventDefault(),console.log(e.currentTarget.files[0]),i((r+" "+e.currentTarget.files[0].name).trim()),e.currentTarget.files[0]?g(e.currentTarget.files[0]):g(null)},ref:function(e){return k=e}}),o.a.createElement("button",{disabled:"File"!==E,className:"btn",onClick:function(){k.click()}},E),o.a.createElement("button",{disabled:!r||"File"!==E,className:"btn",style:{float:"right",marginTop:"5px"},onClick:function(e){if(e.preventDefault(),""===r)return null;v({type:"uploadFile",setProgress:j,setFile:g,file:f,book:{title:r,files:f?[f.name]:null,author:u||Date().substr(0,24),id:Date.now(),finish:!1}}),i(""),d("")}},"Add Book")))},F=a(20),T=a(18),L=function(e){var t=e.whenClick,a=Object(u.a)(e,["whenClick"]),r=Object(n.useState)("0%"),i=Object(c.a)(r,2),l=i[0],s=i[1],d=Object(n.useState)(!1),m=Object(c.a)(d,2),p=m[0],f=m[1],g=Object(T.b)({from:{width:"0%"},margin:"0",width:l,paddingLeft:"10px",padding:"0",background:"linear-gradient(to right, #4880EC, #019CAD)",whiteSpace:"nowrap",borderRadius:"4px"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",Object.assign({disabled:p,style:{padding:"0",border:"0"},onClick:function(){f(!0),t(s)}},a),o.a.createElement(T.a.div,{style:g,onClick:function(){s("5%")}},o.a.createElement("div",{style:{paddingLeft:"10px",paddingRight:"10px"}},a.children))))},N=function(e){var t=e.book,a=e.dispatch,n=e.setGoalOpa,r=e.setGoalHeight,i=Object(u.a)(e,["book","dispatch","setGoalOpa","setGoalHeight"]),l=0,c=!1;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"deleteBtn",onClick:function(){l=setTimeout((function(){c||a({type:"toggleStatus",id:t.id}),c=!1}),200)},onDoubleClick:function(){clearTimeout(l),c=!0,n(0),r(0),a({type:"deleteBook",id:t.id})},onMouseEnter:function(e){e.currentTarget.parentNode.style="opacity:0.7;  text-decoration: line-through; padding:0 10px"},onMouseOut:function(e){e.currentTarget.parentNode.style="opacity:1;  text-decoration: none;   padding:0 10px"}},i.children))},R=function(e){var t=e.book,a=(Object(u.a)(e,["book"]),Object(n.useContext)(O).dispatch),r=Object(n.useContext)(y).user,i=Object(n.useState)(1),l=Object(c.a)(i,2),s=l[0],d=l[1],m=Object(n.useState)("auto"),p=Object(c.a)(m,2),f=p[0],g=p[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.Spring,{from:{opacity:0,height:0},to:{opacity:s,height:f},config:{duration:300}},(function(e){return o.a.createElement("li",{style:e},o.a.createElement("div",{style:{height:"10px",opacity:"0"}}),o.a.createElement("div",{className:t.finish?"done":"",style:{paddingLeft:"10px",paddingRight:"10px"}},r.username?o.a.createElement(N,{setGoalOpa:d,setGoalHeight:g,dispatch:a,book:t,props:e},"  delete  "):o.a.createElement("div",null),o.a.createElement("div",{className:t.finish?"title done":"title",style:{boxShadow:"none"}},t.title,"  "),o.a.createElement("div",{className:t.finish?"author done":"author"},t.author," "),t.files&&o.a.createElement(L,{whenClick:function(e){a({type:"downloadFile",id:t.id,obj:e})},className:"btn bar"},t.files[0])),o.a.createElement("div",{style:{height:"10px",opacity:"0"}}))})))},B=function(e){var t=Object(n.useContext)(O),a=t.bookList,r=t.dispatch,i=Object(n.useContext)(y).user;return Object(n.useEffect)((function(){setTimeout((function(){r({type:"getBookList",justUnfished:!0})}),0)}),[]),o.a.createElement("div",{className:"book-list "},i.username&&o.a.createElement(S,null),o.a.createElement("ul",null,a.map((function(t){return o.a.createElement(R,Object.assign({style:e},{key:t.id,book:t}))}))))},D=a(39),P=a.n(D),U=function(e){var t=Object(n.useContext)(O),a=t.bookList,r=t.dispatch,i=Object(n.useContext)(y),l=i.user,s=i.dispatch,u=Object(n.useState)(!1),d=Object(c.a)(u,2),m=d[0],p=d[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar"},o.a.createElement("h1",null,l.username," Reading List..."),o.a.createElement("p",null,"Currently you have ",a.length," books to get through..."),o.a.createElement(P.a,{checked:m,onChange:function(){r(m?{type:"cleanFinish"}:{type:"getBookList"}),p(!m)},onColor:"#6d3d6d",offColor:"#6d3d6d",offHandleColor:"#eeeeee",onHandleColor:"#eeeeee",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:1,width:48,className:"react-switch",id:"material-switch"})),o.a.createElement("button",null," ",o.a.createElement(b.b,{to:"/"},"home ")," "),!l.username&&o.a.createElement("button",null,"  ",o.a.createElement(b.b,{to:"/login"},"login  ")),!l.username&&o.a.createElement("button",null,"  ",o.a.createElement(b.b,{to:"/register"},"register  ")),l.username&&o.a.createElement("button",{style:{float:"right"},onClick:function(){r({type:"logout"}),s({type:"removeLocalStorage"}),window.location.assign("/")}},"logout"),Boolean(a.length)||o.a.createElement("p",{style:{textAlign:"center"}},"No books to read, Hello free time :)"))},I=a(12),G=a(19),M=a.n(G),H=function(e){var t=e.isRegisterForm,a=Object(n.useContext)(y),r=a.user,i=a.dispatch;r.username&&e.history.push("/");var l=Object(n.useState)({format:t?["text","password","password"]:["text","password"],data:t?{username:"",password:"",password2:""}:{username:"",password:""},error:t?{username:"",password:"",password2:""}:{username:"",password:""}}),u=Object(c.a)(l,2),d=u[0],m=u[1],p=function(e,t){m(Object(v.a)({},d,{error:Object(v.a)({},d.error,Object(I.a)({},e,t))}))},f=Object(n.useRef)(),g={username:M.a.string().min(3).required().label("Username"),password:M.a.string().min(3).required().label("Password"),password2:M.a.any().valid(d.data.password).required().options({language:{any:{allowOnly:"is not matching"}}}).label("Retyped Passwrod")},b=function(e){d.data[e.currentTarget.name]=e.currentTarget.value,d.error=h(e)?Object(v.a)({},d.error,Object(I.a)({},e.currentTarget.name,h(e))):(delete d.error[e.currentTarget.name],d.error),t&&"password"===e.currentTarget.name&&(d.error.password||(d.data.password===d.data.password2?delete d.error.password2:d.error.password2="Two passwords are not matching")),m(Object(v.a)({},d))},h=function(e){var t=M.a.validate(e.currentTarget.value,g[e.currentTarget.name],{abortEarly:!1});return t.error?t.error.details[0].message:null};return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(Object(v.a)({type:t?"register":"login"},d.data,{setErrMsg:p}))}},Object.keys(d.data).map((function(e,t){return o.a.createElement("div",{className:"form-group",key:e},o.a.createElement("label",{htmlFor:e},Object(s.a)(e).shift().toLocaleUpperCase(),e.substr(1)),o.a.createElement("input",{id:e,className:"form-control",type:d.format[t],name:e,value:d.data[e],onChange:b}),o.a.createElement("div",null,d.error[e]))})),o.a.createElement("div",null,o.a.createElement("input",{ref:f,type:"submit",disabled:Boolean(Object.keys(d.error).length),value:t?"Regist":"Login"})))},A=function(e){return o.a.createElement(H,Object.assign({isRegisterForm:!1},e))},q=function(e){return o.a.createElement(H,Object.assign({isRegisterForm:!0},e))};console.log("production");var J=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null,o.a.createElement(j,null,o.a.createElement(U,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/login",render:function(e){return o.a.createElement(A,e)}}),o.a.createElement(l.a,{path:"/register",render:function(e){return o.a.createElement(q,e)}}),o.a.createElement(B,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b.a,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f5c1817a.chunk.js.map