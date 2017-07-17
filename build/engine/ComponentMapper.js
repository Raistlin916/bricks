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
    var ComponentMapper = (function () {
        function ComponentMapper() {
            this.maps = {};
        }
        ComponentMapper.prototype.get = function (entity) {
            return this.maps[entity.id];
        };
        return ComponentMapper;
    }());
    exports.default = ComponentMapper;
});
//# sourceMappingURL=ComponentMapper.js.map