(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(e,a,t){"use strict";t.r(a);t(133);var n=t(0),r=t.n(n),l=t(134),u=t.n(l),c=(t(81),t(145)),o=t.n(c),i=t(135),f=t.n(i),s=8,v=8,m=new Array(15).fill(1,0,15).map(function(e,a){var t=16*(a+1);return[t,t,t,255]});function p(e,a){for(var t=[],n=0;n<8;++n){for(var r=[],l=0;l<8;++l){var u=e[a+(8*n+l)];r.push(u)}t.push(r)}return t}m.unshift([255,0,0,51]),console.log("palette",m);var d=[[0,0],[8,0],[0,8],[8,8]];function g(e,a){e.forEach(function(e,t){var n=a.createImageData(s,v);!function(e,a){for(var t=0;t<v;++t)for(var n=0;n<s;++n)for(var r=4*(t*s+n),l=a[t][n],u=0;u<4;++u)e.data[r+u]=l[u]}(n,e),a.putImageData(n,d[t][0],d[t][1])})}var h=function(){return r.a.createElement("div",{className:"tilePlaceholder"},r.a.createElement(o.a,{name:"pulse"}))},w=r.a.memo(function(e){var a=e.className,t=e.cData,l=e.index;if(!t)return null;var u=Object(n.useRef)(null);Object(n.useEffect)(function(){u.current.width=16,u.current.height=16;var e=u.current.getContext("2d");g(function(e){return[p(e,128),p(e,0),p(e,192),p(e,64)]}(function(e,a){for(var t=64*(a+1),n=[],r=64*a;r<t;r+=2)for(var l=e.c1Data[r],u=e.c1Data[r+1],c=e.c2Data[r],o=e.c2Data[r+1],i=0;i<8;++i){var f=0;f|=l>>i&1,f|=(u>>i&1)<<1,f|=(c>>i&1)<<2,f|=(o>>i&1)<<3,n.push(m[f])}return n}(t,l)),e)});var c=f()(a);return r.a.createElement("canvas",{className:c,ref:u})}),E=(t(162),t(167),t(168));function D(e){var a=e.name[e.name.length-1];return!!(1&parseInt(a,10))}Object(E.setConfig)({pureSFC:!0});var A=function(e){e.className;var a=e.onLoad,t=Object(n.useState)(null),l=t[0],u=t[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:function(e){u(null);var t=e.target.files;if(2!==t.length)return u("Please choose a pair of C ROM files");var n=new FileReader;n.onload=function(e){var n=new FileReader;n.onload=function(n){var r=new Uint8Array(D(t[0])?e.target.result:n.target.result),l=new Uint8Array(D(t[0])?n.target.result:e.target.result);a({c1Data:r,c2Data:l})},n.readAsArrayBuffer(t[1])},n.readAsArrayBuffer(t[0])},multiple:!0}),l)};t(170),new Array(100).fill(1,0,100).map(function(e,a){return a+0});a.default=function(){var e=Object(n.useState)(null),a=e[0],t=e[1];return console.log("cData",a),r.a.createElement("div",null,r.a.createElement("h1",null,"A Neo Geo Sprite Tile Viewer"),r.a.createElement(A,{onLoad:t}),function(e){if(!e)return[];var a=e.c1Data.length/128/2;return console.log(a,"numTiles"),new Array(a).fill(1,0,a).map(function(e,a){return a+0})}(a).map(function(e,t){return r.a.createElement(u.a,{key:t,placeholder:r.a.createElement(h,null),once:!0,offset:140},r.a.createElement(w,{className:"tile",cData:a,index:e}))}))}},170:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a15d8749dd73ba3f8541.js.map