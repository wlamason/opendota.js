class TokenBucket {
    constructor(bucketSize, tokensPerInterval, interval) {
        this.bucketSize = bucketSize;
        this.tokensPerInterval = tokensPerInterval;

        if (typeof interval === "string") {
            switch (interval) {
                case "ms":
                case "millisecond":
                    this.interval = 1;
                    break;
                case "sec":
                case "second":
                    this.interval = 1000;
                    break;
                case "min":
                case "minute":
                    this.interval = 1000 * 60;
                    break;
                case "hr":
                case "hour":
                    this.interval = 1000 * 60 * 60;
                    break;
                case "day":
                    this.interval = 1000 * 60 * 60 * 24;
                    break;
                default:
                    throw new Error("Invaid interval " + interval);
            }
        } else {
            this.interval = interval;
        }

        this.lastFilled = Date.now();
        this.tokens = bucketSize;
    }

    take(count = 1) {
        // Make sure the bucket can hold the requested number of tokens
        if (count > this.bucketSize)
            return false;

        // Calculate how many tokens (if any) should be added since the last request
        this.refill();

        // If we don't have enough tokens in this bucket, return false
        if (count > this.tokens)
            return false;

        this.tokens = this.tokens - count;
        return true;
    }

    refill() {
        const now = Date.now();
        //Math.floor() ?
        const credits = (now - this.lastFilled) * (this.tokensPerInterval / this.interval);

        this.tokens = Math.min(this.bucketSize, this.tokens + credits);
        this.lastFilled = now;
    }
}

module.exports = TokenBucket;
