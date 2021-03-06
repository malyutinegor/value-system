// Generated by CoffeeScript 1.12.5
var bar, baz, foo, portal2, sync, sys;

sync = require('./src/main.js');

sync.config.cf = false;

foo = {};

bar = {};

baz = {};

Object.defineProperty(foo, 'ham', {
  get: function() {
    return 58;
  },
  configurable: true
});

Object.defineProperty(foo, 'spam', {
  get: function() {
    return 23;
  },
  configurable: true
});

portal2 = new sync.VPortal([[foo, 'spam'], [bar, 'ham'], [baz, 'lorem']]);

sys = new sync.VSystem([
  {
    'ham': 1
  }, {
    'spam': 1
  }, {
    'eggs': 1
  }
]);

sys.install([foo, bar, baz]);

console.log(foo.ham + ", " + bar.spam + ", " + baz.eggs);

console.log(foo.spam + ", " + bar.ham + ", " + baz.lorem);

console.log(foo.ham + ", " + bar.spam + ", " + baz.eggs);
