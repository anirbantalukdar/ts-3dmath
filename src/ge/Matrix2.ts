import {Point2d} from './Point2d';

const f32 = Math.round;

export class Matrix2 {
	public m = [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1]
	];

	public static translation(dx: number, dy: number): Matrix2 {
		const mat = new Matrix2();
		mat.m[0][2] = dx;
		mat.m[1][2] = dy;
		return mat;
	}

	public setIdentity(): void {
		console.log('identity');
		console.log(this.m);
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (i === j) {
					this.m[i][j] = 1.0;
				} else {
					this.m[i][j] = 0.0;
				}
			}
		}
		console.log(this.m);
	}
	
	public entry(row: number, col: number): number {
		return this.m[row][col];
	}
	
	constructor(mat?: Matrix2) {
		if (mat) {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					this.m[i][j] = mat.m[i][j];
				}
			}
		}
	}

	public multiplyBy(mat2: Matrix2): Matrix2 {
		const tmp = new Matrix2();
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				tmp.m[i][j] = 0;
				for (let k = 0; k < 3; k++) {
					tmp.m[i][j] += this.m[i][k] * mat2.m[k][j];
				}
			}
		}
		this.m = tmp.m;
		return this;
	}

	public det(): number {
		return this.m[0][0] * (this.m[1][1] * this.m[2][2] - this.m[2][1] * this.m[1][2])
			- this.m[0][1] * (this.m[1][0] * this.m[2][2] - this.m[2][0] * this.m[1][2])
			+ this.m[0][2] * (this.m[1][0] * this.m[2][1] - this.m[2][0] * this.m[1][1]);
	}

	public transformBy(a: number, b: number, c: number, d: number, e: number, f: number): Matrix2 {
		const mat = new Matrix2();
		mat.m = [
			[a, b, c],
			[d, e, f],
			[0, 0, 1]
		];
		mat.multiplyBy(this);
		for(let i=0; i<3; i++){
			for(let j=0; j<3; j++){
				this.m[i][j] = mat.m[i][j];
			}
		}
		return this;
	}

	public inverse(): Matrix2 {
		const d = this.det();
		const minr = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1]
		];
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let row0 = (i + 1) % 3;
				let row1 = (i + 2) % 3;
				let col0 = (j + 1) % 3;
				let col1 = (j + 2) % 3;
				let min = row0 < row1 ? row0 : row1;
				let max = row0 > row1 ? row0 : row1;
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

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				this.m[i][j] = minr[i][j] / d;
			}
		}
		return this;
	}

	translateBy(dx: number, dy: number): Matrix2 {
		this.m[0][2] += dx;
		this.m[1][2] += dy;
		return this;
	}


	scaling(scale: number, refPoint?: Point2d): Matrix2 {
		if (!refPoint) {
			refPoint = Point2d.kOrigin;
		}
		const mat = Matrix2.translation(refPoint.x, refPoint.y);
		const scaleMat = new Matrix2();
		scaleMat.m[0][0] = scaleMat.m[1][1] = scale;
		const revTransMat = Matrix2.translation(-refPoint.x, -refPoint.y);
		mat.multiplyBy(scaleMat).multiplyBy(revTransMat);
		return mat;
	}

	public getScale(): number {
		return this.m[0][0];
	}
	
	private swap(value: number[][], index0: number, index1: number) {
		const k = value[index0][index1];
		value[index0][index1] = value[index1][index0];
		value[index1][index0] = k;
	}
}
