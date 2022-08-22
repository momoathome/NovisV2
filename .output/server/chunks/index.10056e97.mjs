import { v as vue_cjs_prod, a as _sfc_main$2 } from './server.mjs';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("img/hero.webp");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    vue_cjs_prod.ref("default");
    vue_cjs_prod.shallowRef(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DefaultNews = _sfc_main$2;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="" width="1920" height="800"><main class="bg-base flex flex-col justify-center pt-8rem">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DefaultNews, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.10056e97.mjs.map
