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
        System.prototype.insert = function (entity) {
            this.entities.push(entity);
        };
        System.prototype.remove = function (entity) {
            var _this = this;
            return this.entities.some(function (item, index) {
                if (item.id === entity.id) {
                    _this.entities.splice(index, 1);
                    return true;
                }
            });
        };
        System.prototype.getEntities = function () {
            return this.entities;
        };
        return System;
    }());
    exports.default = System;
});
//# sourceMappingURL=System.js.map