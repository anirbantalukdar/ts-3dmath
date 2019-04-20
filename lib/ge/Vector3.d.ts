import { Tolerance } from './Tolerance';
export declare class Vector3 {
    static kXAxis: Vector3;
    static kYAxis: Vector3;
    static kZAxis: Vector3;
    x: number;
    y: number;
    z: number;
    constructor(x?: number | Vector3, y?: number, z?: number);
    set(x: number | Vector3, y?: number, z?: number): Vector3;
    crossProduct(vec: Vector3): Vector3;
    dotProduct(vec: Vector3): number;
    angleTo(vec: Vector3, refVec?: Vector3): number;
    length(): number;
    sqrdLength(): number;
    isCodirectionalTo(vec: Vector3, tolerance?: Tolerance): void;
    negate(): Vector3;
    normalize(): Vector3;
    multiplyByScalar(s: number): Vector3;
    perpVector(): Vector3;
}
