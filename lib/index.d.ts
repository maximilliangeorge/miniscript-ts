export declare class Policy {
    instance: any;
    constructor();
    init(): Promise<void>;
    compile(src: string): {
        ms: any;
        cost: any;
        asm: any;
    };
    analyze(src: string): {
        ms: any;
        cost: any;
        asm: any;
    };
}
//# sourceMappingURL=index.d.ts.map