(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "engine/World", "./systems/PhysicalSystem"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var World_1 = require("engine/World");
    var PhysicalSystem_1 = require("./systems/PhysicalSystem");
    var Bricks = (function () {
        function Bricks() {
            this.world = new World_1.default();
            this.world.addSystem(new PhysicalSystem_1.default());
            console.log(this);
        }
        return Bricks;
    }());
    exports.default = Bricks;
});
//# sourceMappingURL=index.js.map