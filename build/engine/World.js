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
    var World = (function () {
        function World() {
        }
        World.prototype.addSystem = function (system) {
            return this.systems.push(system);
        };
        return World;
    }());
    exports.default = World;
});
//# sourceMappingURL=World.js.map