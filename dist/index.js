!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("redux-actions"),require("immer"));else if("function"==typeof define&&define.amd)define(["redux-actions","immer"],t);else{var n="object"==typeof exports?t(require("redux-actions"),require("immer")):t(e["redux-actions"],e.immer);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"handleActions",(function(){return i})),n.d(t,"createAsyncAction",(function(){return u})),n.d(t,"getAsyncActions",(function(){return f})),n.d(t,"createAsyncActionsReducers",(function(){return s})),n.d(t,"bindActionCreators",(function(){return a}));var r=n(1),o=n.n(r),c=n(0);const i=(e,t)=>Object(c.handleActions)(Object.keys(e).reduce((t,n)=>(t[n]=o()(e[n]),t),{}),t),u=e=>({requested:Object(c.createAction)(`${e}_REQUESTED`),succeeded:Object(c.createAction)(`${e}_SUCCEEDED`),failed:Object(c.createAction)(`${e}_FAILED`),isAsync:!0}),f=e=>{const t={};for(const n in e)e[n].isAsync&&(t[n]=e[n]);return t},s=e=>{const t={};for(const n of Object.keys(e))t[e[n].requested]=function(e){e[n]=e[n]||{},e[n].requesting=!0,e[n].error=null,e[n].success=!1},t[e[n].succeeded]=function(e){e[n].requesting=!1,e[n].success=!0},t[e[n].failed]=function(e,t){e[n].requesting=!1,e[n].error=t.payload};return i(t,{})};function d(e,t){return function(){return t(e.apply(this,arguments))}}function a(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error(`bindActionCreators expected an object or a function, instead received ${null===e?"null":typeof e}. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);const n=Object.keys(e),r={};for(const o of n){const n=e[o];"function"==typeof n?r[o]=d(n,t):"object"==typeof n&&(r[o]=a(n,t))}return r}}])}));