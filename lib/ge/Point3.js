"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var f32 = Math.round;
var Point3 = /** @class */ (function () {
    function Point3(x, y, z) {
        if (arguments.length === 0) {
            this.x = this.y = this.z = f32(0.0);
        }
        else if (arguments.length === 1) {
            var pt = x;
            this.x = pt.x;
            this.y = pt.y;
            this.z = pt.z;
        }
        else if (arguments.length === 3) {
            this.x = f32(x);
            this.y = f32(y);
            this.z = f32(z);
        }
    }
    Point3.kOrigin = new Point3(0.0, 0.0, 0.0);
    return Point3;
}());
exports.Point3 = Point3;
