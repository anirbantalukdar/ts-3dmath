import { Vector3 } from './Vector3';
import { Point3 } from './Point3';
import { Tolerance } from './Tolerance';
export declare class Matrix3 {
    static readonly kIdentity: Readonly<Matrix3>;
    values: Float32Array;
    constructor(otherMat?: Matrix3);
    static rotateByXAxis(angle: number): Matrix3;
    static rotateByYAxis(angle: number): Matrix3;
    static rotateByZAxis(angle: number): Matrix3;
    static rotation(angle: number, refAxis: Vector3, center?: Point3): Matrix3;
    getCoordinateSystem(origin: Point3, xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix3;
    isEqualTo(mat: Matrix3, tol?: Tolerance): boolean;
    setElementAt(row: number, col: number, value: number): Matrix3;
    getElementAt(row: number, col: number): number;
}
