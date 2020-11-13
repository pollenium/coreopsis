"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var _utils = __importStar(require("./utils"));
exports.utils = _utils;
var Coreopsis = /** @class */ (function () {
    function Coreopsis(presalt) {
        this.presalt = presalt;
    }
    Coreopsis.prototype.computePrivateKey = function (arg) {
        return exports.utils.computePrivateKey(__assign(__assign({}, arg), { presalt: this.presalt }));
    };
    Coreopsis.prototype.promptComputePrivateKey = function () {
        return exports.utils.promptComputePrivateKey(this.presalt);
    };
    Coreopsis.prototype.promptComputeKeypair = function () {
        return exports.utils.promptComputeKeypair(this.presalt);
    };
    return Coreopsis;
}());
exports.Coreopsis = Coreopsis;
