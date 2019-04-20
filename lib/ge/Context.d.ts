import { Tolerance } from './Tolerance';
export declare class Context {
    private constructor();
    private static s_Instance;
    readonly tolerance: Tolerance;
    static getInstance(): Context;
}
