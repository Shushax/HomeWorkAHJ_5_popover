!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n=document.getElementsByClassName("btn")[0],r=document.getElementById("toggle");n.onclick=function(){if(document.getElementById("title")){var e=document.getElementById("title"),t=document.getElementById("text");e.remove(),t.remove()}else{var n=document.createElement("h1"),o=document.createElement("p");n.id="title",o.id="text",n.className="popover",o.className="popover",n.textContent="Popover title",o.textContent="And here is some amazing content. It is very engaging. Right?",r.insertAdjacentElement("afterbegin",o),r.insertAdjacentElement("afterbegin",n),r.style.position="absolute",r.style.left="41.5%",r.style.top="19%"}}},function(e,t,n){"use strict";n.r(t);n(0)}]);
//# sourceMappingURL=app.bundle.js.map