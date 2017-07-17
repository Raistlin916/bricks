(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Physical = (function () {
        function Physical() {
            this.vx = 0;
            this.vy = 0;
        }
        return Physical;
    }());
    exports.default = Physical;
});
//# sourceMappingURL=Physical.js.map