"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck = /** @class */ (function () {
    function Duck() {
        var _this = this;
        this.performFly = function () {
            _this.flyBehavior.fly();
        };
    }
    return Duck;
}());
exports.default = Duck;
