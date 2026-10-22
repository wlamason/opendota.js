const { OpenDota } = require("../index");

const query = { limit: 1 };

const endpoints = [
    ["getMatch", [123], "/matches/123", "GET", undefined],
    ["getPlayersByRank", [], "/playersByRank", "GET", undefined],
    ["getPlayer", [42], "/players/42", "GET", undefined],
    ["getWinLoss", [42, query], "/players/42/wl", "GET", query],
    ["getRecentMatches", [42], "/players/42/recentMatches", "GET", undefined],
    ["getMatches", [42, query], "/players/42/matches", "GET", query],
    ["getHeroesPlayed", [42, query], "/players/42/heroes", "GET", query],
    ["getPeers", [42, query], "/players/42/peers", "GET", query],
    ["getPros", [42, query], "/players/42/pros", "GET", query],
    ["getTotals", [42, query], "/players/42/totals", "GET", query],
    ["getCounts", [42, query], "/players/42/counts", "GET", query],
    [
        "getHistogram",
        [42, "kills", query],
        "/players/42/histograms/kills",
        "GET",
        query,
    ],
    ["getWardmap", [42, query], "/players/42/wardmap", "GET", query],
    ["getWordcloud", [42, query], "/players/42/wordcloud", "GET", query],
    ["getRating", [42], "/players/42/ratings", "GET", undefined],
    ["getRanking", [42], "/players/42/rankings", "GET", undefined],
    ["playersRefresh", [42], "/players/42/refresh", "POST", undefined],
    ["getProPlayers", [], "/proPlayers", "GET", undefined],
    ["getProMatches", [query], "/proMatches", "GET", query],
    ["getPublicMatches", [query], "/publicMatches", "GET", query],
    ["getParsedMatches", [query], "/parsedMatches", "GET", query],
    ["getExplorer", [query], "/explorer", "GET", query],
    ["getMetadata", [], "/metadata", "GET", undefined],
    ["getDistributions", [], "/distributions", "GET", undefined],
    ["search", [query], "/search", "GET", query],
    ["getRankings", [query], "/rankings", "GET", query],
    ["getBenchmarks", [query], "/benchmarks", "GET", query],
    ["getStatus", [], "/status", "GET", undefined],
    ["getHealth", [], "/health", "GET", undefined],
    ["getRequest", ["job-1"], "/request/job-1", "GET", undefined],
    ["postRequest", [99], "/request/99", "POST", undefined],
    ["getFindMatches", [query], "/findMatches", "GET", query],
    ["getHeroes", [], "/heroes", "GET", undefined],
    ["getHeroMatches", [1], "/heroes/1/matches", "GET", undefined],
    ["getHeroMatchups", [1], "/heroes/1/matchups", "GET", undefined],
    ["getHeroDurations", [1], "/heroes/1/durations", "GET", undefined],
    ["getHeroPlayers", [1], "/heroes/1/players", "GET", undefined],
    [
        "getHeroItemPopularity",
        [1],
        "/heroes/1/itemPopularity",
        "GET",
        undefined,
    ],
    ["getHeroStats", [], "/heroStats", "GET", undefined],
    ["getLeagues", [], "/leagues", "GET", undefined],
    ["getTeams", [], "/teams", "GET", undefined],
    ["getTeam", [2163], "/teams/2163", "GET", undefined],
    ["getTeamMatches", [2163], "/teams/2163/matches", "GET", undefined],
    ["getTeamPlayers", [2163], "/teams/2163/players", "GET", undefined],
    ["getTeamHeroes", [2163], "/teams/2163/heroes", "GET", undefined],
    ["getReplays", [query], "/replays", "GET", query],
    ["getRecords", ["kills"], "/records/kills", "GET", undefined],
    ["getLive", [], "/live", "GET", undefined],
    ["getItemTimings", [query], "/scenarios/itemTimings", "GET", query],
    ["getLaneRoles", [query], "/scenarios/laneRoles", "GET", query],
    ["getMiscellaneous", [query], "/scenarios/misc", "GET", query],
    ["getSchema", [], "/schema", "GET", undefined],
    ["getConstants", ["heroes"], "/constants/heroes", "GET", undefined],
];

describe("endpoint methods", () => {
    test.each(endpoints)(
        "%s calls apiRequest",
        (method, args, path, httpMethod, queryParameters) => {
            const opendota = new OpenDota();
            const calls = [];
            opendota.apiRequest = (
                requestPath,
                requestMethod,
                requestQuery,
            ) => {
                calls.push({
                    path: requestPath,
                    method: requestMethod,
                    queryParameters: requestQuery,
                });
                return Promise.resolve({ ok: true });
            };

            return opendota[method](...args).then((result) => {
                expect(result).toEqual({ ok: true });
                expect(calls).toEqual([
                    { path, method: httpMethod, queryParameters },
                ]);
            });
        },
    );
});
