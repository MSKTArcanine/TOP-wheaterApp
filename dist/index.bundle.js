(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"* {\n  box-sizing: border-box;\n  border: 1px solid black;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  box-sizing: inherit;\n}\n:root {\n  font-size: 10px;\n  font-family: sans-serif;\n}\nbody {\n  margin: 0;\n  padding: 10px;\n  height: 100vh;\n  overflow: hidden;\n}\n#weatherWidget {\n  width: 500px;\n  height: 300px;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 10px;\n  gap: 10px;\n}\n#widgetMain {\n  height: 200px;\n}\n#widgetInput {\n  padding: 10px;\n  height: 70px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\nlabel {\n  height: 100%;\n  font-size: large;\n}\ninput {\n  height: 100%;\n  font-size: large;\n  text-align: center;\n}\nbutton {\n  height: 50px;\n  flex: 1;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,OAAO;AACT",sourcesContent:["* {\n  box-sizing: border-box;\n  border: 1px solid black;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  box-sizing: inherit;\n}\n:root {\n  font-size: 10px;\n  font-family: sans-serif;\n}\nbody {\n  margin: 0;\n  padding: 10px;\n  height: 100vh;\n  overflow: hidden;\n}\n#weatherWidget {\n  width: 500px;\n  height: 300px;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 10px;\n  gap: 10px;\n}\n#widgetMain {\n  height: 200px;\n}\n#widgetInput {\n  padding: 10px;\n  height: 70px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\nlabel {\n  height: 100%;\n  font-size: large;\n}\ninput {\n  height: 100%;\n  font-size: large;\n  text-align: center;\n}\nbutton {\n  height: 50px;\n  flex: 1;\n}\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],p=o[c]||0,u="".concat(c," ").concat(p);o[c]=p+1;var l=t(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var f=a(d,r);r.byIndex=A,e.splice(A,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var A=t(o[i]);e[A].references--}for(var s=r(n,a),c=0;c<o.length;c++){var p=t(o[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),A=t(659),s=t.n(A),c=t(56),p=t.n(c),u=t(540),l=t.n(u),d=t(113),f=t.n(d),g=t(208),h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),a()(g.A,h),g.A&&g.A.locals&&g.A.locals})();
//# sourceMappingURL=index.bundle.js.map