import { Point2 } from './Point2';
export declare class Bound2 {
    private m_Min;
    private m_Max;
    constructor();
    addPoint(pt: Point2): Bound2;
    getMin(): Point2;
    getMax(): Point2;
}
