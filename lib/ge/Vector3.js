"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Context");
var f32 = Math.round;
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        if (arguments.length === 0) {
            this.x = this.y = this.z = f32(0.0);
        }
        if (arguments.length === 1) {
            var vec = x;
            this.x = vec.x;
            this.y = vec.y;
            this.z = vec.z;
        }
        else if (arguments.length === 3) {
            this.x = f32(x);
            this.y = f32(y);
            this.z = f32(z);
        }
    }
    Vector3.prototype.set = function (x, y, z) {
        if (arguments.length === 3) {
            this.x = f32(x);
            this.y = f32(y);
            this.z = f32(z);
            return this;
        }
        else if (arguments.length === 1) {
            if (!(x instanceof Vector3)) {
                throw new Error("Invalid parameter");
            }
            var vec = x;
            this.x = vec.x;
            this.y = vec.y;
            this.z = vec.z;
        }
    };
    Vector3.prototype.crossProduct = function (vec) {
        var res = new Vector3();
        res.x = this.y * vec.z - this.z * vec.y;
        res.y = this.z * vec.x - this.x * vec.z;
        res.z = this.x * vec.y - this.y * vec.x;
        return res;
    };
    Vector3.prototype.dotProduct = function (vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    };
    Vector3.prototype.angleTo = function (vec, refVec) {
        if (arguments.length === 2) {
            var normalPlanVec = this.crossProduct(vec);
            if (refVec.dotProduct(normalPlanVec) >= 0.0) {
                return this.angleTo(vec);
            }
            return 2 * Math.PI - this.angleTo(vec);
        }
        else if (arguments.length === 1) {
            var dp = this.dotProduct(vec);
            return Math.acos(dp / (this.length() * vec.length()));
        }
        throw new Error('Invalid number of arguments');
    };
    Vector3.prototype.length = function () {
        return Math.sqrt(this.sqrdLength());
    };
    Vector3.prototype.sqrdLength = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    Vector3.prototype.isCodirectionalTo = function (vec, tolerance) {
        if (tolerance === void 0) { tolerance = Context_1.Context.getInstance().tolerance; }
        throw new Error('Implementation not available');
    };
    Vector3.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    };
    Vector3.prototype.normalize = function () {
        var d = this.length();
        if (d === 0) {
            throw new Error('Normalizing a zero vector');
        }
        return this.multiplyByScalar(1 / d);
    };
    Vector3.prototype.multiplyByScalar = function (s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    };
    Vector3.prototype.perpVector = function () {
        if (this.x < 1.0 / 64.0 && this.y < 1.0 / 64.0) {
            return new Vector3(this.z, 0.0, -this.x);
        }
        return new Vector3(-this.y, this.x, 0.0);
    };
    Vector3.kXAxis = new Vector3(1.0, 0.0, 0.0);
    Vector3.kYAxis = new Vector3(0.0, 1.0, 0.0);
    Vector3.kZAxis = new Vector3(0.0, 0.0, 1.0);
    return Vector3;
}());
exports.Vector3 = Vector3;
