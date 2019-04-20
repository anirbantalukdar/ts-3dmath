"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2_1 = require("./Point2");
var f32 = Math.round;
var Matrix2 = /** @class */ (function () {
    function Matrix2(mat) {
        this.m = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];
        if (mat) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    this.m[i][j] = mat.m[i][j];
                }
            }
        }
    }
    Matrix2.translation = function (dx, dy) {
        var mat = new Matrix2();
        mat.m[0][2] = dx;
        mat.m[1][2] = dy;
        return mat;
    };
    Matrix2.prototype.setIdentity = function () {
        console.log('identity');
        console.log(this.m);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === j) {
                    this.m[i][j] = 1.0;
                }
                else {
                    this.m[i][j] = 0.0;
                }
            }
        }
        console.log(this.m);
    };
    Matrix2.prototype.entry = function (row, col) {
        return this.m[row][col];
    };
    Matrix2.prototype.multiplyBy = function (mat2) {
        var tmp = new Matrix2();
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                tmp.m[i][j] = 0;
                for (var k = 0; k < 3; k++) {
                    tmp.m[i][j] += this.m[i][k] * mat2.m[k][j];
                }
            }
        }
        this.m = tmp.m;
        return this;
    };
    Matrix2.prototype.det = function () {
        return this.m[0][0] * (this.m[1][1] * this.m[2][2] - this.m[2][1] * this.m[1][2])
            - this.m[0][1] * (this.m[1][0] * this.m[2][2] - this.m[2][0] * this.m[1][2])
            + this.m[0][2] * (this.m[1][0] * this.m[2][1] - this.m[2][0] * this.m[1][1]);
    };
    Matrix2.prototype.transformBy = function (a, b, c, d, e, f) {
        var mat = new Matrix2();
        mat.m = [
            [a, b, c],
            [d, e, f],
            [0, 0, 1]
        ];
        mat.multiplyBy(this);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.m[i][j] = mat.m[i][j];
            }
        }
        return this;
    };
    Matrix2.prototype.inverse = function () {
        var d = this.det();
        var minr = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var row0 = (i + 1) % 3;
                var row1 = (i + 2) % 3;
                var col0 = (j + 1) % 3;
                var col1 = (j + 2) % 3;
                var min = row0 < row1 ? row0 : row1;
                var max = row0 > row1 ? row0 : row1;
                row0 = min, row1 = max;
                min = col0 < col1 ? col0 : col1;
                max = col0 > col1 ? col0 : col1;
                col0 = min, col1 = max;
                minr[i][j] = Math.pow(-1.0, (i + j + 2)) * (this.m[row0][col0] * this.m[row1][col1] - this.m[row1][col0] * this.m[row0][col1]);
            }
        }
        this.swap(minr, 0, 1);
        this.swap(minr, 0, 2);
        this.swap(minr, 2, 1);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.m[i][j] = minr[i][j] / d;
            }
        }
        return this;
    };
    Matrix2.prototype.translateBy = function (dx, dy) {
        this.m[0][2] += dx;
        this.m[1][2] += dy;
        return this;
    };
    Matrix2.prototype.scaling = function (scale, refPoint) {
        if (!refPoint) {
            refPoint = Point2_1.Point2.kOrigin;
        }
        var mat = Matrix2.translation(refPoint.x, refPoint.y);
        var scaleMat = new Matrix2();
        scaleMat.m[0][0] = scaleMat.m[1][1] = scale;
        var revTransMat = Matrix2.translation(-refPoint.x, -refPoint.y);
        mat.multiplyBy(scaleMat).multiplyBy(revTransMat);
        return mat;
    };
    Matrix2.prototype.getScale = function () {
        return this.m[0][0];
    };
    Matrix2.prototype.swap = function (value, index0, index1) {
        var k = value[index0][index1];
        value[index0][index1] = value[index1][index0];
        value[index1][index0] = k;
    };
    return Matrix2;
}());
exports.Matrix2 = Matrix2;
