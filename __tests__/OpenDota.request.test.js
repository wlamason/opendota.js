const { EventEmitter } = require("events");

jest.mock("https", () => ({
    request: jest.fn()
}));

const https = require("https");
const { OpenDota } = require("../index");

function parseErrorMessage(body) {
    try {
        JSON.parse(body);
    } catch (err) {
        return err.message;
    }
    throw new Error("expected body to be invalid JSON");
}

function mockResponse({ chunks, statusCode }) {
    https.request.mockImplementation((options, callback) => {
        const request = new EventEmitter();
        request.end = () => {
            const response = new EventEmitter();
            if (statusCode !== undefined)
                response.statusCode = statusCode;

            callback(response);
            setImmediate(() => {
                for (const chunk of chunks)
                    response.emit("data", chunk);
                response.emit("end");
            });
        };
        return request;
    });
}

describe("apiRequest JSON parsing", () => {
    let uncaught;

    beforeEach(() => {
        https.request.mockReset();
        uncaught = [];
        process.on("uncaughtException", onUncaught);
    });

    afterEach(() => {
        process.removeListener("uncaughtException", onUncaught);
    });

    function onUncaught(err) {
        uncaught.push(err);
    }

    test("rejects with an Error when the response is non-JSON HTML", async () => {
        const html = `<!DOCTYPE html><html><body>Bad gateway ${"x".repeat(240)}</body></html>`;
        mockResponse({
            chunks: [Buffer.from(html.slice(0, 50)), Buffer.from(html.slice(50))],
            statusCode: 403
        });

        const opendota = new OpenDota();
        const error = await opendota.getHealth().catch((err) => err);

        expect(error).toBeInstanceOf(Error);
        expect(typeof error).not.toBe("string");
        expect(error.message).toBe(
            `Failed to parse JSON response: ${parseErrorMessage(html)}. HTTP status 403. Response data: ${html.substring(0, 200)}...`
        );
        expect(error.message).not.toContain(html);
        expect(uncaught).toEqual([]);
    });

    test("omits the ellipsis and status when the body is short and status is unavailable", async () => {
        const html = "<html>upstream proxy error</html>";
        mockResponse({ chunks: [html] });

        const opendota = new OpenDota();
        const error = await opendota.apiRequest("/health", "GET").catch((err) => err);

        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(
            `Failed to parse JSON response: ${parseErrorMessage(html)}. Response data: ${html}`
        );
        expect(uncaught).toEqual([]);
    });

    test("resolves parsed JSON from a successful response", async () => {
        const payload = { status: "ok" };
        const body = JSON.stringify(payload);
        mockResponse({
            chunks: [Buffer.from(body.slice(0, 4)), Buffer.from(body.slice(4))],
            statusCode: 200
        });

        const opendota = new OpenDota();
        await expect(opendota.getHealth()).resolves.toEqual(payload);
        expect(uncaught).toEqual([]);
    });

    test("does not send a request after the rate limiter rejects", async () => {
        https.request.mockImplementation(() => {
            throw new Error("request should not be sent");
        });

        const opendota = new OpenDota();
        opendota.tokenBucket.tokens = 0;

        await expect(opendota.getHealth()).rejects.toBe("API rate limit exceeded.");
        expect(https.request).not.toHaveBeenCalled();
        expect(uncaught).toEqual([]);
    });
});
