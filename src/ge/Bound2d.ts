import {Point2d} from './Point2d';

export class Bound2d {
	private m_Min: Point2d;
	private m_Max: Point2d;

	constructor() {
		this.m_Min = new Point2d(999999, 999999);
		this.m_Max = new Point2d(-99999, -99999);
	}

	addPoint(pt: Point2d): Bound2d {
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

	public getMin(): Point2d {
		return new Point2d(this.m_Min);
	}

	public getMax(): Point2d {
		return new Point2d(this.m_Max);
	}
}