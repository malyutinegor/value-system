var VConfig, VPortal, VSystem, ref;

ref = (function() {
  var VConfig, VPortal, VSystem, cf, isNode, settings;
  cf = true;
  isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node !== 'undefined';
  VPortal = (function() {
    var getter, setter;

    getter = void 0;

    setter = void 0;

    function VPortal() {
      var changed, desc, i, j, len, len1, portal, ref, ref1, sf;
      if (arguments.length === 2) {
        this.value = arguments[0];
        this.portals = arguments[1];
      } else {
        this.portals = arguments[0];
      }
      sf = this;
      ref = this.portals;
      for (i = 0, len = ref.length; i < len; i++) {
        portal = ref[i];
        desc = Object.getOwnPropertyDescriptor(portal[0], portal[1]);
        if (desc && (desc.get || desc.set)) {
          console.log(desc.get.toString());
        }
      }
      changed = function(portal) {
        var error;
        if (portal[0][portal[1]] === void 0) {
          portal[0][portal[1]] = void 0;
        }
        if (portal[0][portal[1]] !== void 0 && !sf.value) {
          sf.value = portal[0][portal[1]];
        }
        getter = Object.getOwnPropertyDescriptor(portal[0], portal[1]).get;
        try {
          return Object.defineProperty(portal[0], portal[1], {
            get: function() {
              return sf.value;
            },
            set: function(s) {
              return sf.value = s;
            },
            configurable: true
          });
        } catch (error1) {
          error = error1;
          if (cf) {
            console.log(new Error('You must set "configurable" in "Object.defineProperty", or you can get bad results!'));
            if (isNode) {
              return console.log('You also can disable this message using "valueSync.VConfig(\'no cf\')"');
            } else {
              return console.log('You also can disable this message using "VConfig(\'no cf\')"');
            }
          }
        }
      };
      ref1 = this.portals;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        portal = ref1[j];
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
        if (defs[storageName] !== void 0) {
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
  settings = {
    cf: {
      yes: function() {
        return cf = true;
      },
      no: function() {
        return cf = false;
      }
    }
  };
  VConfig = function(option) {
    var op, rs;
    rs = option.match(/^no/i) ? 'no' : 'yes';
    if (rs === 'no') {
      op = option.match(/^no\s*([\w\d]+)\s*/i)[1];
    } else {
      op = option.match(/\s*([\w\d]+)\s*/i)[1];
    }
    if (settings[op]) {
      if (settings[op][rs]) {
        return settings[op][rs]();
      } else {
        if (rs === 'yes') {
          throw new Error('Sorry, but you can\'t enable "' + op + '" setting!');
        } else {
          throw new Error('Sorry, but you can\'t disable "' + op + '" setting!');
        }
      }
    } else {
      throw new Error('Sorry, but there is no any "' + op + '" setting!');
    }
  };
  return [VPortal, VSystem, VConfig];
})(), VPortal = ref[0], VSystem = ref[1], VConfig = ref[2];

if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node !== 'undefined') {
  module.exports.VPortal = VPortal;
  module.exports.VSystem = VSystem;
  module.exports.VConfig = VConfig;
}
