import {Context} from './Context';
import {Matrix2} from './Matrix2';
import {Tolerance} from './Tolerance';
import {Vector2d} from './Vector2d';

const f32 = Math.round;

export class Point2d {
	public static readonly kOrigin = new Point2d(0.0, 0.0);

	public x: number;
	public y: number;

	constructor(x?: number | Point2d, y?: number) {
		if (arguments.length === 0) {
			this.x = this.y = 0;
		} else if (arguments.length === 1) {
			const pt = x as Point2d;
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
	
	public clone(): Point2d {
		return new Point2d(this.x, this.y);
	}

	public set(x: number, y: number): void {
		this.x = f32(x);
		this.y = f32(y);
	}

	public distanceTo(pt: Point2d): number {
		const xDiff = this.x - pt.x;
		const yDiff = this.y - pt.y;
		return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
	}

	public subtract(pt: Point2d): Vector2d {
		return new Vector2d(this.x - pt.x, this.y - pt.y);
	}

	public addVector(vec: Vector2d): Point2d{
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}

	public getAddVector(vec: Vector2d): Point2d{
		return new Point2d(this.x, this.y).addVector(vec);
	}

	public scaleBy(scaleFactor: number, wrtpoint: Point2d = Point2d.kOrigin){
		// TODO not satisfied wth this
		let result = new Point2d(this.x, this.y);
		result.x -= wrtpoint.x;
		result.y -= wrtpoint.y;
		result.x *= scaleFactor;
		result.y *= scaleFactor;
		result.x -= -wrtpoint.x;
		result.y -= -wrtpoint.y;
		return result;

	}
	public transformBy(xform: Matrix2): void {
		const x = xform.entry(0, 0) * this.x + xform.entry(0, 1) * this.y + xform.entry(0, 2) * 1.0;
		const y = xform.entry(1, 0) * this.x + xform.entry(1, 1) * this.y + xform.entry(1, 2) * 1.0;
		const w = xform.entry(2, 0) * this.x + xform.entry(2, 1) * this.y + xform.entry(2, 2) * 1.0;
		this.x = x / w;
		this.y = y / w;
	}

	public getTransformBy(xform: Matrix2): Point2d {
		let result = new Point2d(this.x, this.y);
		result.transformBy(xform);
		return result;
	}
}
