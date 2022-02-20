"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var My = /*#__PURE__*/function () {
  function My() {
    _classCallCheck(this, My);
  }

  _createClass(My, [{
    key: "map",
    value: function map(list, fn) {
      var a = [];

      for (index = 0; index < list.length; index++) {
        a.push(fn(list[index]));
      }

      return a;
    }
  }, {
    key: "filter",
    value: function filter(list, fn) {
      var a = [];

      for (index = 0; index < list.length; index++) {
        if (fn(list[index])) {
          a.push(list[index]);
        }
      }

      return a;
    }
  }, {
    key: "reduce",
    value: function reduce(list, fn) {
      var a = 0;

      for (index = 0; index < list.length; index++) {
        a += fn(list[index]);
      }

      return a;
    }
  }, {
    key: "forEach",
    value: function forEach(list, fn) {
      for (index = 0; index < list.length; index++) {
        fn(list[index]);
      }
    }
  }]);

  return My;
}();