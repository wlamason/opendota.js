const { OpenDota } = require("../index");
// https://github.com/valentinogagliardi/getting-started-with-jest/blob/master/__tests__/filterByTerm.spec.js
// https://www.valentinog.com/blog/jest/
// https://github.com/sapegin/jest-cheat-sheet

const opendota = new OpenDota();
const EXAMPLE_MATCH = 5634200463;
const EXAMPLE_PLAYER = 111536544;
const EXAMPLE_LEAGUE = 14268;

describe("getMatch", () => {
    test("it should resolve", () => {
        return expect(opendota.getMatch(EXAMPLE_MATCH)).resolves.toBeDefined();
    });
});

describe("getPlayersByRank", () => {
    test("it should resolve", () => {
        return expect(opendota.getPlayersByRank()).resolves.toBeDefined();
    });
});

describe("getPlayer", () => {
    test("it should resolve", () => {
        return expect(opendota.getPlayer(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getWinLoss", () => {
    test("it should resolve", () => {
        return expect(opendota.getWinLoss(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getRecentMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getRecentMatches(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getMatches(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getHeroes", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroes(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getPeers", () => {
    test("it should resolve", () => {
        return expect(opendota.getPeers(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getPros", () => {
    test("it should resolve", () => {
        return expect(opendota.getPros(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getTotals", () => {
    test("it should resolve", () => {
        return expect(opendota.getTotals(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getCounts", () => {
    test("it should resolve", () => {
        return expect(opendota.getCounts(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getHistogram", () => {
    test("it should resolve", () => {
        return expect(opendota.getHistogram(EXAMPLE_PLAYER, "kills")).resolves.toBeDefined();
    });

    test("it should resolve", () => {
        return expect(opendota.getHistogram(EXAMPLE_PLAYER, "last_hits")).resolves.toBeDefined();
    });
});

describe("getWardmap", () => {
    test("it should resolve", () => {
        return expect(opendota.getWardmap(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getWordcloud", () => {
    test("it should resolve", () => {
        return expect(opendota.getWordcloud(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getRating", () => {
    test("it should resolve", () => {
        return expect(opendota.getRating(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getRanking", () => {
    test("it should resolve", () => {
        return expect(opendota.getRanking(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("playersRefresh", () => {
    test("it should resolve", () => {
        return expect(opendota.playersRefresh(EXAMPLE_PLAYER)).resolves.toBeDefined();
    });
});

describe("getProPlayers", () => {
    test("it should resolve", () => {
        return expect(opendota.getProPlayers()).resolves.toBeDefined();
    });
});

describe("getProMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getProMatches()).resolves.toBeDefined();
    });
});

describe("getPublicMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getPublicMatches()).resolves.toBeDefined();
    });
});

describe("getParsedMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getParsedMatches()).resolves.toBeDefined();
    });
});

describe("getExplorer", () => {
    test("it should resolve", () => {
        return expect(opendota.getExplorer({ sql: "SELECT * FROM notable_players;" })).resolves.toBeDefined();
    });
});

describe("getMetadata", () => {
    test("it should resolve", () => {
        return expect(opendota.getMetadata()).resolves.toBeDefined();
    });
});

describe("getDistributions", () => {
    test("it should resolve", () => {
        return expect(opendota.getDistributions()).resolves.toBeDefined();
    });
});

describe("search", () => {
    test("it should resolve", () => {
        return expect(opendota.search({ q: "noob" })).resolves.toBeDefined();
    });
});

describe("getRankings", () => {
    test("it should resolve", () => {
        return expect(opendota.getRankings({ hero_id: 1 })).resolves.toBeDefined();
    });
});

describe("getBenchmarks", () => {
    test("it should resolve", () => {
        return expect(opendota.getBenchmarks({ hero_id: 1 })).resolves.toBeDefined();
    });
});

describe("getStatus", () => {
    test("it should resolve", () => {
        return expect(opendota.getStatus()).resolves.toBeDefined();
    });
});

describe("getHealth", () => {
    test("it should resolve", () => {
        return expect(opendota.getHealth()).resolves.toBeDefined();
    });
});

describe("getFindMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getFindMatches()).resolves.toBeDefined();
    });
});

describe("getHeroes", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroes()).resolves.toBeDefined();
    });
});

describe("getHeroMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroMatches(1)).resolves.toBeDefined();
    });
});

describe("getHeroMatchups", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroMatchups(1)).resolves.toBeDefined();
    });
});

describe("getHeroDurations", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroDurations(1)).resolves.toBeDefined();
    });
});

describe("getHeroPlayers", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroPlayers(1)).resolves.toBeDefined();
    });
});

describe("getHeroItemPopularity", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroItemPopularity(1)).resolves.toBeDefined();
    });
});

describe("getHeroStats", () => {
    test("it should resolve", () => {
        return expect(opendota.getHeroStats()).resolves.toBeDefined();
    });
});

describe("getLeagues", () => {
    test("it should resolve", () => {
        return expect(opendota.getLeagues()).resolves.toBeDefined();
    });
});

describe("getLeague", () => {
    test("it should resolve", () => {
        return expect(opendota.getLeague(EXAMPLE_LEAGUE)).resolves.toBeDefined();
    });
});

describe("getLeagueMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getLeagueMatches(EXAMPLE_LEAGUE)).resolves.toBeDefined();
    });
});

describe("getLeagueTeams", () => {
    test("it should resolve", () => {
        return expect(opendota.getLeagueTeams(EXAMPLE_LEAGUE)).resolves.toBeDefined();
    });
});

describe("getTeams", () => {
    test("it should resolve", () => {
        return expect(opendota.getTeams()).resolves.toBeDefined();
    });
});

describe("getTeam", () => {
    test("it should resolve", () => {
        return expect(opendota.getTeam(2163)).resolves.toBeDefined();
    });
});

describe("getTeamMatches", () => {
    test("it should resolve", () => {
        return expect(opendota.getTeamMatches(2163)).resolves.toBeDefined();
    });
});

describe("getTeamPlayers", () => {
    test("it should resolve", () => {
        return expect(opendota.getTeamPlayers(2163)).resolves.toBeDefined();
    });
});

describe("getTeamHeroes", () => {
    test("it should resolve", () => {
        return expect(opendota.getTeamHeroes(2163)).resolves.toBeDefined();
    });
});

describe("getReplays", () => {
    test("it should resolve", () => {
        return expect(opendota.getReplays({ match_id: [5629900166, 5629803618]})).resolves.toBeDefined();
    });
});

describe("getRecords", () => {
    test("it should resolve", () => {
        return expect(opendota.getRecords("kills")).resolves.toBeDefined();
    });
});

describe("getLive", () => {
    test("it should resolve", () => {
        return expect(opendota.getLive()).resolves.toBeDefined();
    });
});

describe("getItemTimings", () => {
    test("it should resolve", () => {
        return expect(opendota.getItemTimings()).resolves.toBeDefined();
    });
});

describe("getLaneRoles", () => {
    test("it should resolve", () => {
        return expect(opendota.getLaneRoles()).resolves.toBeDefined();
    });
});

describe("getMiscellaneous", () => {
    test("it should resolve", () => {
        return expect(opendota.getMiscellaneous()).resolves.toBeDefined();
    });
});

describe("getSchema", () => {
    test("it should resolve", () => {
        return expect(opendota.getSchema()).resolves.toBeDefined();
    });
});

describe("getConstants", () => {
    test("it should resolve", () => {
        return expect(opendota.getConstants("heroes")).resolves.toBeDefined();
    });
});
