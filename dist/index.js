(()=>{var e,t,r,n,o,a,i={},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return i[e](r,r.exports,l),r.loaded=!0,r.exports}l.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(o,a,i)=>{var s;i&&((s=[]).d=1),s&&(s.moduleId=o.id);var l,c,d,u=new Set,p=o.exports,f=new Promise(((e,t)=>{d=t,c=e}));f[t]=p,f[e]=e=>(s&&e(s),u.forEach(e),f.catch((e=>{}))),f.moduleId=o.id,o.exports=f,a((o=>{var a;l=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](r)))}));return a.r?c:i()}),(e=>(e?d(f[r]=e):c(p),n(s)))),s&&(s.d=0)},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".index.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="image-efects:",l.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.v=(e,t,r,n)=>{var o=fetch(l.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);s&&s(l)}for(t&&t(r);c<a.length;c++)o=a[c],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkimage_efects=self.webpackChunkimage_efects||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),async function(){let e=null;try{e=await l.e(235).then(l.bind(l,235))}catch(e){return void console.error(e)}console.log(e);const t=document.getElementById("upload"),r=new FileReader;r.onloadend=()=>{let n=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");console.log(t.files[0]);let o=e.grayscale(n);document.getElementById("new-img").setAttribute("src",o)},t.addEventListener("change",(()=>{r.readAsDataURL(t.files[0])}))}()})();