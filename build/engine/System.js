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
    var System = (function () {
        function System() {
        }
        System.prototype.insert = function (entityId) {
            this.entityIds.push(entityId);
        };
        System.prototype.remove = function (entityId) {
            this.entityIds.splice(this.entityIds.indexOf(entityId), 1);
        };
        System.prototype.getEntities = function () {
            return this.entityIds;
        };
        return System;
    }());
    exports.default = System;
});
//# sourceMappingURL=System.js.map