import { Matrix2 } from './Matrix2';
import { Vector2 } from './Vector2';
export declare class Point2 {
    static readonly kOrigin: Point2;
    x: number;
    y: number;
    constructor(x?: number | Point2, y?: number);
    getX(): number;
    getY(): number;
    setX(x: number): void;
    setY(y: number): void;
    clone(): Point2;
    set(x: number, y: number): void;
    distanceTo(pt: Point2): number;
    subtract(pt: Point2): Vector2;
    addVector(vec: Vector2): Point2;
    getAddVector(vec: Vector2): Point2;
    transformBy(xform: Matrix2): void;
    getTransformBy(xform: Matrix2): Point2;
}
