"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2_1 = require("./Point2");
var Bound2 = /** @class */ (function () {
    function Bound2() {
        this.m_Min = new Point2_1.Point2(999999, 999999);
        this.m_Max = new Point2_1.Point2(-99999, -99999);
    }
    Bound2.prototype.addPoint = function (pt) {
        if (pt.x < this.m_Min.x) {
            this.m_Min.x = pt.x;
        }
        if (pt.y < this.m_Min.y) {
            this.m_Min.y = pt.y;
        }
        if (pt.x > this.m_Max.x) {
            this.m_Max.x = pt.x;
        }
        if (pt.y > this.m_Max.y) {
            this.m_Max.y = pt.y;
        }
        return this;
    };
    Bound2.prototype.getMin = function () {
        return new Point2_1.Point2(this.m_Min);
    };
    Bound2.prototype.getMax = function () {
        return new Point2_1.Point2(this.m_Max);
    };
    return Bound2;
}());
exports.Bound2 = Bound2;
