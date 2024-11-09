import {Tolerance} from './Tolerance';
import {Context} from './Context';

const f32 : any = Math.round;

export class Vector3d {
	public static kXAxis = new Vector3d(1.0, 0.0, 0.0);
	public static kYAxis = new Vector3d(0.0, 1.0, 0.0);
	public static kZAxis = new Vector3d(0.0, 0.0, 1.0);

	public x: number;
	public y: number;
	public z: number;

	constructor(x?: number | Vector3d, y?: number, z?: number) {
		if (arguments.length === 0) {
			this.x = this.y = this.z = f32(0.0);
		}
		if (arguments.length === 1) {
			let vec: Vector3d = x as Vector3d;
			this.x = vec.x;
			this.y = vec.y;
			this.z = vec.z;
		} else if (arguments.length === 3) {
			this.x = f32(x as number);
			this.y = f32(y);
			this.z = f32(z);
		}
	}

	set(x: number | Vector3d, y?: number, z?: number): Vector3d {
		if (arguments.length === 3) {
			this.x = f32(x as number);
			this.y = f32(y);
			this.z = f32(z);
			return this;
		} else if (arguments.length === 1) {
			if (!(x instanceof Vector3d)) {
				throw new Error("Invalid parameter");
			}
			let vec: Vector3d = x as Vector3d;
			this.x = vec.x;
			this.y = vec.y;
			this.z = vec.z;
		}
	}

	crossProduct(vec: Vector3d): Vector3d {
		const res = new Vector3d();
		res.x = this.y * vec.z - this.z * vec.y;
		res.y = this.z * vec.x - this.x * vec.z;
		res.z = this.x * vec.y - this.y * vec.x;
		return res;
	}

	dotProduct(vec: Vector3d): number {
		return this.x * vec.x + this.y * vec.y + this.z * vec.z;
	}

	angleTo(vec: Vector3d, refVec?: Vector3d): number {
		if (arguments.length === 2) {
			const normalPlanVec = this.crossProduct(vec);
			if (refVec.dotProduct(normalPlanVec) >= 0.0) {
				return this.angleTo(vec);
			}
			return 2 * Math.PI - this.angleTo(vec);
		} else if (arguments.length === 1) {
			const dp = this.dotProduct(vec);
			return Math.acos(dp / (this.length() * vec.length()));
		}
		throw new Error('Invalid number of arguments');
	}

	length(): number {
		return Math.sqrt(this.sqrdLength());
	}

	sqrdLength(): number {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	isCodirectionalTo(vec: Vector3d, tolerance = Context.getInstance().tolerance) {
		throw new Error('Implementation not available');
	}

	negate(): Vector3d {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	}

	normalize(): Vector3d {
		const d = this.length();
		if (d === 0) {
			throw new Error('Normalizing a zero vector');
		}
		return this.multiplyByScalar(1 / d);
	}

	multiplyByScalar(s: number): Vector3d {
		this.x *= s; this.y *= s; this.z *= s;
		return this;
	}

	perpVector(): Vector3d {
		if (this.x < 1.0 / 64.0 && this.y < 1.0 / 64.0) {
			return new Vector3d(this.z, 0.0, -this.x);
		}
		return new Vector3d(-this.y, this.x, 0.0);
	}
}
