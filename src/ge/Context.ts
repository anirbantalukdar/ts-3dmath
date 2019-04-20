import { Tolerance } from './Tolerance';

export class Context {
	private constructor(){

	}

	private static s_Instance: Context = new Context();
	public readonly tolerance: Tolerance = new Tolerance();
	
	public static getInstance(){
		return Context.s_Instance;
	}

}
