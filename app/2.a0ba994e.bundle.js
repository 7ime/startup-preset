(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{281:function(e,t,n){e.exports={root:"root__1Jw-v"}},282:function(e,t,n){e.exports={root:"root__3CA5N"}},283:function(e,t,n){e.exports={root:"root__25J7u"}},284:function(e,t,n){},285:function(e,t,n){e.exports={root:"root__2VqsL",inner:"inner__1hqPL",is_active:"is_active__1NN08",avatarWrap:"avatarWrap__2F10M",content:"content__1UqDi",header:"header__2fbQi",channel:"channel__3sQVn",group:"group__2shKf",footer:"footer__2hERS",sender:"sender__KRDaE",message:"message__3-mmO",additionalInfo:"additionalInfo__3oN26",additionalTopContent:"additionalTopContent__kMmgW",date:"date__RSMw_",readingStatus:"readingStatus__37DUk",counter:"counter__3G05Q",disabled:"disabled__1Tvyr"}},286:function(e,t,n){e.exports={root:"root__1T8go",initials:"initials__2t0sa"}},287:function(e,t,n){e.exports={root:"root__1FJnV",saved:"saved__2h_io",icon:"icon__AhhTy"}},288:function(e,t,n){e.exports={root:"root__1PvBk",read:"read__3kYje",light:"light__f89-Q",secondary:"secondary__1U3d0",unread:"unread__1wE9S"}},289:function(e,t,n){e.exports={root:"root__15Cf6",light:"light__3Y4Y8",secondary:"secondary__3e1Jc"}},290:function(e,t,n){e.exports={root:"root__MKHxp",primary:"primary__Tzdso",disabled:"disabled__8SO6R"}},291:function(e,t,n){e.exports={chatListContextMenu:"chatListContextMenu__1VdMI"}},292:function(e,t,n){e.exports={chatContextMenu:"chatContextMenu__310Ul"}},293:function(e,t,n){e.exports={contextMenuWrapper:"contextMenuWrapper__3SlJe",overlay:"overlay__2bM72",contextMenu:"contextMenu__1p1Jn","left-top":"left-top__2R9p3","left-bottom":"left-bottom__3Aga0","right-top":"right-top__qESMH","right-bottom":"right-bottom__3bAln"}},294:function(e,t,n){e.exports={root:"root__QAZfE"}},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){e.exports={modal:"modal__3lslx",root:"root__2W7R0",text:"text__p6vn_",actions:"actions__1jxvl",button:"button__2vO4y"}},307:function(e,t,n){e.exports={root:"root__11xcf"}},308:function(e,t,n){e.exports={modal:"modal__PMNNR",overlay:"overlay__2BheX",content:"content__10k1-"}},309:function(e,t,n){e.exports={loader:"loader__2dAtR",small:"small__CMegY",large:"large__20KSD",primary:"primary__33g0a",path:"path__16l-y",secondary:"secondary__3a3XK",circular:"circular__251aF","loader-rotate":"loader-rotate__LonOX","loader-dash":"loader-dash__1-gab"}},310:function(e,t,n){e.exports={button:"button__1ahQ7",round:"round__1qn5y",basic:"basic__2NgFt",primary:"primary__2nZfQ",loaderComponent:"loaderComponent__3vNDw",full:"full__1SSw6",secondary:"secondary__1Q5CQ",warning:"warning__2eXUs",loader:"loader__1VT6H",is_disabled:"is_disabled__2D2kV"}},311:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(45),o=n(25),l=n(281),i=n.n(l),c=n(282),s=n.n(c),u=function(e){var t=e.children;return a.createElement("div",{className:s.a.root},t)},d=n(283),m=n.n(d),f=n(284),_=n.n(f),p=n(285),v=n.n(p),y=n(257),h=n.n(y),E=n(286),C=n.n(E),g=function(e){var t=e.data,n=e.parentClass,r=t.img,o=t.initials,l=t.color;return a.createElement("div",{className:h()(C.a.root,n),style:{backgroundImage:r?"url("+r+")":"none",backgroundColor:l||"none"}},o&&a.createElement("div",{className:C.a.initials},a.createElement("span",null,o[0]),o[1]&&a.createElement("span",null,o[1])))},b=n(7),x=n(287),N=n.n(x),w=function(e){return void 0===e&&(e="#FFFFFF"),a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"24 / basic / bookmark"},a.createElement("path",{id:"icon",fillRule:"evenodd",clipRule:"evenodd",d:"M5 22.618L12 19.118L19 22.618V4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4V22.618ZM12 16.882L7 19.382V4H17V19.382L12 16.882Z",fill:e})))},M=function(e){var t=e.type,n=e.parentClass;return a.createElement("div",{className:h()(N.a.root,N.a[t],n)},a.createElement("div",{className:N.a.icon},"saved"===t&&w()))},S=n(288),k=n.n(S),O=function(e){var t=e.status,n=e.type,r=e.parentClass,o=h()(k.a.root,k.a[n],k.a[t],r);return a.createElement("div",{className:o})},P=n(289),j=n.n(P),D=function(e){var t=e.children,n=e.type,r=void 0===n?"default":n,o=e.parentClass,l=h()(j.a.root,j.a[r],o);return a.createElement("div",{className:l},t)},T=n(290),L=n.n(T),A=function(e){var t=e.parentClass,n=e.type,r=void 0===n?"default":n,o=e.children,l=h()(L.a.root,L.a[r],t);return a.createElement("div",{className:l},o)},F=n(0),R=n.n(F),V=function(e){var t,n=R()(e);return t=n,R()().isSame(t,"days")?R()(n).format("hh:mm A"):function(e){return R()(e).isBetween(R()().subtract(7,"days"),R()())}(n)?R()(n).format("ddd"):R()(n).format("DD.MM.YY")},W=n(291),Q=n.n(W),q=n(292),H=n.n(q),J=n(28),Y=n.n(J),U=n(293),I=n.n(U),B=function(e,t){if(!e)throw new Error(t)},K=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return l},X=document.querySelector("#context-menu-root"),Z=function(e){B(!!X,'The "context-menu-root" element was not found. Please ensure your application has an element with the id "modal-root"');var t=e.children,n=e.onOutsideClick,r=e.cursorPosition,o=e.parentClass,l=a.useRef(null),i=K(a.useState(r),2),c=i[0],s=i[1],u=K(a.useState({x:"left",y:"top"}),2),d=u[0],m=u[1],f=h()(I.a.contextMenu,I.a[d.x+"-"+d.y],o);a.useEffect((function(){!function(){if(l.current){var e=c.x,t=c.y,n=window.innerWidth,a=window.innerHeight,r=l.current.offsetWidth,o=l.current.offsetHeight,i=c.x,u=c.y,f=d.x,_=d.y;n<e+r&&(i=e-r,f="right"),a<t+o&&(u=t-o,_="bottom"),i<0&&(i=0),u<0&&(u=0),s({x:i,y:u}),m({x:f,y:_})}}()}),[]);return Y.a.createPortal(a.createElement("div",{className:I.a.contextMenuWrapper},a.createElement("div",{className:I.a.overlay,onClick:function(e){n(e)},onContextMenu:function(e){return e.preventDefault(),e.stopPropagation(),n(e),!1}}),a.createElement("div",{ref:l,className:f,style:{top:c.y+"px",left:c.x+"px"}},t)),X)},z=function(e){var t=e.children,n=e.onOutsideClick,r=e.parentClass,o=e.cursorPosition,l=h()(H.a.chatContextMenu,r);return a.createElement(Z,{onOutsideClick:n,cursorPosition:o},a.createElement("div",{className:l},t))},G=n(294),$=n.n(G),ee=function(e){var t=e.children,n=e.onClick,r=e.parentClass,o=h()($.a.root,r);return a.createElement("div",{className:o,onClick:n},t)},te=n(46),ne=function(e){var t=Object(o.b)(),n=e.onClose,r=e.parentClass,l=e.cursorPosition,i=e.data,c=h()(Q.a.chatListContextMenu,r);return a.createElement(z,{onOutsideClick:function(){n()},parentClass:c,cursorPosition:l},a.createElement(ee,{onClick:function(){}},"Archive chat"),a.createElement(ee,{onClick:function(){}},"Pin to top"),a.createElement(ee,{onClick:function(){}},"Disable Notifications"),a.createElement(ee,{onClick:function(){}},"Make as unread"),a.createElement(ee,{onClick:function(){t(te.a.attemptDeleteChannel({id:i.id,name:i.name})),n()}},"Delete and leave"),a.createElement(ee,{onClick:function(){}},"Clear history"))},ae=n(295),re="transition-context-menu",oe=function(e){var t=e.children,n=e.in,r=e.timeout,o=void 0===r?150:r;return a.createElement(ae.CSSTransition,{in:n,timeout:o,classNames:re,unmountOnExit:!0},t)},le=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return l},ie=function(e){var t,n,r,o,l,i,c,s=e.data,u=s.avatar,d=s.type,m=s.name,f=s.lastMessage,_=s.selected,p=s.counter,y=s.notificationsState,E=h()(v.a.root,((t={})[v.a.channel]=d===b.e.channel,t),((n={})[v.a.group]=d===b.e.group,n),((r={})[v.a.is_active]=_,r)),C=le(a.useState({open:!1,cursorPosition:{x:0,y:0}}),2),x=C[0],N=C[1];return a.createElement(a.Fragment,null,a.createElement(oe,{in:x.open},a.createElement(ne,{data:s,onClose:function(){N({open:!1,cursorPosition:{x:0,y:0}})},cursorPosition:x.cursorPosition})),a.createElement("div",{className:E,onContextMenu:function(e){return e.preventDefault(),e.stopPropagation(),N({open:!0,cursorPosition:{x:e.pageX,y:e.pageY}}),!1}},a.createElement("div",{className:v.a.inner},a.createElement("div",{className:v.a.avatarWrap},u&&a.createElement(g,{data:u,parentClass:v.a.avatar}),!u&&d===b.e.savedMessages&&a.createElement(M,{type:"saved",parentClass:v.a.avatar})),a.createElement("div",{className:v.a.content},a.createElement("div",{className:v.a.header},m),a.createElement("div",{className:v.a.footer},(i=d,c=f.senderType,i!==b.e.channel&&(i!==b.e.single||c!==b.f.user)&&a.createElement("div",{className:v.a.sender},f.senderName,": ")),a.createElement("div",{className:v.a.message},f.shortPreviewMsg))),a.createElement("div",{className:v.a.additionalInfo},a.createElement("div",{className:v.a.additionalTopContent},f.readingStatus&&a.createElement(O,{status:f.readingStatus,type:_?"light":"secondary",parentClass:v.a.readingStatus}),a.createElement(D,{type:"light",parentClass:v.a.date},V(f.date))),p&&a.createElement(A,{type:y===b.a.disabled?"disabled":"primary",parentClass:h()(v.a.counter,v.a[y])},(void 0===l&&(l=99999),(o=p)>l?"+"+l:o.toString()))))))},ce=function(e){var t=e.list;return a.createElement("div",{className:_.a.root},t.map((function(e){return a.createElement(ie,{data:e,key:e.id})})))},se=n(30),ue=function(){var e=Object(o.c)(se.d.getUsedList);return a.createElement("div",{className:m.a.root},e&&a.createElement(ce,{list:e}))},de=n(303),me=n.n(de),fe=function(){return a.createElement("div",{className:me.a.root})},_e=n(304),pe=n.n(_e),ve=function(){return a.createElement("div",{className:pe.a.root})},ye=n(305),he=n.n(ye),Ee=n(306),Ce=n.n(Ee),ge=n(307),be=n.n(ge),xe=n(308),Ne=n.n(xe),we=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return l},Me=document.querySelector("body"),Se=document.querySelector("#modal-root"),ke=function(e){Me&&(Me.style.overflowY=e?"auto":"hidden")},Oe=function(e){B(!!Se,'The "modal-root" element was not found. Please ensure your application has an element with the id "modal-root"');var t=e.children,n=e.onClose,r=e.parentClass,o=h()(Ne.a.modal,r),l=we(a.useState(!1),2),i=l[0],c=l[1];a.useEffect((function(){return ke(!1),c(!0),function(){return ke(!0)}}),[]);return Object(J.createPortal)(i?a.createElement("div",{className:o},a.createElement("div",{className:Ne.a.overlay,onClick:function(){n()}}),a.createElement("div",{className:Ne.a.content},t)):null,Se)},Pe=function(e){var t=e.parentClass,n=e.onClose,r=e.children,o=h()(be.a.root,t);return a.createElement(Oe,{onClose:n},a.createElement("div",{className:o},r))},je=n(309),De=n.n(je),Te=a.memo((function(e){var t,n,r=e.type,o=void 0===r?"":r,l=e.size,i=void 0===l?"":l,c=h()(De.a.loader,((t={})[De.a[o]]=o,t),((n={})[De.a[i]]=i,n));return a.createElement("div",{className:c},a.createElement("svg",{className:De.a.circular,viewBox:"25 25 50 50"},a.createElement("circle",{className:De.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeMiterlimit:"10"})))})),Le=n(310),Ae=n.n(Le),Fe=n(44),Re=function(){return(Re=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Ve=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},We=a.memo((function(e){var t,n,r,o,l,i=a.useContext(Fe.a),c=e.href,s=e.target,u=void 0===s?"_self":s,d=e.htmlType,m=void 0===d?"button":d,f=e.loader,_=e.type,p=void 0===_?"":_,v=e.shape,y=void 0===v?"":v,E=e.fill,C=void 0===E?"basic":E,g=e.disabled,b=e.children,x=e.parentClass,N=Ve(e,["href","target","htmlType","loader","type","shape","fill","disabled","children","parentClass"]),w=h()(Ae.a.button,((t={})[Ae.a[p]]=p,t),((n={})[Ae.a[y]]=y,n),((r={})[Ae.a[C]]=C,r),((o={})[Ae.a.is_disabled]=g,o),((l={})[Ae.a.loader]=f,l),x,i),M=c?"a":"button",S={};return c?(S.href=c,S.target=u):S.type=m,a.createElement(M,Re({className:w},N,S),b,f&&a.createElement("div",{className:Ae.a.loaderComponent},a.createElement(Te,{size:"small"})))})),Qe=function(e){var t=e.parentClass,n=Object(o.b)(),r=Object(o.c)(te.c.getAttemptDeleteChannelPayload),l=h()(Ce.a.root,t);return r?a.createElement(Pe,{onClose:function(){n(te.a.closeModal())},parentClass:Ce.a.modal},a.createElement("div",{className:l},a.createElement("div",{className:Ce.a.text},"Are you sure you want to delete all message history and leave «",r.name,"»"),a.createElement("div",{className:Ce.a.text},"This action cannot be undone"),a.createElement("div",{className:Ce.a.actions},a.createElement(We,{onClick:function(){},type:"primary",fill:"basic",parentClass:Ce.a.button},"CANCEL"),a.createElement(We,{onClick:function(){},type:"warning",fill:"basic",parentClass:Ce.a.button},"LEAVE")))):null},qe=function(e){var t=e.parentClass,n=Object(o.c)(te.c.getModalData),r=n.open,l=n.type,i=h()(he.a.root,t);return r&&l?a.createElement("div",{className:i},function(e){switch(e){case b.c.deleteChannel:return a.createElement(Qe,null)}}(l)):null},He=function(){var e=Object(o.b)();return a.useEffect((function(){e(se.a.getUsedList(b.d.used))}),[]),a.createElement("div",{className:i.a.root},a.createElement(u,null,a.createElement(ue,null),a.createElement(fe,null),a.createElement(ve,null)),a.createElement(qe,null))};t.default=function(){return a.createElement(a.Fragment,null,a.createElement(r.Helmet,null,a.createElement("title",null,"Messenger")),a.createElement(He,null))}}}]);