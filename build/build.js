var VConfig, VGS, VPortal, VSystem, ref;

ref = (function() {
  var VConfig, VGS, VPortal, define, iP, isNode, showCM, vgsf;
  isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node !== 'undefined';
  define = Object.defineProperty;
  showCM = function() {
    if (VConfig.cm) {
      console.log(new Error('You should set "configurable" in "Object.defineProperty", or you can get bad results!'));
    }
    if (isNode) {
      return console.log('You also can mute this message using "valueSync.config.cm = false"!');
    } else {
      return console.log('You also can mute this message using "VConfig.cm = false"!');
    }
  };
  iP = function(portal, sf) {
    if (portal[0][portal[1]] === void 0) {
      portal[0][portal[1]] = void 0;
    }
    if (portal[0][portal[1]] !== void 0 && (sf != null) && !sf.value) {
      return sf.value = portal[0][portal[1]];
    }
  };
  VPortal = (function() {
    function VPortal() {
      var changed, desc, descriptor, i, j, len, len1, portal, ref, ref1, sf;
      if (arguments.length === 2) {
        this.value = arguments[0];
        this.portals = arguments[1];
      } else {
        this.portals = arguments[0];
      }
      sf = this;
      descriptor = {};
      ref = this.portals;
      for (i = 0, len = ref.length; i < len; i++) {
        portal = ref[i];
        desc = Object.getOwnPropertyDescriptor(portal[0], portal[1]);
        if (desc) {
          descriptor.get = descriptor.get || desc.get;
          descriptor.set = descriptor.set || desc.set;
        }
      }
      if (descriptor.get || descriptor.set) {
        vgsf.call(this, descriptor, this.portals);
      } else {
        changed = function(portal) {
          iP(portal, sf);
          try {
            return define(portal[0], portal[1], {
              get: function() {
                return sf.value;
              },
              set: function(s) {
                return sf.value = s;
              },
              configurable: true
            });
          } catch (error1) {
            return showCM();
          }
        };
        ref1 = this.portals;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          portal = ref1[j];
          changed(portal);
        }
      }
    }

    VPortal.prototype.desynchronize = function() {
      var i, len, portal, ref, results;
      ref = this.portals;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        portal = ref[i];
        results.push(Object.defineProperty(portal[0], portal[1], {
          enumerable: true,
          writable: true,
          configurable: true,
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
  vgsf = function() {
    var changed, i, len, portal, ref, results, sf;
    if (arguments.length === 2) {
      this._getter = arguments[0].get || arguments[0].getter || function() {};
      this._setter = arguments[0].set || arguments[0].setter || function() {};
      this.portals = arguments[1];
    } else {
      this.portals = arguments[0];
    }
    sf = this;
    changed = function(portal) {
      var error;
      iP(portal);
      try {
        return define(portal[0], portal[1], {
          get: function() {
            return sf._getter();
          },
          set: function(s) {
            return sf._setter(s);
          },
          configurable: true
        });
      } catch (error1) {
        error = error1;
        return showCM();
      }
    };
    ref = this.portals;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      portal = ref[i];
      results.push(changed(portal));
    }
    return results;
  };
  VGS = (function() {
    var ctor;

    function VGS() {
      return ctor.apply(this, arguments);
    }

    ctor = vgsf;

    VGS.prototype.desynchronize = function() {
      var i, len, portal, ref, result, results;
      result = this._getter();
      ref = this.portals;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        portal = ref[i];
        results.push(Object.defineProperty(portal[0], portal[1], {
          enumerable: true,
          writable: true,
          configurable: true,
          value: result
        }));
      }
      return results;
    };

    VGS.prototype.desync = function() {
      return this.desynchronize.apply(this, arguments);
    };

    return VGS;

  })();
  VConfig = {
    configurableMessage: true
  };
  new VPortal([[VConfig, 'configurableMessage'], [VConfig, 'cm']]);
  return [VPortal, VSystem, VConfig, VGS];
})(), VPortal = ref[0], VSystem = ref[1], VConfig = ref[2], VGS = ref[3];

if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node !== 'undefined') {
  module.exports = VPortal;
  module.exports.VPortal = VPortal;
  module.exports.VGS = VGS;
  module.exports.VGetterSetter = VGS;
  module.exports.VD = VGS;
  module.exports.VDescriptor = VGS;
  module.exports.config = VConfig;
}
