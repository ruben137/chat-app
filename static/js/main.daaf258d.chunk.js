(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{145:function(e,t,a){e.exports=a(338)},150:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),o=a.n(r),E=(a(150),a(82)),i=a(6),u=a(10),_=a(59),p=a.n(_);a(153);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAT_ENGINE_KEY:"cb2f0927-9059-48a2-b6ea-9e8ac33e0a7f",REACT_APP_CHAT_ENGINE_PRIVATE_KEY:"47604201-056f-4303-943c-5bdc9b940160",REACT_APP_FIREBASE_API_KEY:"AIzaSyD-wvwYdJvhH1TucB_yqyF_BnOVF2gLwzA",REACT_APP_FIREBASE_APP_ID:"1:289822888949:web:66f4204b8ce51e2c4b06bc",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-app-3067c.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"289822888949",REACT_APP_FIREBASE_PROJECT_ID:"chat-app-3067c",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-app-3067c.appspot.com"}));var s=p.a.initializeApp({apiKey:"AIzaSyD-wvwYdJvhH1TucB_yqyF_BnOVF2gLwzA",authDomain:"chat-app-3067c.firebaseapp.com",projectId:"chat-app-3067c",storageBucket:"chat-app-3067c.appspot.com",messagingSenderId:"289822888949",appId:"1:289822888949:web:66f4204b8ce51e2c4b06bc"}).auth(),l=c.a.createContext();function A(e){var t=e.children,a=Object(n.useState)(!0),r=Object(u.a)(a,2),o=r[0],E=r[1],_=Object(n.useState)(),p=Object(u.a)(_,2),A=p[0],h=p[1],m=Object(i.f)();Object(n.useEffect)((function(){s.onAuthStateChanged((function(e){h(e),E(!1),m.push("/chats")}))}),[A,m]);var d={user:A};return c.a.createElement(l.Provider,{value:d},!o&&t)}var h=a(14),m=a.n(h),d=a(26),P=a(143),b=a(4),f=a.n(b),T=function(){var e=Object(i.f)(),t=Object(n.useContext)(l).user,a=Object(n.useState)(!0),r=Object(u.a)(a,2),o=r[0],E=r[1],_=function(){var t=Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?f.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CHAT_ENGINE_KEY:"cb2f0927-9059-48a2-b6ea-9e8ac33e0a7f",REACT_APP_CHAT_ENGINE_PRIVATE_KEY:"47604201-056f-4303-943c-5bdc9b940160",REACT_APP_FIREBASE_API_KEY:"AIzaSyD-wvwYdJvhH1TucB_yqyF_BnOVF2gLwzA",REACT_APP_FIREBASE_APP_ID:"1:289822888949:web:66f4204b8ce51e2c4b06bc",REACT_APP_FIREBASE_AUTH_DOMAIN:"chat-app-3067c.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"289822888949",REACT_APP_FIREBASE_PROJECT_ID:"chat-app-3067c",REACT_APP_FIREBASE_STORAGE_BUCKET:"chat-app-3067c.appspot.com"}).REACT_APP_CHAT_ENGINE_ID,"user-name":t.email,"user-secret":t.uid}}).then((function(){E(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.displayName),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),f.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"47604201-056f-4303-943c-5bdc9b940160"}})})).then((function(){return E(!1)})).catch((function(e){return console.log(e.message)}))})):e.push("/")}),[t,e]),!t||o?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"MyChat"),c.a.createElement("div",{className:"logout-tab",onClick:_},"Logout")),c.a.createElement(P.d,{height:"calc(100vh - 66px)",projectID:"cb2f0927-9059-48a2-b6ea-9e8ac33e0a7f",userName:t.email,userSecret:t.uid}))},S=a(340),I=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to ",c.a.createElement("span",{style:{color:"#4285f4"}},"My"),c.a.createElement("span",{style:{color:"#3b5998"}},"Chat")),c.a.createElement("div",{className:"login-button google",onClick:function(){return s.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(S.a,null),"Sign In with Google")))};var R=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(E.a,null,c.a.createElement(A,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/chats",component:T}),c.a.createElement(i.a,{path:"/",component:I})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.daaf258d.chunk.js.map