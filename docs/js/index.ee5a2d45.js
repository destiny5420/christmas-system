(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={index:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20d5":function(e,t,n){},"2e95":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={name:"vApp",props:{},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},s=r,l=(n("a6e9"),n("2877")),c=Object(l["a"])(s,o,i,!1,null,null,null),u=c.exports,d=n("ecee"),p=n("c074"),m=n("ad3d"),f=n("bc3a"),g=n.n(f),v=n("a7fe"),h=n.n(v),_=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-login"}},[n("div",{staticClass:"window-box"},[n("div",{staticClass:"register-area"},[n("div",{staticClass:"register-close",on:{click:e.onRegisterCloseHandler}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("div",{staticClass:"register-panel"},[e._m(0),n("div",{staticClass:"input"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.name,expression:"signupData.name",modifiers:{trim:!0}}],attrs:{type:"text",name:"userName",placeholder:"Name"},domProps:{value:e.signupData.name},on:{input:function(t){t.target.composing||e.$set(e.signupData,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.email,expression:"signupData.email",modifiers:{trim:!0}}],attrs:{type:"email",name:"userEmail",placeholder:"Email"},domProps:{value:e.signupData.email},on:{input:function(t){t.target.composing||e.$set(e.signupData,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.password,expression:"signupData.password",modifiers:{trim:!0}}],attrs:{type:"password",name:"userPassword",placeholder:"Password"},domProps:{value:e.signupData.password},on:{input:function(t){t.target.composing||e.$set(e.signupData,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signupData.confirm_password,expression:"signupData.confirm_password"}],attrs:{type:"password",name:"user-confirm-password",placeholder:"Confirm password"},domProps:{value:e.signupData.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.signupData,"confirm_password",t.target.value)}}}),n("div",{staticClass:"btn"},[n("input",{attrs:{type:"button",value:""},on:{click:e.onSignUpHandler}}),n("p",[e._v("SIGN UP")])])])])])]),n("div",{staticClass:"login-area"},[n("div",{staticClass:"login-panel"},[e._m(1),n("div",{staticClass:"input"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signinData.email,expression:"signinData.email",modifiers:{trim:!0}}],attrs:{type:"email",name:"user-email",placeholder:"Enter your email"},domProps:{value:e.signinData.email},on:{input:function(t){t.target.composing||e.$set(e.signinData,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signinData.password,expression:"signinData.password",modifiers:{trim:!0}}],attrs:{type:"password",name:"user-password",placeholder:"Enter your password"},domProps:{value:e.signinData.password},on:{input:function(t){t.target.composing||e.$set(e.signinData,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"forget-password"},[e._v(" 忘記密碼 ")]),n("div",{staticClass:"btn"},[n("input",{attrs:{type:"submit",value:""},on:{click:e.onSignInHandler}}),n("p",[e._v("SIGN UP")])])])]),n("div",{staticClass:"register"},[n("h5",[e._v("Don't have an account yet?")]),n("h4",[n("div",{staticClass:"account",on:{click:e.onRegisterHandler}},[e._v("Create an account")])])])])])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h3",[e._v("REGISTER")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h3",[e._v("LOGIN")])])}],w=(n("b0c0"),n("cffa")),P=n("59ca"),D=n.n(P),A=(n("e71f"),n("ea7b"),{apiKey:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_API_KEY,authDomain:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_DATABASE_URL,projectId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_PROJECT_ID,storageBucket:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:""}).VUE_APP_FIREBASE_APP_ID}),S=D.a.initializeApp(A),C=S,y={name:"vLogin",props:{},components:{},data:function(){return{url:{signup:"".concat("http://localhost:8088","/api/login/sign-up"),signin:"".concat("http://localhost:8088","/api/login/sign-in"),signinCheck:"".concat("http://localhost:8088","/api/user/check"),signout:"".concat("http://localhost:8088","/api/user/logout")},signupData:{name:"",email:"",password:"",confirm_password:""},signinData:{email:"",password:""},isAnimating:!1,anim:{loginPanelFadeIn:null,registerPanelFadeIn:null}}},methods:{onAwake:function(){var e=this;e.anim.loginPanelFadeIn=w["a"].timeline().from(".login-panel",{x:50,opacity:0,duration:.5}).from(".register",{y:50,opacity:0},"-=1").eventCallback("onStart",(function(){e.isAnimating=!0})).eventCallback("onComplete",(function(){e.isAnimating=!1})).paused(!0),e.registerPanelFadeIn=w["a"].timeline().from(".register-panel",{opacity:0,x:-500,duration:.75}).from(".register-close",{opacity:0,x:-50}).eventCallback("onStart",(function(){e.isAnimating=!0})).eventCallback("onComplete",(function(){e.isAnimating=!1})).paused(!0)},onRegisterHandler:function(){var e=this;document.querySelector(".login-area").classList.add("register-status"),e.anim.loginPanelFadeIn.reverse(),e.registerPanelFadeIn.play()},onRegisterCloseHandler:function(){var e=this;e.isAnimating||(document.querySelector(".login-area").classList.remove("register-status"),e.anim.loginPanelFadeIn.play(),e.registerPanelFadeIn.reverse(),e.onCleanSignUpDate())},onSignUpHandler:function(){console.log("***** onSignUpHandler *****");var e=this;e.isAnimating||e.axios({url:e.url.signup,method:"post",data:{userName:e.signupData.name,userEmail:e.signupData.email,userPassword:e.signupData.password}}).then((function(t){console.log(t),t.data.success&&e.onRegisterCloseHandler()})).catch((function(e){console.error(e)}))},onSignInHandler:function(){console.log("***** onSignInHandler *****");var e=this;e.isAnimating||e.axios({url:e.url.signin,method:"post",data:{userEmail:e.signinData.email,userPassword:e.signinData.password}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},onSignUpGoogleHandler:function(){var e=new D.a.auth.GoogleAuthProvider;C.auth().signInWithPopup(e).then((function(e){console.log("result: ",e)})).catch((function(e){console.error(e)}))},onCleanSignUpDate:function(){var e=this;e.signupData={name:"",email:"",password:"",confirm_password:""}},onCheckSignInHandler:function(){var e=this;e.axios({url:e.url.signinCheck,method:"post"}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},onLogoutHandler:function(){var e=this;e.axios({url:e.url.signout,method:"post"}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){var e=this;e.onAwake(),e.anim.loginPanelFadeIn.play()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},U=y,O=(n("df46"),Object(l["a"])(U,b,E,!1,null,"24fe1293",null)),I=O.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-dashboard"}},[n("div",{attrs:{id:"toggle-btn"}},[e._v("Go")]),n("div",{attrs:{id:"side-bar"}},[n("div",{staticClass:"top-bar"},[n("h4",[e._v("PRO SIDERBAR")]),n("button",{on:{click:e.onCloseSideBar}},[e._v("Close")])]),n("div",{staticClass:"user-info"}),e._m(0),n("div",{staticClass:"bar-footer"})]),n("div",{attrs:{id:"view-port"}})])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-item-block"},[n("div",{staticClass:"select-item-title"},[n("h4",[e._v("General")])]),n("div",{staticClass:"select-item-title"},[n("h4",[e._v("Extra")])])])}],x={name:"vDashboard",props:{},components:{},data:function(){return{anim:{sideBarClose:null,viewPort:null},sideBarToggle:!1}},methods:{onAwake:function(){console.log("** onAwake **");var e=this;e.anim.sideBarClose=w["a"].timeline().to("#side-bar",{x:-300,duration:.5,ease:"sine.out"}).paused(!0),e.anim.viewPort=w["a"].timeline().to("#view-port",{marginLeft:0,width:"100%",duration:.5,ease:"sine.out"}).paused(!0)},onCloseSideBar:function(){console.log("** onCloseSideBar **");var e=this;e.anim.sideBarClose.play(),e.anim.viewPort.play()}},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){var e=this;e.onAwake()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},B=x,k=(n("ae7e"),Object(l["a"])(B,N,R,!1,null,"592e9654",null)),H=k.exports;a["a"].use(_["a"]);var V=[{path:"*",redirect:"/login"},{path:"/login",name:"vLogin",component:I},{path:"/dashboard",name:"vDashboard",component:H}],j=new _["a"]({mode:"history",routes:V}),$=j,T=n("2f62");a["a"].use(T["a"]);var F=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].use(h.a,g.a),d["c"].add(p["b"],p["a"]),a["a"].component("font-awesome-icon",m["a"]),g.a.defaults.withCredentials=!0,a["a"].config.productionTip=!1,new a["a"]({router:$,store:F,render:function(e){return e(u)}}).$mount("#app")},"87eb":function(e,t,n){},a6e9:function(e,t,n){"use strict";var a=n("20d5"),o=n.n(a);o.a},ae7e:function(e,t,n){"use strict";var a=n("2e95"),o=n.n(a);o.a},df46:function(e,t,n){"use strict";var a=n("87eb"),o=n.n(a);o.a}});
//# sourceMappingURL=index.ee5a2d45.js.map