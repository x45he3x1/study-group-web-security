!function(){"use strict";var e,t,n,r,o,u={},f={};function a(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,loaded:!1,exports:{}};return u[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=u,a.c=f,e=[],a.O=function(t,n,r,o){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var f=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(f=!1,o<u&&(u=o));if(f){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var u={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},a.d(o,u),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return"assets/js/"+({53:"935f2afb",76:"849c2a14",85:"1f391b9e",195:"c4f5d8e4",331:"253b971c",342:"e6fa4da3",414:"393be207",514:"1be78505",592:"common",607:"88b5a7a2",608:"9e4087bc",636:"49d3f93a",646:"6b53e782",671:"0e384e19",711:"c80b9764",918:"17896441",972:"5754a4b1"}[e]||e)+"."+{53:"cc0d7550",75:"2b453854",76:"d743a376",85:"9c769da8",195:"150cd410",331:"68732beb",342:"3d8755a8",414:"831b4c77",514:"10399f5a",592:"80781397",607:"9ace3548",608:"9d9a4240",636:"3dd88d22",646:"2da35626",671:"bf37f84c",707:"d2926c11",711:"05583457",814:"4a7e3fab",918:"ab87b4ec",972:"2d44a91a"}[e]+".js"},a.miniCssF=function(e){return"assets/css/styles.f4e51aac.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="null-sg-web:",a.l=function(e,t,n,u){if(r[e])r[e].push(t);else{var f,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){f=s;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",o+n),f.src=e),r[e]=[t];var d=function(t,n){f.onerror=f.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),i&&document.head.appendChild(f)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/study-group-web-security/",a.gca=function(e){return e={17896441:"918","935f2afb":"53","849c2a14":"76","1f391b9e":"85",c4f5d8e4:"195","253b971c":"331",e6fa4da3:"342","393be207":"414","1be78505":"514",common:"592","88b5a7a2":"607","9e4087bc":"608","49d3f93a":"636","6b53e782":"646","0e384e19":"671",c80b9764:"711","5754a4b1":"972"}[e]||e,a.p+a.u(e)},function(){var e={303:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var u=a.p+a.u(t),f=new Error;a.l(u,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",f.name="ChunkLoadError",f.type=o,f.request=u,r[1](f)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],f=n[1],i=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(r in f)a.o(f,r)&&(a.m[r]=f[r]);if(i)var l=i(a)}for(t&&t(n);c<u.length;c++)o=u[c],a.o(e,o)&&e[o]&&e[o][0](),e[u[c]]=0;return a.O(l)},n=self.webpackChunknull_sg_web=self.webpackChunknull_sg_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();