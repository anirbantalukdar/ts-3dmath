"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point3_1 = require("./Point3");
var Context_1 = require("./Context");
'use strict';
var Matrix3 = /** @class */ (function () {
    function Matrix3(otherMat) {
        this.values = new Float32Array(16);
        if (otherMat instanceof Matrix3) {
            for (var i = 0; i < 16; i++) {
                this.values[i] = otherMat.values[i];
            }
        }
        else {
            console.assert(arguments.length === 0);
            for (var i = 0; i < 4; i++) {
                this.setElementAt(i, i, 1.0);
            }
        }
    }
    Matrix3.rotateByXAxis = function (angle) {
        return null;
    };
    Matrix3.rotateByYAxis = function (angle) {
        return null;
    };
    Matrix3.rotateByZAxis = function (angle) {
        return null;
    };
    Matrix3.rotation = function (angle, refAxis, center) {
        if (center === void 0) { center = Point3_1.Point3.kOrigin; }
        return null;
    };
    Matrix3.prototype.getCoordinateSystem = function (origin, xAxis, yAxis, zAxis) {
        return null;
    };
    Matrix3.prototype.isEqualTo = function (mat, tol) {
        if (tol === void 0) { tol = Context_1.Context.getInstance().tolerance; }
        return false;
    };
    Matrix3.prototype.setElementAt = function (row, col, value) {
        if (this === Matrix3.kIdentity) {
            throw new Error('Can not modify readonly objects');
        }
        this.values[row + (col * 4)] = value;
        return this;
    };
    Matrix3.prototype.getElementAt = function (row, col) {
        return this.values[row + (col * 4)];
    };
    Matrix3.kIdentity = Object.freeze(new Matrix3());
    return Matrix3;
}());
exports.Matrix3 = Matrix3;
