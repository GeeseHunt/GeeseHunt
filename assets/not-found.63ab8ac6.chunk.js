(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(e,n,r){"use strict";var t=r(11),o=r.n(t),i=(r(13),r(363)),a=r(378),l=r(427),c=r(428),u=r(429),s=r(430),f=r(431),d=r(418),p=r(439),v=r(420),y=r(440),b=r(432),h=r(442),m=r(433),g=r(434),w=r(382),O=r.n(w),S=r(384),j=r.n(S),k=r(383),P=r.n(k),x=r(381),C=r.n(x),N=r(380),A=r.n(N),I=r(109),$=r(58);function B(){return(B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function D(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E(e){var n=e.to,r=e.children,t=D(e,["to","children"]);return o.a.createElement("a",B({href:n},t,{onClick:function(n){return function(e,n){e.onClick&&e.onClick(n),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(n)&&function(e){return 0===e.button}(n)&&!0!==n.defaultPrevented&&(n.preventDefault(),$.a.push(e.to))}(e,n)}}),r)}E.defaultProps={onClick:null};var z=r(415);function L(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function G(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?L(Object(r),!0).forEach((function(n){K(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function K(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var _,F=Object(z.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:K({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:G({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},appTitle:{flexGrow:1},listItemLink:{color:e.palette.text.primary,textDecoration:"none"},avatar:{width:e.spacing(4),height:e.spacing(4)}}})),T=r(417),J=r(421),M=r(422),U=r(426),H=r(377),R=r.n(H);function W(e,n,r,t){_||(_="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),1===i)n.children=t;else if(i>1){for(var a=new Array(i),l=0;l<i;l++)a[l]=arguments[l+3];n.children=a}if(n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});return{$$typeof:_,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}var X=W(T.a,{id:"login-dialog-title"},void 0,"Login with our provider"),q=W(v.a,{variant:"contained",size:"large",color:"primary"},void 0,W(R.a,{fontSize:"large"}),"  Continue with Facebook"),Q=W(J.a,{}),V=function(e){var n=e.open,r=e.onClose;return W(M.a,{open:n,onClose:r,"aria-labelledby":"login-dialog-title"},void 0,X,W(U.a,{},void 0,W("a",{href:"/login/facebook",style:{textDecoration:"none"},onClick:r},void 0,q)),Q)};V.defaultProps={open:!1};var Y,Z=V,ee=r(379),ne=Object(ee.a)((function(e){return e.user}),(function(e){return e}));function re(e,n,r,t){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),1===i)n.children=t;else if(i>1){for(var a=new Array(i),l=0;l<i;l++)a[l]=arguments[l+3];n.children=a}if(n&&o)for(var c in o)void 0===n[c]&&(n[c]=o[c]);else n||(n=o||{});return{$$typeof:Y,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}function te(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],t=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return ie(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var ae=re(A.a,{}),le=re(C.a,{}),ce=re(O.a,{}),ue=re(P.a,{}),se=re(j.a,{}),fe=re(l.a,{}),de=re(c.a,{});n.a=Object(I.b)((function(e){return{user:ne(e)}}))((function(e){var n,r,t=e.children,l=e.user,c=F(),w=Object(a.a)(),O=oe(o.a.useState(!1),2),S=O[0],j=O[1],k=oe(o.a.useState(!1),2),P=k[0],x=k[1],C=Boolean(l.id),N=[{text:"Explorer Course",icon:ae,link:"/courses"},{text:"My GPA",icon:le,link:"/"}],A=re(u.a,{position:"fixed",className:Object(i.a)(c.appBar,te({},c.appBarShift,S))},void 0,re(s.a,{},void 0,re(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",className:Object(i.a)(c.menuButton,te({},c.hide,S))},void 0,ce),re(d.a,{variant:"h6",noWrap:!0,className:c.appTitle},void 0,"GeeseHunt"),C?re(f.a,{size:"small"},void 0,re(p.a,{alt:l.displayName,src:l.avatarUrl,className:c.avatar})):re(v.a,{color:"inherit",onClick:function(){return x(!0)}},void 0,"Login"),re(Z,{open:P,onClose:function(){return x(!1)}}))),I=re(y.a,{variant:"permanent",className:Object(i.a)(c.drawer,(n={},te(n,c.drawerOpen,S),te(n,c.drawerClose,!S),n)),classes:{paper:Object(i.a)((r={},te(r,c.drawerOpen,S),te(r,c.drawerClose,!S),r))}},void 0,re("div",{className:c.toolbar},void 0,re(f.a,{onClick:function(){j(!1)}},void 0,"rtl"===w.direction?ue:se)),fe,re(b.a,{},void 0,N.map((function(e){var n=e.text,r=e.link,t=e.icon;return re(E,{to:r,className:c.listItemLink},n,re(h.a,{button:!0},void 0,re(m.a,{},void 0,t),re(g.a,{primary:n})))}))));return re("div",{className:c.root},void 0,de,A,I,re("main",{className:c.content},void 0,re("div",{className:c.toolbar}),t))}))},441:function(e,n,r){"use strict";r.r(n);r(11);var t,o=r(370);r(13);function i(e,n,r,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}if(n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}var a,l=i("p",{},void 0,"Sorry, the page you were trying to view does not exist.");function c(e){return i("div",{},void 0,i("h1",{},void 0,e.title),l)}function u(e,n,r,t){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),1===i)n.children=t;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}if(n&&o)for(var u in o)void 0===n[u]&&(n[u]=o[u]);else n||(n=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}var s=u(o.a,{},void 0,u(c,{title:"Page Not Found"}));n.default=function(){return{chunks:["not-found"],title:"Page Not Found",component:s,status:404}}}}]);
//# sourceMappingURL=not-found.63ab8ac6.chunk.js.map