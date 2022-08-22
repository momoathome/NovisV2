import { v as vue_cjs_prod, d as defineStore, b as __nuxt_component_0$3, _ as _export_sfc, c as __nuxt_component_1 } from './server.mjs';
import { s as serverRenderer } from './renderer.mjs';
import 'unenv/runtime/mock/proxy';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';
import 'stream';

const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : vue_cjs_prod.unref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = vue_cjs_prod.ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (vue_cjs_prod.getCurrentScope()) {
    vue_cjs_prod.onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnBeforeMount(fn, sync = true) {
  if (vue_cjs_prod.getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    vue_cjs_prod.nextTick(fn);
}
function tryOnMounted(fn, sync = true) {
  if (vue_cjs_prod.getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    vue_cjs_prod.nextTick(fn);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = vue_cjs_prod.isRef(initialValue);
  const _value = vue_cjs_prod.ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return vue_cjs_prod.watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = vue_cjs_prod.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  const shouldListen = vue_cjs_prod.ref(true);
  let fallback;
  const listener = (event) => {
    window2.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window2, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window2.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = vue_cjs_prod.ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && "undefined".matchMedia === "function");
  let mediaQuery;
  const matches = vue_cjs_prod.ref(false);
  const update = () => {
    if (!isSupported.value)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? vue_cjs_prod.shallowRef : vue_cjs_prod.ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (isFunction(mergeDefaults))
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return __spreadValues$j(__spreadValues$j({}, rawInit), value);
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var __defProp$i = Object.defineProperty;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$i({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window: window2 });
  const preferredMode = vue_cjs_prod.computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? vue_cjs_prod.ref(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = vue_cjs_prod.computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window2 == null ? void 0 : window2.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector, attribute, (_a = modes[resolvedMode]) != null ? _a : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  vue_cjs_prod.watch(state, onChanged, { flush: "post", immediate: true });
  if (emitAuto)
    vue_cjs_prod.watch(preferredMode, () => onChanged(state.value), { flush: "post" });
  tryOnMounted(() => onChanged(state.value));
  return state;
}
var __defProp$h = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$h({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window: window2 });
  const isDark = vue_cjs_prod.computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const _sfc_main$6 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = vue_cjs_prod.ref(false);
    const isDDMDown = vue_cjs_prod.ref(false);
    const target = vue_cjs_prod.ref();
    onClickOutside(target, (e) => {
      if (isDDMDown.value === true) {
        isDDMDown.value = false;
      } else
        return;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)} data-v-4f9c7530><nav class="${serverRenderer.exports.ssrRenderClass([[isActive.value ? "left-0" : ""], "fixed bg-base/85 left--100% top-28 flex-col w-full h-screen py-2 px-6 z-100 transition-left flex md:w-30% md:h-full lg:static lg:bg-transparent lg:flex-row lg:w-auto lg:h-auto lg:p-block-0"])}" data-v-4f9c7530>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-item-link"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` News `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" News ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/downloads",
        class: "nav-item-link"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Downloads `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Downloads ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/rankings",
        class: "nav-item-link"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rankings `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Rankings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="nav-item-link relative cursor-pointer" data-v-4f9c7530><div class="flex" data-v-4f9c7530><span data-v-4f9c7530>Informations</span><div i-ph-caret-down-fill class="${serverRenderer.exports.ssrRenderClass([[isDDMDown.value ? "rotate-180" : ""], "ms-1 align-middle transition-transform transition-duration-300"])}" data-v-4f9c7530></div></div><div class="${serverRenderer.exports.ssrRenderClass([[isDDMDown.value ? "opacity-100 " : "opacity-0"], "transition transition-duration-300 lg:origin-top-right lg:absolute lg:top-74px lg:right-16px lg:w-40 lg:bg-base/85 lg:z-20 lg:rounded-b-md lg:shadow-md"])}" data-v-4f9c7530><div class="${serverRenderer.exports.ssrRenderClass([[isDDMDown.value ? "block" : "hidden"], "py-2"])}" data-v-4f9c7530>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "dropDown-item"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Features `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Features ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/guides",
        class: "dropDown-item"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Guides `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Guides ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "dropDown-item"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" FAQ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/rules",
        class: "dropDown-item"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Rules `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" Rules ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav><div class="mobil-button block lg:hidden px-3 cursor-pointer" data-v-4f9c7530><span class="${serverRenderer.exports.ssrRenderClass([[isActive.value ? "translate-y-8px rotate-45" : ""], "bar"])}" data-v-4f9c7530></span><span class="${serverRenderer.exports.ssrRenderClass([[isActive.value ? "opacity-0" : ""], "bar"])}" data-v-4f9c7530></span><span class="${serverRenderer.exports.ssrRenderClass([[isActive.value ? "translate-y--8px rotate--45" : ""], "bar"])}" data-v-4f9c7530></span></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/TheNavbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4f9c7530"]]);
const _sfc_main$5 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "DiscordButton",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: ["icon-btn transition-duration-900 hover:rotate-720 hover:text-hex-5865F2", __props.open ? "rotate-720 !text-hex-5865F2" : ""],
        "i-fa-brands-discord": ""
      }, _attrs))}></button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DiscordButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const useIsdark = defineStore("isdark", () => {
  const isdark = usePreferredDark();
  function change() {
    isdark.value = !isdark.value;
  }
  function update(value) {
    isdark.value = value;
  }
  return { isdark, change, update };
});
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "DarkButton",
  __ssrInlineRender: true,
  setup(__props) {
    useIsdark();
    const isDark = useDark();
    useToggle(isDark);
    usePreferredDark();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "icon-btn",
        "dark:i-carbon-moon": "",
        "i-carbon-sun": ""
      }, _attrs))}></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DarkButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "DiscordModal",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "h-full w-full fixed top-0 left-0 z-20 bg-black/50",
        style: __props.open ? null : { display: "none" }
      }, _attrs))} data-v-ef28babe><div class="shadow-lg w-max fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 antialiased" style="${serverRenderer.exports.ssrRenderStyle(__props.open ? null : { display: "none" })}" data-v-ef28babe><iframe src="https://discord.com/widget?id=936744932629176392&amp;theme=dark" width="460" height="540" data-v-ef28babe></iframe></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DiscordModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ef28babe"]]);
const useModal = defineStore("modal", () => {
  const state = vue_cjs_prod.ref(false);
  function show() {
    state.value = true;
  }
  function hide() {
    state.value = false;
  }
  return { state, show, hide };
});
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    "i-teenyicons-user-circle-solid": "",
    class: "icon-btn user-panel-button"
  }, _attrs))}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/ButtonUserPanel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ButtonUserPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const modal = useModal();
    const isOpen = vue_cjs_prod.ref(false);
    const toggleModal = () => {
      isOpen.value = !isOpen.value;
    };
    modal.$subscribe((mutation, state) => {
      if (state.state === true && isOpen.value === false) {
        toggleModal();
      } else if (state.state === false && isOpen.value == true) {
        toggleModal();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultTheNavbar = __nuxt_component_0$1;
      const _component_DefaultPrimaryButton = __nuxt_component_1;
      const _component_DiscordButton = _sfc_main$5;
      const _component_DarkButton = _sfc_main$4;
      const _component_DiscordModal = __nuxt_component_4;
      _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-full h-28 flex bg-base/85 fixed top-0 right-0 px-4 lg:px-16 z-20" }, _attrs))} data-v-f77fce48><div class="flex justify-between items-center w-full" data-v-f77fce48><div class="text-3xl text-white font-semibold" data-v-f77fce48>NovisV2</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DefaultTheNavbar, { class: "justify-self-end" }, null, _parent));
      _push(`<div class="flex items-center gap-3 lg:gap-6" data-v-f77fce48>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DefaultPrimaryButton, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Join us Now`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("Join us Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(ButtonUserPanel, { class: "text-lg" }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_DiscordButton, {
        class: "text-xl",
        open: isOpen.value,
        onClick: ($event) => vue_cjs_prod.unref(modal).show()
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_DarkButton, { class: "text-xl" }, null, _parent));
      _push(`</div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DiscordModal, {
        style: isOpen.value ? null : { display: "none" },
        open: isOpen.value,
        onClick: vue_cjs_prod.unref(modal).hide
      }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/TheHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f77fce48"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mode = useColorMode({
      attribute: "theme",
      modes: {
        novisV2: "novisV2",
        update: "update",
        default: "default"
      }
    });
    mode.value = "novisV2";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultTheHeader = __nuxt_component_0;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "min-h-100vh flex flex-col text-primary_light" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DefaultTheHeader, null, null, _parent));
      _push(`<div class="flex-grow">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.eecec8ca.mjs.map
