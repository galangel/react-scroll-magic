const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Scroll.stories-Cc7kwdPx.js","assets/index-BwDkhjyp.js","assets/_commonjsHelpers-BosuxZz1.js","assets/entry-preview-BefljO2W.js","assets/react-18-Bd4NYS4p.js","assets/entry-preview-docs-ClT6ZbrP.js","assets/_getPrototype-C0MsqmOH.js","assets/index-DrFu-skq.js","assets/preview-BJPLiuSt.js","assets/index-D-8MO0q_.js","assets/preview-BEBQg86I.js","assets/preview-BcxrGG1y.js","assets/preview-BAz7FMXc.js","assets/preview-B4ivyPbD.js","assets/preview-BCq3e-1s.js","assets/preview-Bs768Ytb.css"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p="modulepreload",R=function(s){return"/react-scroll-magic/"+s},E={},o=function(c,l,d){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),_=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(l.map(n=>{if(n=R(n),n in E)return;E[n]=!0;const O=n.endsWith(".css"),a=O?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=O?"stylesheet":p,O||(i.as="script"),i.crossOrigin="",i.href=n,_&&i.setAttribute("nonce",_),document.head.appendChild(i),O)return new Promise((m,f)=>{i.addEventListener("load",m),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(t){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=t,window.dispatchEvent(_),!_.defaultPrevented)throw t}return e.then(t=>{for(const _ of t||[])_.status==="rejected"&&r(_.reason);return c().catch(r)})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,u=P({page:"preview"});w.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const T={"./src/components/Scroll/Scroll.stories.tsx":async()=>o(()=>import("./Scroll.stories-Cc7kwdPx.js"),__vite__mapDeps([0,1,2]))};async function S(s){return T[s]()}const{composeConfigs:L,PreviewWeb:I,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const s=await Promise.all([o(()=>import("./entry-preview-BefljO2W.js"),__vite__mapDeps([3,1,2,4])),o(()=>import("./entry-preview-docs-ClT6ZbrP.js"),__vite__mapDeps([5,6,2,7,1])),o(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([8,9])),o(()=>import("./preview-DOeW1oND.js"),[]),o(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([10,7])),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([11,7])),o(()=>import("./preview-Db4Idchh.js"),[]),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([12,7])),o(()=>import("./preview-Cv3rAi2i.js"),[]),o(()=>import("./preview-B4ivyPbD.js"),__vite__mapDeps([13,2])),o(()=>import("./preview-BCq3e-1s.js"),__vite__mapDeps([14,15]))]);return L(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new A({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:S,getProjectAnnotations:v});export{o as _};
