(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{370:function(e,n,r){"use strict";var t=r(11),i=r.n(t),o=(r(13),r(363)),a=r(378),l=r(427),c=r(428),u=r(429),s=r(430),f=r(431),p=r(418),d=r(439),v=r(420),y=r(440),b=r(432),h=r(442),m=r(433),g=r(434),w=r(382),O=r.n(w),j=r(384),S=r.n(j),k=r(383),x=r.n(k),P=r(381),C=r.n(P),N=r(380),A=r.n(N),I=r(109),B=r(58);function D(){return(D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function $(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function E(e){var n=e.to,r=e.children,t=$(e,["to","children"]);return i.a.createElement("a",D({href:n},t,{onClick:function(n){return function(e,n){e.onClick&&e.onClick(n),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(n)&&function(e){return 0===e.button}(n)&&!0!==n.defaultPrevented&&(n.preventDefault(),B.a.push(e.to))}(e,n)}}),r)}E.defaultProps={onClick:null};var z=r(415);function G(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function L(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?G(Object(r),!0).forEach((function(n){K(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function K(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var R,T=Object(z.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:K({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:L({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},appTitle:{flexGrow:1},listItemLink:{color:e.palette.text.primary,textDecoration:"none"},avatar:{width:e.spacing(4),height:e.spacing(4)}}})),_=r(417),H=r(421),J=r(422),M=r(426),U=r(377),F=r.n(U);function W(e,n,r,t){R||(R="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),1===o)n.children=t;else if(o>1){for(var a=new Array(o),l=0;l<o;l++)a[l]=arguments[l+3];n.children=a}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:R,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}var X=W(_.a,{id:"login-dialog-title"},void 0,"Login with our provider"),q=W(v.a,{variant:"contained",size:"large",color:"primary"},void 0,W(F.a,{fontSize:"large"}),"  Continue with Facebook"),Q=W(H.a,{}),V=function(e){var n=e.open,r=e.onClose;return W(J.a,{open:n,onClose:r,"aria-labelledby":"login-dialog-title"},void 0,X,W(M.a,{},void 0,W("a",{href:"/login/facebook",style:{textDecoration:"none"},onClick:r},void 0,q)),Q)};V.defaultProps={open:!1};var Y,Z=V,ee=r(379),ne=Object(ee.a)((function(e){return e.user}),(function(e){return e}));function re(e,n,r,t){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),1===o)n.children=t;else if(o>1){for(var a=new Array(o),l=0;l<o;l++)a[l]=arguments[l+3];n.children=a}if(n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});return{$$typeof:Y,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}function te(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ie(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],t=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(e){i=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return oe(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var ae=re(A.a,{}),le=re(C.a,{}),ce=re(O.a,{}),ue=re(x.a,{}),se=re(S.a,{}),fe=re(l.a,{}),pe=re(c.a,{});n.a=Object(I.b)((function(e){return{user:ne(e)}}))((function(e){var n,r,t=e.children,l=e.user,c=T(),w=Object(a.a)(),O=ie(i.a.useState(!1),2),j=O[0],S=O[1],k=ie(i.a.useState(!1),2),x=k[0],P=k[1],C=Boolean(l.id),N=[{text:"Explorer Course",icon:ae,link:"/courses"},{text:"My GPA",icon:le,link:"/"}],A=re(u.a,{position:"fixed",className:Object(o.a)(c.appBar,te({},c.appBarShift,j))},void 0,re(s.a,{},void 0,re(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){S(!0)},edge:"start",className:Object(o.a)(c.menuButton,te({},c.hide,j))},void 0,ce),re(p.a,{variant:"h6",noWrap:!0,className:c.appTitle},void 0,"GeeseHunt"),C?re(f.a,{size:"small"},void 0,re(d.a,{alt:l.displayName,src:l.avatarUrl,className:c.avatar})):re(v.a,{color:"inherit",onClick:function(){return P(!0)}},void 0,"Login"),re(Z,{open:x,onClose:function(){return P(!1)}}))),I=re(y.a,{variant:"permanent",className:Object(o.a)(c.drawer,(n={},te(n,c.drawerOpen,j),te(n,c.drawerClose,!j),n)),classes:{paper:Object(o.a)((r={},te(r,c.drawerOpen,j),te(r,c.drawerClose,!j),r))}},void 0,re("div",{className:c.toolbar},void 0,re(f.a,{onClick:function(){S(!1)}},void 0,"rtl"===w.direction?ue:se)),fe,re(b.a,{},void 0,N.map((function(e){var n=e.text,r=e.link,t=e.icon;return re(E,{to:r,className:c.listItemLink},n,re(h.a,{button:!0},void 0,re(m.a,{},void 0,t),re(g.a,{primary:n})))}))));return re("div",{className:c.root},void 0,pe,A,I,re("main",{className:c.content},void 0,re("div",{className:c.toolbar}),t))}))},414:function(e,n,r){"use strict";r.r(n);var t;r(11);function i(e,n,r,i){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=i;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}if(n&&o)for(var u in o)void 0===n[u]&&(n[u]=o[u]);else n||(n=o||{});return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}function o(e,n,r,t,i,o,a){try{var l=e[o](a),c=l.value}catch(e){return void r(e)}l.done?n(c):Promise.resolve(c).then(t,i)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function l(e){o(a,t,i,l,c,"next",e)}function c(e){o(a,t,i,l,c,"throw",e)}l(void 0)}))}}var l=i(r(370).a,{},void 0,"Content");function c(){return(c=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{title:"GeeseHunt",chunks:["root"],component:l});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(){return c.apply(this,arguments)}}}]);
//# sourceMappingURL=root.ff82e446.chunk.js.map