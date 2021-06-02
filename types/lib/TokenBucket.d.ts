export = TokenBucket;
declare class TokenBucket {
    constructor(bucketSize: any, tokensPerInterval: any, interval: any);
    bucketSize: any;
    tokensPerInterval: any;
    interval: any;
    lastFilled: number;
    tokens: any;
    take(count?: number): boolean;
    refill(): void;
}
