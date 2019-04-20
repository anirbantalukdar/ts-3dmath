"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tolerance = /** @class */ (function () {
    function Tolerance() {
        this.m_EqualPoint = 0.000001;
        this.m_EqualVector = 0.000001;
    }
    Tolerance.prototype.equalPoint = function () {
        return this.m_EqualPoint;
    };
    Tolerance.prototype.equalVector = function () {
        return this.m_EqualVector;
    };
    Tolerance.prototype.setEqualPoint = function (equalPoint) {
        this.m_EqualPoint = equalPoint;
    };
    Tolerance.prototype.setEqualVector = function (equalVector) {
        this.m_EqualVector = equalVector;
    };
    return Tolerance;
}());
exports.Tolerance = Tolerance;
