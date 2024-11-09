import { Point2d } from "./Point2d";
import { Point3d } from "./Point3d";

export class Bound3d {
    private m_Min  =  new Point3d(Infinity, Infinity, Infinity);
    private m_Max = new Point3d(-Infinity, -Infinity, -Infinity);

    addPoint(pt: Point3d): Bound3d {
        if(pt.x < this.m_Min.x) this.m_Min.x = pt.x;
        if(pt.y < this.m_Min.y) this.m_Min.y = pt.y;
        if(pt.x < this.m_Min.z) this.m_Min.z = pt.z;
        if(pt.x > this.m_Max.x) this.m_Max.x = pt.x;
        if(pt.y > this.m_Max.y) this.m_Max.y = pt.y;
        if(pt.x > this.m_Max.z) this.m_Max.z = pt.z;

        return this;
    }

    public getMin() : Point3d {
        return this.m_Min;
    }

    public getMax(): Point3d {
        return this.m_Max;
    }

    public contains(pt: Point3d) : boolean {
        if(pt.x < this.m_Min.x || pt.x > this.m_Max.x) return false;
        if(pt.y < this.m_Min.y || pt.y > this.m_Max.y) return false;
        if(pt.z < this.m_Min.z || pt.z > this.m_Max.z) return false;
        return true;
    }

    public extend(pt: Point3d) : void {
        this.addPoint(pt);
    }

    public isDisjoint(bBox: Bound3d): boolean {
        if(this.contains(bBox.getMin())){
            return true;
        }
        if(this.contains(bBox.getMax())){
            return true;
        }
        return false;
    }

    
}