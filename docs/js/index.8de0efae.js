(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={index:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/christmas-system/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20d5":function(e,t,n){},"2e95":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={name:"vApp",props:{},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},s=r,c=(n("a6e9"),n("2877")),l=Object(c["a"])(s,i,o,!1,null,null,null),u=l.exports,p=n("ecee"),d=n("c074"),m=n("ad3d"),f=n("bc3a"),g=n.n(f),v=n("a7fe"),_=n.n(v),h=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-login"}},[n("div",{staticClass:"window-box"},[n("div",{staticClass:"register-area"},[n("div",{staticClass:"register-close",on:{click:e.onRegisterCloseHandler}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("div",{staticClass:"register-panel"},[e._m(0),n("div",{staticClass:"input"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.name,expression:"signupData.name",modifiers:{trim:!0}}],attrs:{type:"text",name:"userName",placeholder:"Name"},domProps:{value:e.signupData.name},on:{input:function(t){t.target.composing||e.$set(e.signupData,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.email,expression:"signupData.email",modifiers:{trim:!0}}],attrs:{type:"email",name:"userEmail",placeholder:"Email"},domProps:{value:e.signupData.email},on:{input:function(t){t.target.composing||e.$set(e.signupData,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signupData.password,expression:"signupData.password",modifiers:{trim:!0}}],attrs:{type:"password",name:"userPassword",placeholder:"Password"},domProps:{value:e.signupData.password},on:{input:function(t){t.target.composing||e.$set(e.signupData,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signupData.confirm_password,expression:"signupData.confirm_password"}],attrs:{type:"password",name:"user-confirm-password",placeholder:"Confirm password"},domProps:{value:e.signupData.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.signupData,"confirm_password",t.target.value)}}}),n("div",{staticClass:"btn"},[n("input",{attrs:{type:"button",value:""},on:{click:e.onSignUpHandler}}),n("p",[e._v("SIGN UP")])])])])])]),n("div",{staticClass:"login-area"},[n("div",{staticClass:"login-panel"},[e._m(1),n("div",{staticClass:"input"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signinData.email,expression:"signinData.email",modifiers:{trim:!0}}],attrs:{type:"email",name:"user-email",placeholder:"Enter your email"},domProps:{value:e.signinData.email},on:{input:function(t){t.target.composing||e.$set(e.signinData,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.signinData.password,expression:"signinData.password",modifiers:{trim:!0}}],attrs:{type:"password",name:"user-password",placeholder:"Enter your password"},domProps:{value:e.signinData.password},on:{input:function(t){t.target.composing||e.$set(e.signinData,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"forget-password"},[e._v(" 忘記密碼 ")]),n("div",{staticClass:"btn"},[n("input",{attrs:{type:"submit",value:""},on:{click:e.onSignInHandler}}),n("p",[e._v("SIGN UP")])])])]),n("div",{staticClass:"register"},[n("h5",[e._v("Don't have an account yet?")]),n("h4",[n("div",{staticClass:"account",on:{click:e.onRegisterHandler}},[e._v("Create an account")])])])])])])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h3",[e._v("REGISTER")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h3",[e._v("LOGIN")])])}],P=(n("b0c0"),n("cffa")),w=n("59ca"),D=n.n(w),y=(n("e71f"),n("ea7b"),{apiKey:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_API_KEY,authDomain:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_DATABASE_URL,projectId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_PROJECT_ID,storageBucket:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({VUE_APP_HOST:"http://localhost:8088",NODE_ENV:"production",BASE_URL:"/christmas-system/"}).VUE_APP_FIREBASE_APP_ID}),A=D.a.initializeApp(y),S=A,C={name:"vLogin",props:{},components:{},data:function(){return{url:{signup:"".concat("http://localhost:8088","/api/login/sign-up"),signin:"".concat("http://localhost:8088","/api/login/sign-in")},signupData:{name:"",email:"",password:"",confirm_password:""},signinData:{email:"",password:""},isAnimating:!1,anim:{loginPanelFadeIn:null,registerPanelFadeIn:null}}},methods:{onAwake:function(){var e=this;e.anim.loginPanelFadeIn=P["a"].timeline().from(".login-panel",{x:50,opacity:0,duration:.5}).from(".register",{y:50,opacity:0},"-=1").eventCallback("onStart",(function(){e.isAnimating=!0})).eventCallback("onComplete",(function(){e.isAnimating=!1})).paused(!0),e.registerPanelFadeIn=P["a"].timeline().from(".register-panel",{opacity:0,x:-500,duration:.75}).from(".register-close",{opacity:0,x:-50}).eventCallback("onStart",(function(){e.isAnimating=!0})).eventCallback("onComplete",(function(){e.isAnimating=!1})).paused(!0)},onRegisterHandler:function(){var e=this;document.querySelector(".login-area").classList.add("register-status"),e.anim.loginPanelFadeIn.reverse(),e.registerPanelFadeIn.play()},onRegisterCloseHandler:function(){var e=this;e.isAnimating||(document.querySelector(".login-area").classList.remove("register-status"),e.anim.loginPanelFadeIn.play(),e.registerPanelFadeIn.reverse(),e.onCleanSignUpDate())},onSignUpHandler:function(){console.log("***** onSignUpHandler *****");var e=this;e.isAnimating||e.axios({url:e.url.signup,method:"post",data:{userName:e.signupData.name,userEmail:e.signupData.email,userPassword:e.signupData.password}}).then((function(t){console.log(t),t.data.success&&e.onRegisterCloseHandler()})).catch((function(e){console.error(e)}))},onSignInHandler:function(){console.log("***** onSignInHandler *****");var e=this;e.isAnimating||e.axios({url:e.url.signin,method:"post",data:{userEmail:e.signinData.email,userPassword:e.signinData.password}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},onSignUpGoogleHandler:function(){var e=new D.a.auth.GoogleAuthProvider;S.auth().signInWithPopup(e).then((function(e){console.log("result: ",e)})).catch((function(e){console.error(e)}))},onCleanSignUpDate:function(){var e=this;e.signupData={name:"",email:"",password:"",confirm_password:""}}},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){var e=this;e.onAwake(),e.anim.loginPanelFadeIn.play()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},U=C,O=(n("df46"),Object(c["a"])(U,E,b,!1,null,"24fe1293",null)),I=O.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-dashboard"}},[n("div",{attrs:{id:"toggle-btn"}},[e._v("Go")]),n("div",{attrs:{id:"side-bar"}},[n("div",{staticClass:"top-bar"},[n("h4",[e._v("PRO SIDERBAR")]),n("button",{on:{click:e.onCloseSideBar}},[e._v("Close")])]),n("div",{staticClass:"user-info"}),e._m(0),n("div",{staticClass:"bar-footer"})]),n("div",{attrs:{id:"view-port"}})])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-item-block"},[n("div",{staticClass:"select-item-title"},[n("h4",[e._v("General")])]),n("div",{staticClass:"select-item-title"},[n("h4",[e._v("Extra")])])])}],x={name:"vDashboard",props:{},components:{},data:function(){return{}},methods:{},computed:{},beforeCreate:function(){},created:function(){},beforeMounted:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},Destroy:function(){}},V=x,j=(n("ae7e"),Object(c["a"])(V,N,R,!1,null,"592e9654",null)),H=j.exports;a["a"].use(h["a"]);var B=[{path:"*",redirect:"/login"},{path:"/login",name:"vLogin",component:I},{path:"/dashboard",name:"vDashboard",component:H}],$=new h["a"]({mode:"history",routes:B}),k=$,F=n("2f62");a["a"].use(F["a"]);var T=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].use(_.a,g.a),p["c"].add(d["b"],d["a"]),a["a"].component("font-awesome-icon",m["a"]),a["a"].config.productionTip=!1,new a["a"]({router:k,store:T,render:function(e){return e(u)}}).$mount("#app")},"87eb":function(e,t,n){},a6e9:function(e,t,n){"use strict";var a=n("20d5"),i=n.n(a);i.a},ae7e:function(e,t,n){"use strict";var a=n("2e95"),i=n.n(a);i.a},df46:function(e,t,n){"use strict";var a=n("87eb"),i=n.n(a);i.a}});
//# sourceMappingURL=index.8de0efae.js.map