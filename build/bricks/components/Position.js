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
    var Position = (function () {
        function Position() {
            this.x = 0;
            this.y = 0;
        }
        return Position;
    }());
    exports.default = Position;
});
//# sourceMappingURL=Position.js.map