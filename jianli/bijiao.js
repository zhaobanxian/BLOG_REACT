!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,u=[],c=n(4);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function d(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),f(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=s++;n=a||(a=d(t)),r=b.bind(null,n,u,!1),o=b.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&l(p(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(0)),i=s(n(3));n(6);var a=s(n(8));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updateState=n.updateState.bind(n),n.changeSYL=n.changeSYL.bind(n),n.gupiaoChange=n.gupiaoChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.refs.A_cost.value=10,this.refs.B_cost.value=10,this.refs.A_pl.value=3,this.refs.B_pl.value=3,this.refs.syl.value="0.5",this.shouyilv=.5,this.updateState(),this.setState({})}},{key:"changeSYL",value:function(){this.shouyilv=parseFloat(this.refs.syl.value||"0.5"),this.updateState(),this.setState({})}},{key:"updateState",value:function(){this.pl1=this.refs.A_pl.value,this.pl2=this.refs.B_pl.value,this.costA=this.refs.A_cost.value,this.costB=this.refs.B_cost.value,this.yuqiMoney=this.costA*this.shouyilv,this.yuqiCostB=this.costA*(this.pl1-1)-this.yuqiMoney,this.pl1&&this.pl2&&this.costA&&this.costB&&(this.pl1=parseFloat(this.pl1),this.pl2=parseFloat(this.pl2),this.costA=parseFloat(this.costA),this.costB=parseFloat(this.costB),this.setState({}))}},{key:"gupiaoChange",value:function(){var e=this.refs.price.value||0,t=100*parseInt(this.refs.shou.value||0),n=this.gupiaoShouXuFei(e,t);this.guPiaoMsg="购买成本"+n.guPiaoTatol+",上涨回本价格："+n.huiBenJiaGet+",手续费"+n.shouXuFei;var r=this.etfShouXuFei(e,t);this.guPiaoETFMsg="购买成本"+r.guPiaoTatol+",上涨回本价格："+r.huiBenJiaGet+",手续费"+r.shouXuFei,this.setState({})}},{key:"gupiaoShouXuFei",value:function(e,t){var n=e*t,r=.001*n,o=.00896*n*.01,i=parseInt(1*t/1e3),a=2.3*n*.01*.01,s=r+o+(i=i<1?2:2*i)+(a=a<5?10:2*a);return{guPiaoTatol:n+s,shouXuFei:s,huiBenJiaGet:(n+s)/t}}},{key:"etfShouXuFei",value:function(e,t){var n=e*t,r=2.3*n*.01*.01;r=r<5?10:2*r;return{guPiaoTatol:n+r,shouXuFei:r,huiBenJiaGet:(n+r)/t}}},{key:"render",value:function(){return React.createElement("div",{style:{width:"100%"}},React.createElement("div",{style:{width:"100%",textIndent:"2em"}},"syl",React.createElement("input",{type:"number",ref:"syl",onChange:this.changeSYL})),React.createElement("div",{style:{width:"100%"}},React.createElement("div",null,"A"),React.createElement("div",{className:"rowstow"},React.createElement("span",null,"pl:",React.createElement("input",{ref:"A_pl",type:"number",onChange:this.updateState})),React.createElement("span",null,"cost:",React.createElement("input",{ref:"A_cost",type:"number",onChange:this.updateState}))),React.createElement("div",{className:"rowsone"},React.createElement("span",null,React.createElement("p",null,"costB:",this.yuqiCostB,"，yuqipl：",(this.yuqiMoney+this.costA+this.yuqiCostB)/this.yuqiCostB)))),React.createElement("div",{style:{width:"100%",marginTop:"10px"}},React.createElement("div",null,"B"),React.createElement("div",{className:"rowstow"},React.createElement("span",null,"pl:",React.createElement("input",{ref:"B_pl",type:"number",onChange:this.updateState})),React.createElement("span",null,"cost:",React.createElement("input",{ref:"B_cost",type:"number",onChange:this.updateState})))),React.createElement("div",{style:{width:"100%",marginTop:"10px"}},"pljisuan:",React.createElement("div",{className:"tongji"},React.createElement("div",null,"backA:",this.costA*this.pl1,",sy:",this.costA*this.pl1-this.costA-this.costB),React.createElement("div",null,"backB:",this.costB*this.pl2,"，sy：",this.costB*this.pl2-this.costA-this.costB),React.createElement("div",null,"totalCost:",this.costA+this.costB))),React.createElement(a.default,null),React.createElement("div",{style:{width:"100%",textIndent:"2em",marginTop:"10px"}},React.createElement("div",null,"A股收益计算,几手？",React.createElement("input",{ref:"price",type:"number",onChange:this.gupiaoChange}),",价格：",React.createElement("input",{ref:"shou",type:"number",onChange:this.gupiaoChange})),React.createElement("div",{style:{width:"100%",marginTop:"10px"}},this.guPiaoMsg),React.createElement("div",{style:{width:"100%",marginTop:"10px"}},this.guPiaoETFMsg)))}}]),t}();window.onload=function(){i.default.render(React.createElement(u,null),document.getElementById("content"))}},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".rowstow{\r\n    width:100%;\r\n}\r\n\r\n.rowstow>span{\r\n    width:50%;\r\n    display:inline-block;\r\n    line-height:40px;\r\n    text-align:left;\r\n    text-indent:2em;\r\n    overflow: hidden;\r\n}\r\n\r\n.rowstow span>input{\r\n    width:40%;\r\n}\r\n\r\n.rowsone{\r\n    width:100%;\r\n    \r\n}\r\n\r\n.rowsone span p{\r\n    width:100%;\r\n    display:inline-block;\r\n    line-height:40px;\r\n    height:40px;\r\n    text-align:left;\r\n    text-indent:2em;\r\n    overflow: hidden;\r\n    word-break: break-all;\r\n}\r\n\r\n.log{\r\n    width:100%;\r\n    height:150px;\r\n    overflow-y:scroll;\r\n    border:1px solid #000;\r\n}\r\n\r\n.tongji{\r\n    border:1px solid #000;\r\n    margin-bottom:10px;\r\n}",""])},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(0);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(9);var ZhiNJiSuan=function(_Component){function ZhiNJiSuan(e){_classCallCheck(this,ZhiNJiSuan);var t=_possibleConstructorReturn(this,(ZhiNJiSuan.__proto__||Object.getPrototypeOf(ZhiNJiSuan)).call(this,e));return t.JiSuan=t.JiSuan.bind(t),t}return _inherits(ZhiNJiSuan,_Component),_createClass(ZhiNJiSuan,[{key:"JiSuan",value:function JiSuan(){try{var cp=this.refs.cp.value;this.resulter=eval(cp),console.log(this.resulter),this.setState({})}catch(e){console.log(e),this.resulter=""}}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("div",null,"智能计算"),React.createElement("div",null,React.createElement("input",{ref:"cp",type:"text",onBlur:this.JiSuan})),React.createElement("div",null,React.createElement("span",null,this.resulter)))}}]),ZhiNJiSuan}(_react.Component);exports.default=ZhiNJiSuan},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])}]);