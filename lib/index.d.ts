declare type Policy = string;
declare type Miniscript = string;
export declare function compilePolicy(policy: Policy): Promise<{
    ms: any;
    cost: any;
    asm: any;
}>;
export declare function analyzeMiniscript(miniscript: Miniscript): Promise<{
    analyzeOut: any;
    asmOut: any;
}>;
export {};
//# sourceMappingURL=index.d.ts.map