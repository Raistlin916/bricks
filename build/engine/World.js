(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./EntityManager"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EntityManager_1 = require("./EntityManager");
    var World = (function () {
        function World() {
            this.systems = [];
            this.entityManger = new EntityManager_1.default();
        }
        World.prototype.addSystem = function (system) {
            this.systems.push(system);
            return this;
        };
        World.prototype.createEntity = function () {
            return this.entityManger.create();
        };
        return World;
    }());
    exports.default = World;
});
//# sourceMappingURL=World.js.map