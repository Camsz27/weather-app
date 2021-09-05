(()=>{"use strict";var e,t,n,r,o,a,i,c,s,u,l,d,f,p,h={879:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(645),o=n.n(r),a=n(667),i=n.n(a),c=new URL(n(163),n.b),s=o()((function(e){return e[1]})),u=i()(c);s.push([e.id,'*{box-sizing:border-box;padding:0;margin:0;color:#fff}body{background-color:#121212}.main{width:100%;height:60vh;display:flex;flex-direction:column;align-items:center}.main h1{font-size:6rem;margin:.3em}.main h2{font-size:2.5rem;margin:.2em}.main h3{font-size:1.5rem}.main::after{content:"";background-image:url('+u+");opacity:.7;width:100%;height:60vh;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1}.location input{background-color:#121212;border:none;font-size:1rem;accent-color:#31aae3}.celsius input,.fahrenheit input{transform:scale(2);accent-color:#31aae3}.humidity,.feels,.wind,.units,.location{display:flex;justify-content:space-between;width:80%;margin:1em auto;border-bottom:1px solid #31aae3}",""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,r),references:1}),i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},163:(e,t,n)=>{e.exports=n.p+"5ff69472e92b8c33771c.jpeg"}},m={};function g(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return h[e](n,n.exports,g),n.exports}g.m=h,g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var t=g.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,e=g(379),t=g.n(e),n=g(795),r=g.n(n),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),u=g.n(s),l=g(589),d=g.n(l),f=g(879),(p={}).styleTagTransform=d(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=u(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,async function(e){let t=await(async e=>{try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bogota&APPID=70070eb1a20a2232bd83f25cecb92701",{mode:"cors"}),t=await e.json();return{location:t.name,country:t.sys.country,temperature:t.main.temp,feelsLike:t.main.feels_like,humidity:t.main.humidity,clouds:t.weather[0].description,cloudsIcon:t.weather[0].icon,windSpeed:t.wind.speed}}catch(e){return"City was not found"}})();console.log(t)}(),async function(e){let t=await(async e=>{try{const e=await fetch("https://api.unsplash.com/search/photos/?page=1&query=Bogota&client_id=tr1CYsfeIQGgLaK3S7_aQj5zoKV4E7rYZ6qRRbBdk34",{mode:"cors"});return(await e.json()).results[0].urls.raw}catch(e){return"City was not found"}})();console.log(t)}()})();