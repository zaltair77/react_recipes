!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r,e){(function(t){function e(t,r){for(var e=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};function i(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}r.resolve=function(){for(var r="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var u=o>=0?arguments[o]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,n="/"===u.charAt(0))}return(n?"/":"")+(r=e(i(r.split("/"),function(t){return!!t}),!n).join("/"))||"."},r.normalize=function(t){var n=r.isAbsolute(t),o="/"===u(t,-1);return(t=e(i(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(i(t,function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){function n(t){for(var r=0;r<t.length&&""===t[r];r++);for(var e=t.length-1;e>=0&&""===t[e];e--);return r>e?[]:t.slice(r,e-r+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var o=n(t.split("/")),i=n(e.split("/")),u=Math.min(o.length,i.length),c=u,l=0;l<u;l++)if(o[l]!==i[l]){c=l;break}var s=[];for(l=c;l<o.length;l++)s.push("..");return(s=s.concat(i.slice(c))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var r=o(t),e=r[0],n=r[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},r.basename=function(t,r){var e=o(t)[2];return r&&e.substr(-1*r.length)===r&&(e=e.substr(0,e.length-r.length)),e},r.extname=function(t){return o(t)[3]};var u="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)}}).call(this,e(3))},function(t,r,e){e(2),t.exports=e(4)},function(t,r,e){"use strict";e.r(r);e(0);var n;n="hello world",console.log(n)},function(t,r){var e,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var l,s=[],f=!1,a=-1;function h(){f&&l&&(f=!1,l.length?s=l.concat(s):a=-1,s.length&&p())}function p(){if(!f){var t=c(h);f=!0;for(var r=s.length;r;){for(l=s,s=[];++a<r;)l&&l[a].run();a=-1,r=s.length}l=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function v(t,r){this.fun=t,this.array=r}function g(){}o.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];s.push(new v(t,r)),1!==s.length||f||c(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,r,e){"use strict";var n,o=e(0);(n=o)&&n.__esModule;var i;i="hello world",console.log(i)}]);