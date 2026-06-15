"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;
var _reactNativeNitroModules = require("react-native-nitro-modules");
var _type = require("./type");
Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _type[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _type[key];
    }
  });
});
const NitroFS = _reactNativeNitroModules.NitroModules.createHybridObject('NitroFS');
var _default = exports.default = NitroFS;
//# sourceMappingURL=index.js.map