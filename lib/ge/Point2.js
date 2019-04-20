"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = require("./Vector2");
var f32 = Math.round;
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        if (arguments.length === 0) {
            this.x = this.y = 0;
        }
        else if (arguments.length === 1) {
            var pt = x;
            this.x = pt.x;
            this.y = pt.y;
        }
        else if (arguments.length === 2) {
            this.x = f32(x);
            this.y = f32(y);
        }
    }
    Point2.prototype.getX = function () {
        return this.x;
    };
    Point2.prototype.getY = function () {
        return this.y;
    };
    Point2.prototype.setX = function (x) {
        this.x = x;
    };
    Point2.prototype.setY = function (y) {
        this.y = y;
    };
    Point2.prototype.clone = function () {
        return new Point2(this.x, this.y);
    };
    Point2.prototype.set = function (x, y) {
        this.x = f32(x);
        this.y = f32(y);
    };
    Point2.prototype.distanceTo = function (pt) {
        var xDiff = this.x - pt.x;
        var yDiff = this.y - pt.y;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    Point2.prototype.subtract = function (pt) {
        return new Vector2_1.Vector2(this.x - pt.x, this.y - pt.y);
    };
    Point2.prototype.addVector = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    Point2.prototype.getAddVector = function (vec) {
        return new Point2(this.x, this.y).addVector(vec);
    };
    Point2.prototype.transformBy = function (xform) {
        var x = xform.entry(0, 0) * this.x + xform.entry(0, 1) * this.y + xform.entry(0, 2) * 1.0;
        var y = xform.entry(1, 0) * this.x + xform.entry(1, 1) * this.y + xform.entry(1, 2) * 1.0;
        var w = xform.entry(2, 0) * this.x + xform.entry(2, 1) * this.y + xform.entry(2, 2) * 1.0;
        this.x = x / w;
        this.y = y / w;
    };
    Point2.prototype.getTransformBy = function (xform) {
        var result = new Point2(this.x, this.y);
        result.transformBy(xform);
        return result;
    };
    Point2.kOrigin = new Point2(0.0, 0.0);
    return Point2;
}());
exports.Point2 = Point2;
