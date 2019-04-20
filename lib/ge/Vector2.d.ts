export declare class Vector2 {
    static kXAxis: Vector2;
    static kYAxis: Vector2;
    x: number;
    y: number;
    constructor(x?: any, y?: any);
    set(x: number, y: number): Vector2;
    length(): number;
    sqrdLength(): number;
    angleTo(vec: Vector2): number;
    normalize(): Vector2;
    getNormalized(): Vector2;
    multiplyBy(x: number): Vector2;
    getMultipliedBy(x: number): Vector2;
    negate(): Vector2;
    getNegate(): Vector2;
    getPerpVector(): Vector2;
    dotProduct(vec: Vector2): number;
}
