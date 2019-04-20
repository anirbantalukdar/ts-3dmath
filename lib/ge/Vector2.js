"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var f32 = Math.round;
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        var v = this;
        if (arguments.length === 2) {
            v.x = f32(x);
            v.y = f32(y);
        }
        else if (Array.isArray(x)) {
            v.x = f32(x[0]);
            v.y = f32(x[0]);
        }
        else if (x instanceof Vector2) {
            v.x = x.x;
            v.y = x.y;
        }
    }
    Vector2.prototype.set = function (x, y) {
        this.x = f32(x);
        this.y = f32(y);
        return this;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.sqrdLength());
    };
    Vector2.prototype.sqrdLength = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2.prototype.angleTo = function (vec) {
        var angle = Math.atan2(vec.y, vec.x) - Math.atan2(this.y, this.x);
        if (angle < 0) {
            angle += 2 * Math.PI;
        }
        return angle;
    };
    Vector2.prototype.normalize = function () {
        var length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
    };
    Vector2.prototype.getNormalized = function () {
        return new Vector2(this.x, this.y).normalize();
    };
    Vector2.prototype.multiplyBy = function (x) {
        this.x *= x;
        this.y *= x;
        return this;
    };
    Vector2.prototype.getMultipliedBy = function (x) {
        return new Vector2(this.x, this.y).multiplyBy(x);
    };
    Vector2.prototype.negate = function () {
        this.multiplyBy(-1);
        return this;
    };
    Vector2.prototype.getNegate = function () {
        return new Vector2(-this.x, -this.y);
    };
    Vector2.prototype.getPerpVector = function () {
        return new Vector2(this.y, -this.x);
    };
    Vector2.prototype.dotProduct = function (vec) {
        return this.x * vec.x + this.y * vec.y;
    };
    Vector2.kXAxis = new Vector2(1.0, 0.0);
    Vector2.kYAxis = new Vector2(0.0, 1.0);
    return Vector2;
}());
exports.Vector2 = Vector2;
