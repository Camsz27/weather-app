(()=>{"use strict";var e,t,n,r,o,i,a,s,c,l,u,d,f,p,h={879:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"*{box-sizing:border-box;padding:0;margin:0}body{background-color:#121212}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,r),references:1}),a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function v(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return h[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),i=v.n(o),a=v(565),s=v.n(a),c=v(216),l=v.n(c),u=v(589),d=v.n(u),f=v(879),(p={}).styleTagTransform=d(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,async function(){const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=New York&APPID=70070eb1a20a2232bd83f25cecb92701",{mode:"cors"});console.log(e);const t=await e.json();console.log(t);let n=t.name;console.log(`The city is ${n}`);let r=t.sys.country;console.log(`The country is ${r}`);let o=t.main.temp;console.log(`The temperature is ${o}`);let i=t.main.feels_like;console.log(`It feels like it is ${i}`);let a=t.main.humidity;console.log(`The humidity is ${a}`);let s=t.weather[0].description;console.log(`The clouds is ${s}`);let c=t.weather[0].icon;console.log(`The clouds icon url is http://openweathermap.org/img/wn/${c}@2x.png`);let l=t.wind.speed;return console.log(`The wind speed is ${l}`),{location:n,country:r,temperature:o,feelsLike:i,humidity:a,clouds:s,cloudsIcon:c}}()("New York")})();