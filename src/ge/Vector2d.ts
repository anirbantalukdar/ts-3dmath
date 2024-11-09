const f32 = Math.round;

export class Vector2d {
	public static kXAxis = new Vector2d(1.0, 0.0);
	public static kYAxis = new Vector2d(0.0, 1.0);

	public x: number;
	public y: number;

	constructor(x?: any, y?: any) {
		const v = this;
		if (arguments.length === 2) {
			v.x = f32(x);
			v.y = f32(y);
		} else if (Array.isArray(x)) {
			v.x = f32(x[0]);
			v.y = f32(x[0]);
		} else if (x instanceof Vector2d) {
			v.x = x.x;
			v.y = x.y;
		}
	}

	set(x: number, y: number): Vector2d {
		this.x = f32(x);
		this.y = f32(y);
		return this;
	}

	public length(): number {
		return Math.sqrt(this.sqrdLength());
	}

	public sqrdLength(): number {
		return this.x * this.x + this.y * this.y;
	}

	public angleTo(vec: Vector2d): number {
		let angle = Math.atan2(vec.y, vec.x) - Math.atan2(this.y, this.x);
		if (angle < 0) {
			angle += 2 * Math.PI;
		}
		return angle;
	}

	public normalize(): Vector2d {
		const length = this.length();
		this.x /= length;
		this.y /= length;
		return this;
	}

	public getNormalized(): Vector2d {
		return new Vector2d(this.x, this.y).normalize();
	}

	public multiplyBy(x: number): Vector2d {
		this.x *= x;
		this.y *= x;
		return this;
	}

	public getMultipliedBy(x: number): Vector2d {
		return new Vector2d(this.x, this.y).multiplyBy(x);
	}

	public negate(): Vector2d {
		this.multiplyBy(-1);
		return this;
	}

	public getNegate(): Vector2d {
		return new Vector2d(-this.x, -this.y);
	}
	
	public getPerpVector(){
		return new Vector2d(this.y, -this.x);
	}
	
	public dotProduct(vec: Vector2d): number {
		return this.x * vec.x + this.y * vec.y;
	}
}
