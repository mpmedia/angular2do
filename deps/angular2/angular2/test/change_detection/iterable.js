System.register("angular2/test/change_detection/iterable", [], function($__export) {
  "use strict";
  var $__1;
  var __moduleName = "angular2/test/change_detection/iterable";
  var TestIterable;
  return ($__1 = {}, Object.defineProperty($__1, "setters", {
    value: [],
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__1, "execute", {
    value: function() {
      TestIterable = $__export("TestIterable", (function() {
        var $__1;
        var TestIterable = function TestIterable() {
          this.list = [];
        };
        return ($traceurRuntime.createClass)(TestIterable, ($__1 = {}, Object.defineProperty($__1, Symbol.iterator, {
          value: function() {
            return this.list[Symbol.iterator]();
          },
          configurable: true,
          enumerable: true,
          writable: true
        }), $__1), {});
      }()));
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__1);
});

//# sourceMappingURL=/Users/patrick/Documents/open source/angular/modules/angular2/test/change_detection/iterable.map

//# sourceMappingURL=./iterable.map