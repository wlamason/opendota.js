const TokenBucket = require("../lib/TokenBucket");

describe("TokenBucket", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test.each([
        ["ms", 1],
        ["millisecond", 1],
        ["sec", 1000],
        ["second", 1000],
        ["min", 60 * 1000],
        ["minute", 60 * 1000],
        ["hr", 60 * 60 * 1000],
        ["hour", 60 * 60 * 1000],
        ["day", 24 * 60 * 60 * 1000],
    ])("treats %s as %d milliseconds", (interval, expected) => {
        const bucket = new TokenBucket(5, 5, interval);
        expect(bucket.interval).toBe(expected);
        expect(bucket.tokens).toBe(5);
        expect(bucket.bucketSize).toBe(5);
        expect(bucket.tokensPerInterval).toBe(5);
    });

    test("accepts a numeric interval", () => {
        const bucket = new TokenBucket(5, 5, 250);
        expect(bucket.interval).toBe(250);
    });

    test("rejects an unknown interval string", () => {
        expect(() => new TokenBucket(1, 1, "fortnight")).toThrow(
            "Invaid interval fortnight",
        );
    });

    test("take defaults to one token and can take several", () => {
        jest.spyOn(Date, "now").mockReturnValue(1000000);
        const bucket = new TokenBucket(5, 5, 1000);

        expect(bucket.take()).toBe(true);
        expect(bucket.tokens).toBe(4);
        expect(bucket.take(2)).toBe(true);
        expect(bucket.tokens).toBe(2);
    });

    test("take rejects a count larger than the bucket", () => {
        jest.spyOn(Date, "now").mockReturnValue(1000000);
        const bucket = new TokenBucket(2, 2, 1000);

        expect(bucket.take(3)).toBe(false);
        expect(bucket.tokens).toBe(2);
        expect(bucket.lastFilled).toBe(1000000);
    });

    test("take rejects when the bucket does not have enough tokens", () => {
        jest.spyOn(Date, "now").mockReturnValue(1000000);
        const bucket = new TokenBucket(2, 2, 1000);
        bucket.tokens = 0;

        expect(bucket.take(1)).toBe(false);
        expect(bucket.tokens).toBe(0);
    });

    test("refill adds elapsed tokens without exceeding the bucket", () => {
        let now = 1000000;
        jest.spyOn(Date, "now").mockReturnValue(now);
        const bucket = new TokenBucket(10, 10, 1000);
        bucket.tokens = 0;

        now += 500;
        Date.now.mockReturnValue(now);
        bucket.refill();
        expect(bucket.tokens).toBe(5);
        expect(bucket.lastFilled).toBe(now);

        now += 10000;
        Date.now.mockReturnValue(now);
        bucket.refill();
        expect(bucket.tokens).toBe(10);
    });
});
