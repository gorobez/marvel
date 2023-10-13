/*! For license information please see 772.e71415f7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[772],{3957:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",o=r.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=r(184),i=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:n,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:o,alt:"Avengers logo"})]})}},9613:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r.p+"static/media/error.42292aa12b6bc303ce99.gif",o=r(184),a=function(){return(0,o.jsx)("img",{style:{display:"inline-block",width:"250",height:"250px",margin:"0 auto"},src:n,alt:"Error"})}},6501:function(t,e,r){r.r(e);var n=r(885),o=r(7689),a=r(2791),i=r(4304),c=r(3957),u=r(2523),s=r(184);e.default=function(t){var e=t.Component,r=t.dataType,l=(0,o.UO)().id,f=(0,a.useState)(null),h=(0,n.Z)(f,2),p=h[0],d=h[1],v=(0,i.Z)(),m=v.getComic,g=v.getCharacter,y=v.clearError,w=v.process,x=v.setProcess;(0,a.useEffect)((function(){b()}),[l]);var b=function(){switch(y(),r){case"comic":m(l).then(k).then((function(){return x("confirmed")}));break;case"character":g(l).then(k).then((function(){return x("confirmed")}));break;default:return}},k=function(t){d(t)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{}),(0,u.Z)(w,e,p)]})}},4304:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(4165),o=r(5861),a=r(885),i=r(2791),c=function(){var t=function(){var t=(0,i.useState)("waiting"),e=(0,a.Z)(t,2),r=e[0],c=e[1],u=(0,i.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,a,i,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},c("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:a});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,t.abrupt("return",u);case 16:throw t.prev=16,t.t0=t.catch(4),c("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:u,clearError:(0,i.useCallback)((function(){c("loading")}),[]),process:r,setProcess:c}}(),e=t.request,r=t.clearError,c=t.process,u=t.setProcess,s="https://gateway.marvel.com:443/v1/public/",l="apikey=35f739fa5a14330027377d5d09166596",f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.total);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",g(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(y));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",y(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},y=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{clearError:r,process:c,setProcess:u,getAllCharacters:f,getCharacterByName:p,getCharacter:d,getAllComics:v,getComic:m,getTotalCharactersCount:h}}},2523:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(3394),o=r(9613),a=r(184),i=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,a.jsxs)("div",{className:"skeleton",children:[(0,a.jsxs)("div",{className:"pulse skeleton__header",children:[(0,a.jsx)("div",{className:"pulse skeleton__circle"}),(0,a.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"})]})]})},c=function(t,e,r){switch(t){case"waiting":return(0,a.jsx)(i,{});case"loading":return(0,a.jsx)(n.Z,{});case"confirmed":return(0,a.jsx)(e,{data:r});case"error":return(0,a.jsx)(o.Z,{});default:throw new Error("Unexpected process state")}}},5861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new L(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var g={};l(g,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(N([])));w&&w!==e&&r.call(w,c)&&(g=w);var x=m.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function o(a,i,c,u){var s=h(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=Z(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function Z(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,a(x,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(k.prototype),l(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=772.e71415f7.chunk.js.map