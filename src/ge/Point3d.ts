import {Context} from './Context';
import {Tolerance} from './Tolerance';

const f32 = Math.round;
export class Point3d {
	public static readonly kOrigin = new Point3d(0.0, 0.0, 0.0);

	public x: number;
	public y: number;
	public z: number;

	constructor(x?: number | Point3d, y?: number, z?: number) {
		if (arguments.length === 0) {
			this.x = this.y = this.z = f32(0.0);
		} else if (arguments.length === 1) {
			const pt = x as Point3d;
			this.x = pt.x;
			this.y = pt.y;
			this.z = pt.z;
		} else if (arguments.length === 3) {
			this.x = f32(x as number);
			this.y = f32(y);
			this.z = f32(z);
		}
	}
}