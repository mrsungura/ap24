"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8938],{79176:(n,e,r)=>{r.d(e,{F:()=>L});var t=r(64047),i=["init","start","config","beforeDestroy","provide","beforeReport","report","beforeBuild","build","beforeSend","send","beforeConfig"],o=function(){return{}};function a(n){return"object"==typeof n&&null!==n}var f=Object.prototype;function u(n){return"[object Array]"===f.toString.call(n)}function c(n){return"number"==typeof n}function s(n){return"string"==typeof n}function d(n){try{return s(n)?n:JSON.stringify(n)}catch(n){return"[FAILED_TO_STRINGIFY]:"+String(n)}}var l=0,g=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];console.error.apply(console,(0,t.__spreadArray)(["[SDK]",Date.now(),(""+l++).padStart(8," ")],(0,t.__read)(n),!1))},v=0,p=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];console.warn.apply(console,(0,t.__spreadArray)(["[SDK]",Date.now(),(""+v++).padStart(8," ")],(0,t.__read)(n),!1))},_=function(n){return function(e){for(var r=e,t=0;t<n.length&&r;t++)try{r=n[t](r)}catch(n){g(n)}return r}};function m(n){var e,r,o=n.builder,f=n.createSender,c=n.createDefaultConfig,s=n.createConfigManager,d=n.userConfigNormalizer,l=n.initConfigNormalizer,g=n.validateInitConfig,v={};i.forEach((function(n){return v[n]=[]}));var m=!1,b=!1,y=!1,h=[],C=[],S={getBuilder:function(){return o},getSender:function(){return e},getPreStartQueue:function(){return h},init:function(n){if(m)p("already inited");else{if(!(n&&a(n)&&g(n)))throw new Error("invalid InitConfig, init failed");var t=c(n);if(!t)throw new Error("defaultConfig missing");var i=l(n);if((r=s(t)).setConfig(i),r.onChange((function(){D("config")})),!(e=f(r.getConfig())))throw new Error("sender missing");m=!0,D("init",!0)}},set:function(n){m&&n&&a(n)&&(D("beforeConfig",!1,n),null==r||r.setConfig(n))},config:function(n){if(m)return n&&a(n)&&(D("beforeConfig",!1,n),null==r||r.setConfig(d(n))),null==r?void 0:r.getConfig()},provide:function(n,e){!function(n,e){if(!u(n))return!1;if(0===n.length)return!1;for(var r=0;r<n.length;){if(n[r]===e)return!0;r++}return!1}(C,n)?(S[n]=e,D("provide",!1,n)):p("cannot provide "+n+", reserved")},start:function(){var n=this;m&&(b||null==r||r.onReady((function(){b=!0,D("start",!0),h.forEach((function(e){return n.build(e)})),h=[]})))},report:function(n){if(n){var e=_(v.beforeReport)(n);if(e){var r=_(v.report)(e);r&&(b?this.build(r):h.push(r))}}},build:function(n){if(b){var e=_(v.beforeBuild)(n);if(e){var r=o.build(e);if(r){var t=_(v.build)(r);t&&this.send(t)}}}},send:function(n){if(b){var r=_(v.beforeSend)(n);r&&(e.send(r),D("send",!1,r))}},destroy:function(){y=!0,D("beforeDestroy",!0)},on:function(n,e){"init"===n&&m||"start"===n&&b||"beforeDestroy"===n&&y?e():v[n]&&v[n].push(e)},off:function(n,e){v[n]&&(v[n]=function(n,e){if(!u(n))return n;var r=n.indexOf(e);if(r>=0){var t=n.slice();return t.splice(r,1),t}return n}(v[n],e))}};return C=Object.keys(S),S;function D(n,e){void 0===e&&(e=!1);for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];v[n].forEach((function(n){try{n.apply(void 0,(0,t.__spreadArray)([],(0,t.__read)(r),!1))}catch(n){}})),e&&(v[n].length=0)}}var b=function(n){var e=function(){var n={},e={},r={set:function(t,i){return n[t]=i,e[t]=d(i),r},merge:function(i){return n=(0,t.__assign)((0,t.__assign)({},n),i),Object.keys(i).forEach((function(n){e[n]=d(i[n])})),r},delete:function(t){return delete n[t],delete e[t],r},clear:function(){return n={},e={},r},get:function(n){return e[n]},toString:function(){return(0,t.__assign)({},e)}};return r}();n.provide("context",e),n.on("report",(function(n){return n.extra||(n.extra={}),n.extra.context=e.toString(),n}))},y=function(){return Date.now()},h="custom",C=function(n){n.provide("sendEvent",(function(e){var r=function(n){if(n&&a(n)&&n.name&&s(n.name)){var e={name:n.name,type:"event"};if("metrics"in n&&a(n.metrics)){var r=n.metrics,t={};for(var i in r)c(r[i])&&(t[i]=r[i]);e.metrics=t}if("categories"in n&&a(n.categories)){var o=n.categories,f={};for(var i in o)f[i]=d(o[i]);e.categories=f}return e}}(e);r&&n.report({ev_type:h,payload:r,extra:{timestamp:y()}})})),n.provide("sendLog",(function(e){var r=function(n){if(n&&a(n)&&n.content&&s(n.content)){var e={content:d(n.content),type:"log",level:"info"};if("level"in n&&(e.level=n.level),"extra"in n&&a(n.extra)){var r=n.extra,t={},i={};for(var o in r)c(r[o])?t[o]=r[o]:i[o]=d(r[o]);e.metrics=t,e.categories=i}return e}}(e);r&&n.report({ev_type:h,payload:r,extra:{timestamp:y()}})}))},S={build:function(n){return{ev_type:n.ev_type,payload:n.payload,common:(0,t.__assign)((0,t.__assign)({},n.extra||{}),n.overrides||{})}}},D=function(n){return n},w="undefined"!=typeof window?window:{},x=function(n){return["message","name","fileName","lineNumber","columnNumber","stack","stacktrace","framesToPop"].reduce((function(e,r){return e[r]=n[r],e}),{})},E=function(n){n.provide("captureException",(function(e,r,t){n.report({ev_type:"js_error",payload:{error:x(e),extra:r,breadcrumbs:[],react:t}})})),n.provide("sendCustomPerfMetric",(function(e){n.report({ev_type:"performance",payload:(0,t.__assign)((0,t.__assign)({},e),{isCustom:!0})})})),n.provide("sendPageview",(function(e){n.report({ev_type:"pageview",payload:{pid:e,source:"user_set"}})}))},I=function(){return{bid:"",pid:"",userId:"",deviceId:"",sessionId:"",domain:"",plugins:{},release:"",env:""}},N=function(n){var e,r=n;return{getConfig:function(){return r},setConfig:function(n){return n.pid&&n.pid!==r.pid&&(n.viewId=n.pid+"_"+Date.now()),r=(0,t.__assign)((0,t.__assign)((0,t.__assign)({},r),n),{plugins:Object.assign(r.plugins,n.plugins)}),null==e||e(),r},onChange:function(n){e=n},onReady:function(n){n()}}},A=function(){return{send:o,getSize:function(){return 0},getWait:function(){return 0},setSize:o,setWait:o,flush:o,getEndpoint:function(){return""},setEndpoint:o,clear:o,getBatchData:function(){return""}}},L=function(n){var e=w.SlardarLite,r=m({validateInitConfig:function(){return!0},initConfigNormalizer:D,userConfigNormalizer:D,createSender:A,builder:S,createDefaultConfig:function(){return(0,t.__assign)((0,t.__assign)((0,t.__assign)({},{bid:"",pid:"",userId:"",deviceId:"",sessionId:"",domain:"",plugins:{},release:"",env:""}),e.config),n)},createConfigManager:N});b(r),C(r),E(r),r.init(n),r.on("beforeBuild",(function(n){var r;return(null===(r=e.sampler)||void 0===r?void 0:r.call(e,n))||n}));var i=[],o=e.onload;return e.onload=function(){for(o&&o();i.length;)e.sender(i.shift(),e)},r.on("beforeSend",(function(n){e.sender?e.sender(n,{ctx:r.context,config:r.config()}):i.push(n)})),r.start(),r};!function(n){var e={},r=e.createSender,i=void 0===r?A:r,o=e.builder,a=void 0===o?S:o,f=e.createDefaultConfig,u=void 0===f?I:f,c=w.SlardarLite||(w.SlardarLite={});if(c.client)return c.client;var s=m({validateInitConfig:function(){return!0},initConfigNormalizer:D,userConfigNormalizer:D,createSender:i,builder:a,createDefaultConfig:u,createConfigManager:N});b(s),C(s),function(n){E(n);var e=w.SlardarLite;if(e){e.config&&n.init(e.config),e.ctx=n.context,n.on("config",(function(){var r=n.config();(null==r?void 0:r.pid)&&r.pid!==e.config.pid&&setTimeout((function(){return n.sendPageview(r.pid)})),Object.assign(e.config,r)})),n.on("beforeBuild",(function(n){var r;return(null===(r=e.sampler)||void 0===r?void 0:r.call(e,n))||n}));var r,i,o=[],a=e.onload;e.onload=function(){for(a&&a();o.length;)e.sender(o.shift(),e)},n.on("beforeSend",(function(n){e.sender?e.sender(n):o.push(n)})),(r=n,i=function(n){return function(r,t){return"beforeSend"===r&&(e.bs=t),n(r,t)}},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];r.on=i.apply(void 0,(0,t.__spreadArray)([r.on],(0,t.__read)(n),!1))})(),e.sf&&(e.onCfg=function(){return n.config(e.config)}),e.manual?n.on("start",(function(){e.cached&&(e.sender?(e.manual=!1,e.cached.forEach((function(n){e.sender(n)}))):o=o.concat(e.cached),delete e.cached),e.manual=!1})):n.start(),e.client=n}}(s)}()}}]);