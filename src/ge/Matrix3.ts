import {Vector3d} from './Vector3d';
import {Point3d} from './Point3d';
import {Context} from './Context';
import {Tolerance} from './Tolerance';

'use strict';

export class Matrix3 {
	public static readonly kIdentity = Object.freeze(new Matrix3());
	public values = new Float32Array(16);

	constructor(otherMat?: Matrix3) {
		if (otherMat instanceof Matrix3) {
			for (let i = 0; i < 16; i++) {
				this.values[i] = otherMat.values[i];
			}
		} else {
			console.assert(arguments.length === 0);
			for (let i = 0; i < 4; i++) {
				this.setElementAt(i, i, 1.0);
			}
		}
	}

	static rotateByXAxis(angle: number): Matrix3 {
		return null;
	}

	static rotateByYAxis(angle: number): Matrix3 {
		return null;
	}

	static rotateByZAxis(angle: number): Matrix3 {
		return null;
	}

	static rotation(angle: number, refAxis: Vector3d, center = Point3d.kOrigin): Matrix3 {
		return null;
	}

	getCoordinateSystem(origin: Point3d, xAxis: Vector3d, yAxis: Vector3d, zAxis: Vector3d): Matrix3 {
		return null;
	}

	isEqualTo(mat: Matrix3, tol = Context.getInstance().tolerance) {
		return false;
	}

	setElementAt(row: number, col: number, value: number): Matrix3 {
		if(this === Matrix3.kIdentity){
			throw new Error('Can not modify readonly objects');
		}
		this.values[row + (col * 4)] = value;
		return this;
	}

	getElementAt(row: number, col: number): number {
		return this.values[row + (col * 4)];
	}
}
