const { OpenDota } = require("../index");

function stubApiRequest(opendota) {
    const calls = [];
    opendota.apiRequest = (path, method, queryParameters) => {
        calls.push({ path, method, queryParameters });
        return Promise.resolve([]);
    };
    return calls;
}

describe("hero endpoints", () => {
    test("getHeroesPlayed requests GET /players/{account_id}/heroes", () => {
        const opendota = new OpenDota();
        const calls = stubApiRequest(opendota);
        const queryParameters = { limit: 5 };

        return opendota.getHeroesPlayed(111536544, queryParameters).then(() => {
            expect(calls).toEqual([
                {
                    path: "/players/111536544/heroes",
                    method: "GET",
                    queryParameters
                }
            ]);
        });
    });

    test("getHeroes requests GET /heroes", () => {
        const opendota = new OpenDota();
        const calls = stubApiRequest(opendota);

        return opendota.getHeroes().then(() => {
            expect(calls).toEqual([
                {
                    path: "/heroes",
                    method: "GET",
                    queryParameters: undefined
                }
            ]);
        });
    });

    test("getHeroesPlayed and getHeroes are distinct methods", () => {
        const opendota = new OpenDota();
        expect(typeof opendota.getHeroesPlayed).toBe("function");
        expect(typeof opendota.getHeroes).toBe("function");
        expect(opendota.getHeroesPlayed).not.toBe(opendota.getHeroes);
    });
});
