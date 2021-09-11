(()=>{"use strict";var e={879:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),r.push([e.id,'*{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto",sans-serif}body{background-color:#121212}.main{width:100%;height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#fff}.main h1{font-size:4rem;margin:.3em 0}.main h2{font-size:2.5rem;margin:.2em 0}.main h3{font-size:1.2rem;margin-top:2em}.main .clouds{font-size:2rem}.main::after{content:"";opacity:.7;max-width:100%;height:60vh;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;background-color:rgba(0,0,0,.25)}.location input{background-color:#121212;border:none;font-size:1.5rem;accent-color:#31aae3;color:#fff}.celsius input,.fahrenheit input{border:none;transform:scale(1.7);accent-color:#31aae3;margin-right:.5em;color-scheme:dark}.humidity,.feels,.wind,.units,.location{display:flex;justify-content:space-between;width:80%;margin:1em auto;border-bottom:1px solid #31aae3;color:rgba(255,255,255,.7)}button{background-color:inherit;border:none;cursor:pointer}@media screen and (min-device-width: 840px){.content{display:flex}.content .main{width:70%;height:100vh;justify-content:center;text-align:center}.content .main h1{font-size:6rem}.content .main h2{font-size:4.5rem}.content .main h3{font-size:3.2rem}.content .main .clouds{font-size:4rem}.content .main::after{content:"";max-width:100%;height:100vh;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;background-color:rgba(0,0,0,.5)}.content .extraInfo{height:100vh;display:flex;flex-direction:column;justify-content:center}.content .extraInfo form{padding-left:5rem}.content .extraInfo form .humidity,.content .extraInfo form .feels,.content .extraInfo form .wind,.content .extraInfo form .units,.content .extraInfo form .location{margin:4rem 0}.location input{width:70%}}',""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],s=o.base?u[0]+o.base:u[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var m=n(d),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==m?(t[m].references++,t[m].updater(f)):t.push({identifier:d,updater:r(f,o),references:1}),a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),u=n.n(c),s=n(216),l=n.n(s),d=n(589),m=n.n(d),f=n(879),p={};p.styleTagTransform=m(),p.setAttributes=u(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,document.querySelector(".main");const h=e=>{"fahrenheit"===e.target.id&&(()=>{const e=document.querySelector(".temperature");let t=9*Number(e.textContent.slice(0,-2))/5+32;e.textContent=`${t.toFixed(2)}°F`;const n=document.querySelector(".wind .value"),o=Number(n.textContent.slice(0,-3))/1609.34*60*60;n.textContent=`${o.toFixed(2)} mi/hr`;const r=document.querySelector(".feels .value");let i=9*Number(r.textContent.slice(0,-2))/5+32;r.textContent=`${i.toFixed(2)}°F`})(),"celsius"===e.target.id&&(()=>{const e=document.querySelector(".temperature");let t=5*(Number(e.textContent.slice(0,-2))-32)/9;e.textContent=`${t.toFixed(2)}°C`;const n=document.querySelector(".wind .value"),o=1609.34*Number(n.textContent.slice(0,-5))/60/60;n.textContent=`${o.toFixed(2)} m/s`;const r=document.querySelector(".feels .value");let i=5*(Number(r.textContent.slice(0,-2))-32)/9;r.textContent=`${i.toFixed(2)}°C`})()},y=async e=>{const t=await(async e=>await(async e=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=70070eb1a20a2232bd83f25cecb92701`,{mode:"cors"}),n=await t.json();return{location:n.name,country:n.sys.country,temperature:(n.main.temp-273.15).toFixed(2),feelsLike:(n.main.feels_like-273.15).toFixed(2),humidity:n.main.humidity,clouds:n.weather[0].description,cloudsIcon:n.weather[0].icon,windSpeed:n.wind.speed,timeZone:n.timezone}}catch(e){return"City was not found"}})(e))(e),n=await(async e=>await(async e=>{try{const t=await fetch(`https://api.unsplash.com/search/photos/?page=1&query=${e}&orientation=portrait&client_id=tr1CYsfeIQGgLaK3S7_aQj5zoKV4E7rYZ6qRRbBdk34`,{mode:"cors"});return(await t.json()).results[0].urls.raw}catch(e){return"Photo was not found"}})(e))(e);var o,r,i;((e,t,n,o,r)=>{document.querySelector(".clouds").textContent=e.charAt(0).toUpperCase()+e.slice(1),document.querySelector(".locationInfo").textContent=`${t}, ${n}`,document.querySelector(".temperature").textContent=`${o}°C`;const i=new Date,a=new Date(i.getTime()+1e3*r+60*i.getTimezoneOffset()*1e3);document.querySelector(".date").textContent=a.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"short",day:"numeric",time:"long"}),document.querySelector(".time").textContent=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric"}).format(a)})(t.clouds,t.location,t.country,t.temperature,t.timeZone),o=t.feelsLike,r=t.humidity,i=t.windSpeed,document.querySelector(".feels .value").textContent=`${o}°C`,document.querySelector(".humidity .value").textContent=`${r}%`,document.querySelector(".wind .value").textContent=`${i}m/s`,(e=>{const t=document.querySelector(".main");t.style.background=`no-repeat center/100% url('${e}&w=1600&dpr=2')`,t.style.filter="grayscale(0%)"})(n)};document.querySelector(".location button").addEventListener("click",(()=>{y((()=>{const e=document.querySelector(".location input"),t=e.value;return e.value="",t})())})),document.querySelectorAll('input[type="radio"]').forEach((e=>e.addEventListener("click",h))),y("New York")})()})();