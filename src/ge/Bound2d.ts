import {Point2d} from './Point2d';

export class Bound2d {
	private m_Min: Point2d;
	private m_Max: Point2d;

	constructor() {
		this.m_Min = new Point2d(Infinity, Infinity);
		this.m_Max = new Point2d(-Infinity, -Infinity);
	}

	addPoint(pt: Point2d): Bound2d {
		if (pt.x < this.m_Min.x) this.m_Min.x = pt.x;
		if (pt.y < this.m_Min.y) this.m_Min.y = pt.y;
		if (pt.x > this.m_Max.x) this.m_Max.x = pt.x;
		if (pt.y > this.m_Max.y) this.m_Max.y = pt.y;
		return this;
	}

	public getMin(): Point2d {
		return new Point2d(this.m_Min);
	}

	public getMax(): Point2d {
		return new Point2d(this.m_Max);
	}

	public contains(pt: Point2d) : boolean {
        if(pt.x < this.m_Min.x || pt.x > this.m_Max.x) return false;
        if(pt.y < this.m_Min.y || pt.y > this.m_Max.y) return false;
        return true;
    }

    public extend(pt: Point2d) : void {
        this.addPoint(pt);
    }

    public isDisjoint(bBox: Bound2d): boolean {
        if(this.contains(bBox.getMin())){
            return true;
        }
        if(this.contains(bBox.getMax())){
            return true;
        }
        return false;
    }
}