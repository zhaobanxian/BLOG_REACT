!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],e):"object"==typeof exports?exports.tools=e(require("React"),require("ReactDOM")):t.tools=e(t.React,t.ReactDOM)}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=18)}([function(e,n){e.exports=t},function(t,n){t.exports=e},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=s(n(0)),i=s(n(1)),o=s(n(19));function s(t){return t&&t.__esModule?t:{default:t}}var a=r.default.createElement(o.default,{data:[{linkurl:"http://www.baidu.com",url:"../images/636572286992912559.png",id:"101"},{linkurl:"",url:"../images/636726036820032174.png",id:"102"},{linkurl:"",url:"../images/636572286992912559.png",id:"103"}],autoplay:"true",timespan:"1"});window.onload=function(){i.default.render(a,document.getElementById("exp"))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(20);var a=console.log.bind(console),c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.data?(n.timespan=1,t.timespan&&(n.timespan=parseFloat(t.timespan),n.timespan<=.7&&(n.timespan=.7)),n.cindex=0,n):(a("缺少参数data"),s(n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default.Component),r(e,[{key:"handlerClick",value:function(t){t.linkurl&&(window.location=t.linkurl)}},{key:"touchstart",value:function(){var t=window.event;this.clientXBase=t.changedTouches[0].clientX,this.tostop()}},{key:"touchend",value:function(){a("touchend");var t=document.getElementsByName("slideritem");Math.abs(this.clientXChange)>this.vwidth/2&&(0==this.cindex&&t.length>1?this.clientXChange<0&&this.cindex++:this.cindex==t.length-1&&t.length>1?this.clientXChange>0&&this.cindex--:this.clientXChange<0?this.cindex++:this.cindex--);var e=this.vwidth*(0-this.cindex);t.forEach(function(t){t.style.transition="transform 0.5s",t.style.transform="translateX("+e+"PX)"}.bind(this)),setTimeout(function(){this.toplay()}.bind(this),1e3)}},{key:"touchmove",value:function(){var t=window.event;this.clientXChange=t.changedTouches[0].clientX-this.clientXBase,this.vwidth=this.refs.slidercontent.clientWidth;var e=document.getElementsByName("slideritem");Math.abs(this.clientXChange)>=this.vwidth/4&&(this.clientXChange>0&&0==this.cindex&&(this.clientXChange=this.vwidth/4),this.clientXChange<0&&this.cindex==e.length-1&&(this.clientXChange=this.vwidth/-4));var n=this.vwidth*(0-this.cindex)+this.clientXChange;e.forEach(function(t){t.style.transition="transform 0s",t.style.transform="translateX("+n+"px)"}.bind(this))}},{key:"toplay",value:function(){a("toplay"),this.intervaltag=setInterval(function(){var t=document.getElementsByName("slideritem");this.cindex==t.length-1?this.cindex=0:this.cindex++;var e=this.vwidth*(0-this.cindex);t.forEach(function(t){t.style.transition="transform 0.5s",t.style.transform="translateX("+e+"px)"}.bind(this))}.bind(this),1e3*this.timespan)}},{key:"tostop",value:function(){window.clearInterval(this.intervaltag)}},{key:"componentDidMount",value:function(){this.vwidth=this.refs.slidercontent.clientWidth,document.getElementsByName("slideritem").forEach(function(t){t.addEventListener("touchmove",this.touchmove.bind(this)),t.addEventListener("touchstart",this.touchstart.bind(this)),t.addEventListener("touchend",this.touchend.bind(this))}.bind(this)),this.props.autoplay&&this.toplay()}},{key:"getItem",value:function(){for(var t=[],e=0,n=this.props.data.length;e<n;e++){var r=this.props.data[e];r.cname="slideimg";var s={width:100/this.props.data.length+"%"};t.push(i.default.createElement("div",o({onClick:this.handlerClick.bind(this,r),ref:"slideitem"+r.id,style:s,name:"slideritem",key:r.id,className:r.cname},"onClick",this.handlerClick.bind(this,r)),i.default.createElement("img",{src:r.url})))}var a={width:100*this.props.data.length+"%"};return i.default.createElement("div",{className:"slidercontent",ref:"slidercontent"},i.default.createElement("div",{ref:"slidercontent",style:a},t))}},{key:"render",value:function(){return i.default.createElement("div",{className:"slidercontent"},this.getItem())}}]),e}();e.default=c},function(t,e,n){var r=n(21);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,'*{\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\n.slidercontent{\r\n    overflow:hidden;\r\n    width:100%;\r\n    position:relative;\r\n}\r\n.slidercontent>div::after{\r\n    content:"";\r\n    clear:both;\r\n    display:block;\r\n}\r\n\r\n.slidercontent .slideimg{\r\n    float:left;\r\n    position:relative;\r\n}\r\n\r\n.slidercontent .slideimg img{\r\n    width:100%;\r\n}\r\n\r\n.slidercontent .marginhide{\r\n    left:-100%;\r\n}',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,c=[],l=n(24);function u(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(m(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(m(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function d(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),d(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=a++;n=s||(s=p(e)),r=b.bind(null,n,c,!1),i=b.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&u(f(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){"use strict";t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});