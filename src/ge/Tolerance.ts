export class Tolerance {
	public m_EqualPoint: number = 0.000001;
	public m_EqualVector: number = 0.000001;

	equalPoint(): number {
		return this.m_EqualPoint;
	}

	equalVector(): number {
		return this.m_EqualVector;
	}

	setEqualPoint(equalPoint: number): void {
		this.m_EqualPoint = equalPoint;
	}

	setEqualVector(equalVector: number): void {
		this.m_EqualVector = equalVector;
	}
}