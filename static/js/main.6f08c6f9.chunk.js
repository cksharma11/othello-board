(window.webpackJsonpothello=window.webpackJsonpothello||[]).push([[0],{11:function(r,e,t){},12:function(r,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),c=t(5),i=t.n(c),u=(t(11),t(2)),a=t(3),f=function(r){var e=r.color;return o.a.createElement("div",{className:"coin ".concat(e)})},l=t(1);function s(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}var b=function(r){return!r.isPlaced},p=function(r,e){return r.isPlaced&&r.color!==e},O=function(r,e){return r.color===e},h=function(r,e,t){for(var n=[],o=e-function(r){var e=r-8*Math.floor(r/8);return e=0===e?8:e}(e)-1,c=e-1;c>o&&c>0;c--){if(b(r[c]))return[];if(p(r[c],t)&&n.push(c),O(r[c],t))return n}return[]},j=function(r,e){var t=e.color,n=e.position,o=[].concat(Object(l.a)(function(r,e,t){for(var n=8*Math.ceil(e/8)-e,o=[],c=e+1;c<=e+n;c++){if(b(r[c]))return[];if(p(r[c],t)&&o.push(c),O(r[c],t))return o}return[]}(r,n,t)),Object(l.a)(h(r,n,t)),Object(l.a)(function(r,e,t){if(0===Math.round(e/8))return[];for(var n=[],o=e-8;o>0;o-=8){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t)),Object(l.a)(function(r,e,t){if(0===8-Math.round(e/8))return[];for(var n=[],o=e+8;o<=64;o+=8){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t)),Object(l.a)(function(r,e,t){if(0===Math.round(e/8)-1)return[];for(var n=[],o=e-9;o>0;o-=9){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t)),Object(l.a)(function(r,e,t){if(0===Math.floor(e/8))return[];for(var n=[],o=e-7;o>0;o-=7){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t)),Object(l.a)(function(r,e,t){if(0===8-Math.round(e/8))return[];for(var n=[],o=e+7;o<=64;o+=7){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t)),Object(l.a)(function(r,e,t){if(0===8-Math.round(e/8))return[];for(var n=[],o=e+9;o<=64;o+=9){if(b(r[o]))return[];if(p(r[o],t)&&n.push(o),O(r[o],t))return n}return[]}(r,n,t))),c=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(t,!0).forEach((function(e){Object(u.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},r);return o.forEach((function(r){c[r].color="black"===t?"black":"white"})),c},d=["white","black"];function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function y(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(t,!0).forEach((function(e){Object(u.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var w=function(){var r=Object(n.useState)(function(){var r={};return new Array(64).fill(1).forEach((function(e,t){r[t+1]={isPlaced:!1,color:null,position:t+1}})),r[28].isPlaced=!0,r[28].color="white",r[29].isPlaced=!0,r[29].color="black",r[36].isPlaced=!0,r[36].color="black",r[37].isPlaced=!0,r[37].color="white",r}()),e=Object(a.a)(r,2),t=e[0],c=e[1],i=Object(n.useState)(0),u=Object(a.a)(i,2),l=u[0],s=u[1],b=function(r,e){if(!t[r].isPlaced){var n=y({},t);n[r]=y({},n[r],{isPlaced:!0,color:e}),c(n),j(n,n[r]),s(1-l)}};return o.a.createElement("div",{className:"board"},new Array(8).fill(0).map((function(r,e){return o.a.createElement("div",{className:"row"},(n=e,new Array(8).fill(0).map((function(r,e){var c=function(r,e){return 8*r+e+1}(n,e);return o.a.createElement("div",{onClick:b.bind(null,c,d[l]),id:c,key:c,className:"box"},t[c].isPlaced&&o.a.createElement(f,{color:t[c].color}))}))));var n})))};i.a.render(o.a.createElement(w,null),document.getElementById("root"))},6:function(r,e,t){r.exports=t(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.6f08c6f9.chunk.js.map