/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="get"`
 */
;(function(){function t(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function e(t,e){return null==t?D:t[e]}function n(){}function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function o(){this.__data__=Ft?Ft(null):{},this.size=0}function i(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function u(t){var e=this.__data__;if(Ft){var n=e[t];return n===K?D:n}return mt.call(e,t)?e[t]:D}function c(t){
var e=this.__data__;return Ft?e[t]!==D:mt.call(e,t)}function a(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ft&&e===D?K:e,this}function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function l(){this.__data__=[],this.size=0}function f(t){var e=this.__data__,n=m(e,t);return!(n<0)&&(n==e.length-1?e.pop():xt.call(e,n,1),--this.size,true)}function p(t){var e=this.__data__,n=m(e,t);return n<0?D:e[n][1]}function h(t){return m(this.__data__,t)>-1;
}function _(t,e){var n=this.__data__,r=m(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function b(){this.size=0,this.__data__={hash:new r,map:new(At||s),string:new r}}function v(t){var e=$(this,t).delete(t);return this.size-=e?1:0,e}function d(t){return $(this,t).get(t)}function g(t){return $(this,t).has(t)}function j(t,e){var n=$(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,
this}function m(t,e){for(var n=t.length;n--;)if(q(t[n][0],e))return n;return-1}function O(t,e){e=x(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[R(e[n++])];return n&&n==r?t:D}function z(t){return null==t?t===D?rt:tt:$t&&$t in Object(t)?F(t):C(t)}function S(t){return!(!L(t)||P(t))&&(G(t)?St:lt).test(I(t))}function w(e){if(typeof e=="string")return e;if(kt(e))return t(e,w)+"";if(U(e))return Tt?Tt.call(e):"";var n=e+"";return"0"==n&&1/e==-W?"-0":n}function x(t,e){return kt(t)?t:E(t,e)?[t]:Pt(V(t))}function $(t,e){
var n=t.__data__;return T(e)?n[typeof e=="string"?"string":"hash"]:n.map}function A(t,n){var r=e(t,n);return S(r)?r:D}function F(t){var e=mt.call(t,$t),n=t[$t];try{t[$t]=D;var r=true}catch(t){}var o=zt.call(t);return r&&(e?t[$t]=n:delete t[$t]),o}function E(t,e){if(kt(t))return false;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!U(t))||(it.test(t)||!ot.test(t)||null!=e&&t in Object(e))}function T(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t;
}function P(t){return!!Ot&&Ot in t}function k(t){var e=N(t,function(t){return n.size===Q&&n.clear(),t}),n=e.cache;return e}function C(t){return zt.call(t)}function R(t){if(typeof t=="string"||U(t))return t;var e=t+"";return"0"==e&&1/t==-W?"-0":e}function I(t){if(null!=t){try{return jt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function N(t,e){if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError(J);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;
if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u)||i,u};return n.cache=new(N.Cache||y),n}function q(t,e){return t===e||t!==t&&e!==e}function G(t){if(!L(t))return false;var e=z(t);return e==Y||e==Z||e==X||e==et}function L(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function M(t){return null!=t&&typeof t=="object"}function U(t){return typeof t=="symbol"||M(t)&&z(t)==nt}function V(t){return null==t?"":w(t)}function B(t,e,n){var r=null==t?D:O(t,e);return r===D?n:r;
}var D,H="4.17.4",J="Expected a function",K="__lodash_hash_undefined__",Q=500,W=1/0,X="[object AsyncFunction]",Y="[object Function]",Z="[object GeneratorFunction]",tt="[object Null]",et="[object Proxy]",nt="[object Symbol]",rt="[object Undefined]",ot=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,it=/^\w*$/,ut=/^\./,ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,at=/[\\^$.*+?()[\]{}|]/g,st=/\\(\\)?/g,lt=/^\[object .+?Constructor\]$/,ft=typeof global=="object"&&global&&global.Object===Object&&global,pt=typeof self=="object"&&self&&self.Object===Object&&self,ht=ft||pt||Function("return this")(),_t=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yt=_t&&typeof module=="object"&&module&&!module.nodeType&&module,bt=Array.prototype,vt=Function.prototype,dt=Object.prototype,gt=ht["__core-js_shared__"],jt=vt.toString,mt=dt.hasOwnProperty,Ot=function(){
var t=/[^.]+$/.exec(gt&&gt.keys&&gt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),zt=dt.toString,St=RegExp("^"+jt.call(mt).replace(at,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wt=ht.Symbol,xt=bt.splice,$t=wt?wt.toStringTag:D,At=A(ht,"Map"),Ft=A(Object,"create"),Et=wt?wt.prototype:D,Tt=Et?Et.toString:D;r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=u,r.prototype.has=c,r.prototype.set=a,s.prototype.clear=l,s.prototype.delete=f,s.prototype.get=p,
s.prototype.has=h,s.prototype.set=_,y.prototype.clear=b,y.prototype.delete=v,y.prototype.get=d,y.prototype.has=g,y.prototype.set=j;var Pt=k(function(t){var e=[];return ut.test(t)&&e.push(""),t.replace(ct,function(t,n,r,o){e.push(r?o.replace(st,"$1"):n||t)}),e});N.Cache=y;var kt=Array.isArray;n.memoize=N,n.eq=q,n.get=B,n.isArray=kt,n.isFunction=G,n.isObject=L,n.isObjectLike=M,n.isSymbol=U,n.toString=V,n.VERSION=H,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ht._=n, define(function(){
return n})):yt?((yt.exports=n)._=n,_t._=n):ht._=n}).call(this);
var VPortal, VSystem, watchArray;

VPortal = (function() {
  var getter, setter;

  getter = void 0;

  setter = void 0;

  function VPortal() {
    var changed, i, len, portal, ref, sf;
    if (arguments.length === 2) {
      this.value = arguments[0];
      this.portals = arguments[1];
    } else {
      this.portals = arguments[0];
    }
    sf = this;
    changed = function(portal) {
      var desc, error;
      if (portal[0][portal[1]] && !sf.value) {
        sf.value = portal[0][portal[1]];
      }
      if (!portal[0][portal[1]]) {
        portal[0][portal[1]] = void 0;
      }
      desc = Object.getOwnPropertyDescriptor(portal[0], portal[1]);
      if (desc) {
        if (getter && (desc.get || desc.set)) {
          throw new Error('You can use only 1 dominant property descriptor!');
        } else {
          getter = desc.get;
          setter = desc.set;
        }
      }
      try {
        return Object.defineProperty(portal[0], portal[1], {
          get: function() {
            if (getter) {
              return getter();
            }
            return sf.value;
          },
          set: function(s) {
            if (setter) {
              return setter(s);
            }
            return sf.value = s;
          }
        });
      } catch (error1) {
        error = error1;
        return console.log(new Error('You must set "configurable" in "Object.defineProperty", or you can get bad results!'));
      }
    };
    this.portals = watchArray(this.portals, function(arg) {
      var portal;
      portal = arg;
      if (!(typeof portal === 'object' && portal[0] && portal[1])) {
        return;
      }
      return changed(portal);
    });
    ref = this.portals;
    for (i = 0, len = ref.length; i < len; i++) {
      portal = ref[i];
      changed(portal);
    }
  }

  VPortal.prototype.desynchronize = function() {
    var i, len, portal, ref, results;
    ref = this.portals;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      portal = ref[i];
      results.push(Object.defineProperty(portal[0], portal[1], {
        enumerable: false,
        writable: false,
        configurable: false,
        value: this.value
      }));
    }
    return results;
  };

  VPortal.prototype.desync = function() {
    return this.desynchronize.apply(this, arguments);
  };

  return VPortal;

})();

watchArray = function(object, callback) {
  return new Proxy(object, {
    set: function(target, property, value, receiver) {
      target[property] = value;
      callback(value);
      return true;
    }
  });
};

VSystem = (function() {
  var getPaths, init, pairPaths, sortPaths;

  getPaths = (function() {
    var f, paths, rn;
    paths = [];
    rn = function(obj, path) {
      var nw, prop, results;
      if (path == null) {
        path = {
          steps: []
        };
      }
      results = [];
      for (prop in obj) {
        if (typeof obj[prop] === 'number' || typeof obj[prop] === 'string') {
          nw = {
            steps: path.steps.concat(),
            name: prop,
            value: obj[prop]
          };
          results.push(paths.push(nw));
        } else if (typeof obj[prop] === 'object') {
          nw = {
            steps: path.steps.concat(prop)
          };
          results.push(rn(obj[prop], nw));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    f = function(obj) {
      rn(obj);
      return paths;
    };
    return f;
  })();

  sortPaths = function(paths) {
    var i, len, path, res;
    res = {};
    for (i = 0, len = paths.length; i < len; i++) {
      path = paths[i];
      if (!res[path.value]) {
        res[path.value] = [];
      }
      res[path.value].push({
        steps: path.steps,
        name: path.name
      });
    }
    return res;
  };

  pairPaths = function(storages, defs, obj) {
    var args, i, len, num, pair, portals, prop, r, ref, step, storage, storageName;
    portals = [];
    for (storageName in storages) {
      storage = storages[storageName];
      args = [];
      for (i = 0, len = storage.length; i < len; i++) {
        pair = storage[i];
        if (pair.steps[0]) {
          prop = obj[pair.steps[0]];
        }
        ref = pair.steps;
        for (num in ref) {
          step = ref[num];
          if (num === 0) {
            continue;
          }
          if (prop[step]) {
            prop = prop[step];
          }
        }
        args.push([prop, pair.name]);
      }
      if (defs[storageName]) {
        portals.push(new VPortal(defs[storageName], args));
      } else if (typeof defs !== 'object') {
        portals.push(new VPortal(defs, args));
      } else {
        portals.push(new VPortal(args));
      }
    }
    r = {
      desynchronize: function() {
        var j, len1, portal, results;
        results = [];
        for (j = 0, len1 = portals.length; j < len1; j++) {
          portal = portals[j];
          results.push(portal.desync());
        }
        return results;
      }
    };
    r.desync = r.desynchronize;
    return r;
  };

  init = void 0;

  function VSystem(model) {
    this.model = model != null ? model : {};
    this.paths = sortPaths(getPaths(this.model));
  }

  VSystem.prototype.install = function() {
    var defs, obj;
    if (arguments.length === 2) {
      defs = arguments[0];
      obj = arguments[1];
    } else {
      obj = arguments[0];
      defs = {};
    }
    return (pairPaths(this.paths, defs, obj)).desync;
  };

  return VSystem;

})();

if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node !== 'undefined') {
  module.exports.VPortal = VPortal;
  module.exports.VSystem = VSystem;
}
