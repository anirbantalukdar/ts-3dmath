import { Point2 } from './Point2';
export declare class Matrix2 {
    m: number[][];
    static translation(dx: number, dy: number): Matrix2;
    setIdentity(): void;
    entry(row: number, col: number): number;
    constructor(mat?: Matrix2);
    multiplyBy(mat2: Matrix2): Matrix2;
    det(): number;
    transformBy(a: number, b: number, c: number, d: number, e: number, f: number): Matrix2;
    inverse(): Matrix2;
    translateBy(dx: number, dy: number): Matrix2;
    scaling(scale: number, refPoint?: Point2): Matrix2;
    getScale(): number;
    private swap;
}
