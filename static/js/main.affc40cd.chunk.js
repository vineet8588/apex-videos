(this["webpackJsonpapex-videos"]=this["webpackJsonpapex-videos"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var c=n(144),o=n(1),r=n(35),i=n.n(r),s=n(146),a=n(135),l=n(56),j={global:function(e){return{body:{fontFamily:"body",color:Object(l.a)("#1A202C","#dee3ea")(e),bg:Object(l.a)("white","#0b0e11")(e),lineHeight:"base"}}}},d=Object(a.a)({config:{initialColorMode:"dark"},colors:{transparent:"transparent",accent:"#fd4d4d",bg_dark:"#151a21",bg_light:"#F7FAFC"},styles:j,components:{Button:{variants:{new:function(e){return{color:"#fff",bg:"#fd4d4d",_hover:{bg:"#e2041e"}}}}}}}),b=n(139),u=n(138),O=n(150),h=n(140),x=n.p+"static/media/logo.fb65eced.svg",f=n(77),g=n(113),p=n(136),m=n(39),v=n(3),y=function(e){var t=Object(g.b)().toggleColorMode,n=Object(g.c)("dark","light"),c=Object(g.c)(m.b,m.c);return Object(v.jsx)(p.a,Object(f.a)({_focus:{outline:"none"},size:"md",fontSize:"lg",variant:"ghost",color:"current",onClick:t,icon:Object(v.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},C=function(e){return Object(v.jsxs)(u.a,{justify:["center","center","space-between"],children:[Object(v.jsx)(b.a,{minW:"45px",display:["none","none","block"]}),Object(v.jsx)(O.a,{src:x}),Object(v.jsx)(h.a,{display:["none","none","flex"],children:Object(v.jsx)(y,{mr:"5px"})})]})},w=n(8),k=n(5),S=n(148),_=n(147),F=n(84),M=n(143),B=n(149),D=n(142),E=n(145),I=n(141),A=n(81),J=n(78),P=n.n(J),T=function(e){return Object(v.jsx)(P.a,{width:"100%",url:e.url+"/DASHPlaylist.mpd",controls:!0})},W=function(e){var t,n,c,o;return Object(v.jsxs)(E.a,{isCentered:!0,onClose:e.onClose,isOpen:e.isOpen,motionPreset:"slideInBottom",size:"3xl",children:[Object(v.jsx)(E.e,{}),Object(v.jsxs)(E.c,{children:[Object(v.jsxs)(E.d,{children:[Object(v.jsxs)(F.a,{_focus:{outline:"none"},color:"accent",onClick:e.onClose,variant:"link",children:[Object(v.jsx)(A.a,{})," Back"]})," ",Object(v.jsx)("br",{}),null===(t=e.data)||void 0===t?void 0:t.title]}),Object(v.jsxs)(E.b,{children:[Object(v.jsx)(T,{url:null===(n=e.data)||void 0===n?void 0:n.url}),Object(v.jsxs)(u.a,{mt:4,direction:["column","row"],justifyContent:"space-between",children:[Object(v.jsxs)(b.a,{children:["Video uploaded by respected user : u/",null===(c=e.data)||void 0===c?void 0:c.author," ",Object(v.jsx)("br",{}),"On the subreddit ",Object(v.jsx)(I.a,{color:"accent",href:"https://www.reddit.com/r/apexlegends/",isExternal:!0,children:"r/apexlegends"}),"."]}),Object(v.jsx)(u.a,{m:[1,2],justifyContent:"center",children:Object(v.jsx)(I.a,{style:{textDecoration:"none"},textDecor:"none",href:null===(o=e.data)||void 0===o?void 0:o.url,isExternal:!0,children:Object(v.jsxs)(F.a,{p:[1,2,3],variant:"new",_focus:{outline:"none"},children:[" ",Object(v.jsx)(D.a,{fontSize:["10px","14px"],mr:[1,2],children:"GO TO POST "})," ",Object(v.jsx)(m.a,{})," "]})})})]})]})]})]})},z=function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+String(e.getMonth()+1):String(e.getMonth()+1))+"-"+e.getDate(),n=Object(o.useState)(),c=Object(k.a)(n,2),r=c[0],i=c[1],s=Object(o.useState)(),a=Object(k.a)(s,2),l=a[0],j=a[1],d=Object(o.useState)(t),h=Object(k.a)(d,2),x=h[0],f=h[1];Object(o.useEffect)((function(){fetch("https://vineet8588.pythonanywhere.com/allvideos").then((function(e){return e.json()})).then((function(e){e.reverse();var t=[];e.forEach((function(e){t[t.length-1]&&Object.keys(t[t.length-1])[0]===e.datetime.slice(0,16)?t[t.length-1][e.datetime.slice(0,16)].push(e):t.push(Object(w.a)({},e.datetime.slice(0,16),[e]))})),i(t)})).catch((function(e){console.log(e)}))}),[]);var p=Object(g.c)("bg_light","bg_dark"),m=Object(g.c)("none","brightness(0.5) invert(1)"),y=Object(g.c)("gray","accent"),C=Object(S.a)(),E=C.isOpen,I=C.onOpen,A=C.onClose;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.a,{mt:7,mb:1,justifyContent:"center",children:[Object(v.jsx)(_.a,{borderWidth:2,_focus:{borderColor:y},_hover:{borderColor:y},borderColor:y,color:"black",filter:m,maxW:"220px",value:x,onChange:function(e){f(e.target.value)},type:"date",max:t}),Object(v.jsx)(F.a,{onClick:function(){var e;x&&(null===(e=document.getElementById(function(e){var t=e.slice(5,7),n=e.slice(-2),c=e.slice(0,4);return n+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(t)-1].slice(0,3)+" "+c}(x)))||void 0===e||e.scrollIntoView({behavior:"smooth"}))},ml:2,variant:"new",_focus:{outline:"none"},children:"Go"})]}),Object(v.jsx)(W,{data:l,isOpen:E,onClose:A}),null===r||void 0===r?void 0:r.map((function(e){return Object(v.jsxs)(b.a,{id:Object.keys(e)[0].slice(5),py:"4",px:"45px",children:[Object(v.jsxs)(M.a,{mt:2,mb:3,isTruncated:!0,children:[" ",Object.keys(e)[0]," "]}),Object(v.jsx)(B.a,{columns:[1,2,3,4],spacing:10,children:e[Object.keys(e)[0]].map((function(e){return Object(v.jsxs)(b.a,{cursor:"pointer",_hover:{transform:"scale(1.1)",transition:"all .2s ease-in-out;"},onClick:function(){I(),j(e)},rounded:"md",boxShadow:"md",overflow:"hidden",bg:p,children:[Object(v.jsx)(O.a,{src:"/apex-videos/thumbnail.jpg"}),Object(v.jsx)(b.a,{p:4,children:Object(v.jsx)(D.a,{noOfLines:[1,2],children:e.title})})]},e.id)}))})]},Object.keys(e)[0])}))]})},L=function(e){return Object(v.jsxs)(b.a,{justifyContent:"center",children:[Object(v.jsx)(C,{}),Object(v.jsx)(z,{})]})},G=function(){return Object(v.jsx)(s.a,{theme:d,children:Object(v.jsx)(L,{})})},H=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(v.jsxs)(o.StrictMode,{children:[Object(v.jsx)(c.a,{initialColorMode:d.config.initialColorMode}),Object(v.jsx)(G,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()}},[[111,14,15]]]);
//# sourceMappingURL=main.affc40cd.chunk.js.map