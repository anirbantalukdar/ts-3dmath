import {Context} from './Context';
import {Matrix2} from './Matrix2';
import {Tolerance} from './Tolerance';
import {Vector2} from './Vector2d';

const f32 = Math.round;

export class Point2 {
	public static readonly kOrigin = new Point2(0.0, 0.0);

	public x: number;
	public y: number;

	constructor(x?: number | Point2, y?: number) {
		if (arguments.length === 0) {
			this.x = this.y = 0;
		} else if (arguments.length === 1) {
			const pt = x as Point2;
			this.x = pt.x;
			this.y = pt.y;
		} else if (arguments.length === 2) {
			this.x = f32(x as number);
			this.y = f32(y);
		}
	}

	public getX(): number {
		return this.x;
	}

	public getY(): number {
		return this.y;
	}

	public setX(x: number): void {
		this.x = x;
	}

	public setY(y: number): void {
		this.y = y;
	}
	
	public clone(): Point2 {
		return new Point2(this.x, this.y);
	}

	public set(x: number, y: number): void {
		this.x = f32(x);
		this.y = f32(y);
	}

	public distanceTo(pt: Point2): number {
		const xDiff = this.x - pt.x;
		const yDiff = this.y - pt.y;
		return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
	}

	public subtract(pt: Point2): Vector2 {
		return new Vector2(this.x - pt.x, this.y - pt.y);
	}

	public addVector(vec: Vector2): Point2 {
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}

	public getAddVector(vec: Vector2): Point2 {
		return new Point2(this.x, this.y).addVector(vec);
	}

	public transformBy(xform: Matrix2): void {
		const x = xform.entry(0, 0) * this.x + xform.entry(0, 1) * this.y + xform.entry(0, 2) * 1.0;
		const y = xform.entry(1, 0) * this.x + xform.entry(1, 1) * this.y + xform.entry(1, 2) * 1.0;
		const w = xform.entry(2, 0) * this.x + xform.entry(2, 1) * this.y + xform.entry(2, 2) * 1.0;
		this.x = x / w;
		this.y = y / w;
	}

	public getTransformBy(xform: Matrix2): Point2 {
		let result = new Point2(this.x, this.y);
		result.transformBy(xform);
		return result;
	}
}
