"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$wuxCalendar=exports.$wuxToptips=exports.$wuxBackdrop=exports.version=exports.getCtx=void 0;var getCtx=function(t,e){var r=(1<arguments.length&&void 0!==e?e:getCurrentPages()[getCurrentPages().length-1]).selectComponent(t);if(!r)throw new Error("无法找到对应的组件，请按文档说明使用组件");return r};exports.getCtx=getCtx;var version="3.8.5";exports.version=version;var $wuxBackdrop=function(t,e){return getCtx(0<arguments.length&&void 0!==t?t:"#wux-backdrop",1<arguments.length?e:void 0)};exports.$wuxBackdrop=$wuxBackdrop;var $wuxToptips=function(t,e){return getCtx(0<arguments.length&&void 0!==t?t:"#wux-toptips",1<arguments.length?e:void 0)};exports.$wuxToptips=$wuxToptips;var $wuxCalendar=function(t,e){return getCtx(0<arguments.length&&void 0!==t?t:"#wux-calendar",1<arguments.length?e:void 0)};exports.$wuxCalendar=$wuxCalendar;