// Generated by CoffeeScript 1.12.5
var assert, sync;

sync = require('./src/main.js');

assert = require('chai').assert;

describe('value-sync', function() {
  return describe('#VSystem', function() {
    it('synchronizes value system with defaults', function() {
      var f, i, results, x, y;
      f = function(x, y) {
        var bar, baz, defaults, foo, returns, system;
        foo = {};
        bar = {};
        baz = {};
        system = new sync.VSystem([
          [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ]
        ]);
        defaults = {
          x: x,
          y: y
        };
        returns = {
          x: x,
          y: y
        };
        system.install(defaults, [foo, bar, baz]);
        assert.equal(defaults.x, foo.x);
        assert.equal(defaults.y, foo.y);
        assert.equal(defaults.x, bar.x);
        assert.equal(defaults.y, bar.y);
        assert.equal(defaults.x, baz.x);
        assert.equal(defaults.y, baz.y);
        baz.x = returns.x;
        foo.y = returns.y;
        assert.equal(returns.x, foo.x);
        assert.equal(returns.y, foo.y);
        assert.equal(returns.x, bar.x);
        assert.equal(returns.y, bar.y);
        assert.equal(returns.x, baz.x);
        return assert.equal(returns.y, baz.y);
      };
      results = [];
      for (x = i = 0; i <= 5; x = ++i) {
        results.push((function() {
          var j, results1;
          results1 = [];
          for (y = j = 0; j <= 5; y = ++j) {
            results1.push(f(x, y));
          }
          return results1;
        })());
      }
      return results;
    });
    it('synchronizes value system without defaults', function() {
      var f, i, results, x, y;
      f = function(x, y) {
        var bar, baz, foo, returns, system;
        foo = {
          y: y
        };
        bar = {};
        baz = {
          x: x
        };
        system = new sync.VSystem([
          [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ]
        ]);
        returns = {
          x: x,
          y: y
        };
        system.install([foo, bar, baz]);
        assert.equal(x, foo.x);
        assert.equal(y, foo.y);
        assert.equal(x, bar.x);
        assert.equal(y, bar.y);
        assert.equal(x, baz.x);
        assert.equal(y, baz.y);
        baz.x = returns.x;
        foo.y = returns.y;
        assert.equal(returns.x, foo.x);
        assert.equal(returns.y, foo.y);
        assert.equal(returns.x, bar.x);
        assert.equal(returns.y, bar.y);
        assert.equal(returns.x, baz.x);
        return assert.equal(returns.y, baz.y);
      };
      results = [];
      for (x = i = 0; i <= 5; x = ++i) {
        results.push((function() {
          var j, results1;
          results1 = [];
          for (y = j = 0; j <= 5; y = ++j) {
            results1.push(f(x, y));
          }
          return results1;
        })());
      }
      return results;
    });
    return it('synchronizes value system with getter', function() {
      var f, i, results, x;
      f = function(x, y) {
        var bar, baz, foo, rx, system;
        foo = {};
        bar = {};
        baz = {};
        rx = x;
        console.log(rx);
        Object.defineProperty(foo, 'x', {
          get: function() {
            return rx;
          },
          set: function(s) {
            rx = s;
            return console.log('SET', s);
          },
          configurable: true
        });
        system = new sync.VSystem([
          [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ], [
            {
              x: 'x',
              y: 'y'
            }
          ]
        ]);
        system.install([foo, bar, baz]);
        baz.y = y;
        assert.equal(x, foo.x);
        assert.equal(y, foo.y);
        assert.equal(x, bar.x);
        assert.equal(y, bar.y);
        assert.equal(x, baz.x);
        assert.equal(y, baz.y);
        baz.x = x;
        foo.y = y;
        assert.equal(x, foo.x);
        assert.equal(y, foo.y);
        assert.equal(x, bar.x);
        assert.equal(y, bar.y);
        assert.equal(x, baz.x);
        return assert.equal(y, baz.y);
      };
      results = [];
      for (x = i = 0; i <= 5; x = ++i) {
        results.push(f(x, 20));
      }
      return results;
    });
  });
});
