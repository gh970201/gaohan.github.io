import{c as g,a as w,E as x,b as L,d as O,e as y,f as P,g as b,h as A,i as I,r as R,j as V,k as T,o as D,l as k,m as o,w as n,n as l,p as C}from"./vendor.aa77eed0.js";const M=function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};M();const N="modulepreload",d={},S="./",s=function(_,a){return!a||a.length===0?_():Promise.all(a.map(r=>{if(r=`${S}${r}`,r in d)return;d[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":N,e||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),e)return new Promise((m,u)=>{i.addEventListener("load",m),i.addEventListener("error",u)})})).then(()=>_())},$=[{path:"/",redirect:"/one"},{path:"/one",name:"one",component:()=>s(()=>import("./one.8dd5c066.js"),["assets/one.8dd5c066.js","assets/one.261307d7.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/tool",name:"tool",component:()=>s(()=>import("./tool.7b8edcca.js"),["assets/tool.7b8edcca.js","assets/tool.67de05b6.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/list",name:"list",component:()=>s(()=>import("./list.d713881d.js"),["assets/list.d713881d.js","assets/list.903adb3a.css","assets/el-input.3f55869d.css","assets/el-button.b216fcf6.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/information",name:"information",component:()=>s(()=>import("./information.c3e831dd.js"),["assets/information.c3e831dd.js","assets/information.7ed05ab1.css","assets/el-button.b216fcf6.css","assets/el-input.3f55869d.css","assets/el-select.368132ae.css","assets/el-scrollbar.eaea39df.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/jisuan",name:"jisuan",component:()=>s(()=>import("./jisuan.e88a2a89.js"),["assets/jisuan.e88a2a89.js","assets/jisuan.eefdffb3.css","assets/el-input.3f55869d.css","assets/el-select.368132ae.css","assets/el-scrollbar.eaea39df.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/rail",name:"rail",component:()=>s(()=>import("./rail.eabb66a2.js"),["assets/rail.eabb66a2.js","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/mainview",component:()=>s(()=>import("./mainview.15902286.js"),["assets/mainview.15902286.js","assets/mainview.d964bb28.css","assets/el-scrollbar.eaea39df.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"]),redirect:"/mainview/home",children:[{path:"home",name:"home",component:()=>s(()=>import("./home.4363f58a.js"),["assets/home.4363f58a.js","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"mainbox",name:"mainbox",component:()=>s(()=>import("./mainbox.2d76e197.js"),["assets/mainbox.2d76e197.js","assets/mainbox.9b3817ad.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"another",name:"another",component:()=>s(()=>import("./another.a95eed3b.js"),["assets/another.a95eed3b.js","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])},{path:"/:pathMatch(.*)*",name:"404",component:()=>s(()=>import("./404.e61cf503.js"),["assets/404.e61cf503.js","assets/404.e4b99654.css","assets/vendor.aa77eed0.js","assets/vendor.23ccf71f.css"])}]}],j=g({history:w(),routes:$});var B=(c,_)=>{const a=c.__vccOpts||c;for(const[r,e]of _)a[r]=e;return a};const q={},H={id:"app"},W=l("\u9996\u9875"),z=l("\u6587\u6863"),F=l("\u5B9E\u7528\u5DE5\u5177"),K=l("\u77E5\u8BC6\u70B9"),G=l("pulldown"),J=l("item one"),Q=l("item two"),U=l("item three");function X(c,_){const a=x,r=L,e=O,t=y,i=P,m=b,u=A,f=I,h=R("router-view"),E=V,v=T;return D(),k("div",H,[o(v,null,{default:n(()=>[o(a),o(f,{class:"fixed w-full h-16 px-0 bg-white border-b-[1px]"},{default:n(()=>[o(u,null,{default:n(()=>[o(e,{span:6},{default:n(()=>[o(r,{class:"h-8 relative top-4 left-40",fit:"scale-down",src:"https://element-plus.org/images/element-plus-logo.svg"})]),_:1}),o(e,{span:6}),o(e,{span:12},{default:n(()=>[o(m,{class:"h-16 w-full","default-active":"/one",mode:"horizontal",router:!0},{default:n(()=>[o(t,{index:"/one"},{default:n(()=>[W]),_:1}),o(t,{index:"/1"},{default:n(()=>[z]),_:1}),o(t,{index:"/tool"},{default:n(()=>[F]),_:1}),o(t,{index:"/mainview"},{default:n(()=>[K]),_:1}),o(i,{index:"/5"},{title:n(()=>[G]),default:n(()=>[o(t,{index:"/5-1"},{default:n(()=>[J]),_:1}),o(t,{index:"/5-2"},{default:n(()=>[Q]),_:1}),o(t,{index:"/5-3"},{default:n(()=>[U]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(E,{class:"pl-40 pt-24 pb-24 pr-40 break-all"},{default:n(()=>[o(h)]),_:1})]),_:1})])}var Y=B(q,[["render",X]]);const p=C(Y);p.use(j);p.use();p.mount("#app");export{B as _};
