var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "engine/System"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var System_1 = require("engine/System");
    var PhysicalSystem = (function (_super) {
        __extends(PhysicalSystem, _super);
        function PhysicalSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PhysicalSystem.prototype.process = function (entity, delta) {
            var position = this.positionMapper.get(entity);
            var physical = this.physicalMapper.get(entity);
            position.x += delta * physical.vx;
            position.y += delta * physical.vy;
        };
        return PhysicalSystem;
    }(System_1.default));
    exports.default = PhysicalSystem;
});
//# sourceMappingURL=PhysicalSystem.js.map