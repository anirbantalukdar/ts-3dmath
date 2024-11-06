import {Point2} from './Point2d';

export class Bound2 {
	private m_Min: Point2;
	private m_Max: Point2;

	constructor() {
		this.m_Min = new Point2(999999, 999999);
		this.m_Max = new Point2(-99999, -99999);
	}

	addPoint(pt: Point2): Bound2 {
		if (pt.x < this.m_Min.x) {
			this.m_Min.x = pt.x;
		}
		if (pt.y < this.m_Min.y) {
			this.m_Min.y = pt.y;
		}

		if (pt.x > this.m_Max.x) {
			this.m_Max.x = pt.x;
		}
		if (pt.y > this.m_Max.y) {
			this.m_Max.y = pt.y;
		}
		return this;
	}

	public getMin(): Point2 {
		return new Point2(this.m_Min);
	}

	public getMax(): Point2 {
		return new Point2(this.m_Max);
	}
}