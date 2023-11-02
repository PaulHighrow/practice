"use strict";(self.webpackChunkagro_practice=self.webpackChunkagro_practice||[]).push([[55],{7441:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(2791)),a=n(2737),i=n(7709);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v="wistia-player-",m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,u=f(l);function l(){var e;p(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(d(e=u.call.apply(u,[this].concat(n))),"callPlayer",a.callPlayer),P(d(e),"playerID",e.props.config.playerId||"".concat(v).concat((0,a.randomString)())),P(d(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),P(d(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),P(d(e),"onSeek",(function(){var t;return(t=e.props).onSeek.apply(t,arguments)})),P(d(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),P(d(e),"onPlaybackRateChange",(function(){var t;return(t=e.props).onPlaybackRateChange.apply(t,arguments)})),P(d(e),"mute",(function(){e.callPlayer("mute")})),P(d(e),"unmute",(function(){e.callPlayer("unmute")})),e}return t=l,n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,o=n.muted,i=n.controls,u=n.onReady,l=n.config,p=n.onError;(0,a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((function(e){l.customControls&&l.customControls.forEach((function(t){return e.defineControl(t)})),window._wq=window._wq||[],window._wq.push({id:t.playerID,options:c({autoPlay:r,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:i,fullscreenButton:i,playbar:i,playbackRateControl:i,qualityControl:i,volumeControl:i,settingsControl:i,smallPlayButton:i},l.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",t.onPlay),t.player.bind("pause",t.onPause),t.player.bind("seek",t.onSeek),t.player.bind("end",t.onEnded),t.player.bind("playbackratechange",t.onPlaybackRateChange),u()}})}),p)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.url,t=e&&e.match(i.MATCH_URL_WISTIA)[1],n="wistia_embed wistia_async_".concat(t);return o.default.createElement("div",{id:this.playerID,key:t,className:n,style:{width:"100%",height:"100%"}})}}],n&&s(t.prototype,n),r&&s(t,r),l}(o.Component);t.default=m,P(m,"displayName","Wistia"),P(m,"canPlay",i.canPlay.wistia),P(m,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerWistia.192ce91a.chunk.js.map