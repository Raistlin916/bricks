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
    var EntityManager = (function () {
        function EntityManager() {
            this.nextId = 0;
        }
        EntityManager.prototype.create = function () {
            return {
                id: this.nextId++
            };
        };
        return EntityManager;
    }());
    exports.default = EntityManager;
});
//# sourceMappingURL=EntityManager.js.map