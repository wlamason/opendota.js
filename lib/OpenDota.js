const https = require("https");
const querystring = require("querystring");
const TokenBucket = require("./TokenBucket")

class OpenDota {
    HOSTNAME = "api.opendota.com";
    BASEPATH = "/api";

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.tokenBucket = this.apiKey ? new TokenBucket(1200, 1200, "min") : new TokenBucket(60, 60, "min");
    }

    apiRequest(path, method, queryParameters = null) {
        return new Promise((resolve, reject) => {
            if (!this.tokenBucket.take())
                reject("API rate limit exceeded.");
            
            let fullPath = this.BASEPATH;

            if (queryParameters && this.apiKey) {
                fullPath = `${fullPath}${path}?${querystring.stringify({ api_key: this.apiKey, ...queryParameters })}`;
            } else if (this.apiKey) {
                fullPath = `${fullPath}${path}?${querystring.stringify({ api_key: this.apiKey })}`;
            } else if (queryParameters) {
                fullPath = `${fullPath}${path}?${querystring.stringify(queryParameters)}`;
            }

            https.request({
                hostname: this.HOSTNAME,
                method: method,
                path: fullPath
            }, (response) => {
                let data = "";

                // A chunk of data has been recieved.
                response.on("data", (chunk) => {
                    data = data + chunk;
                });

                // The whole response has been received.
                response.on("end", () => {
                    resolve(JSON.parse(data));
                });

                // Error retrieving the response.
                response.on("error", (err) => {
                    reject(`HTTP request failed to retrieve a response: ${err.message}`);
                });
            }).end();
        });
    }

    getMatch(match_id) {
       return this.apiRequest(`/matches/${match_id}`, "GET");
    }

    getPlayersByRank() {
        return this.apiRequest("/playersByRank", "GET");
    }

    getPlayer(account_id) {
        return this.apiRequest(`/players/${account_id}`, "GET");
    }

    getWinLoss(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/wl`, "GET", queryParameters);
    }

    getRecentMatches(account_id) {
        return this.apiRequest(`/players/${account_id}/recentMatches`, "GET");
    }

    getMatches(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/matches`, "GET", queryParameters);
    }

    getHeroes(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/heroes`, "GET", queryParameters);
    }

    getPeers(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/peers`, "GET", queryParameters);
    }

    getPros(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/pros`, "GET", queryParameters);
    }

    getTotals(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/totals`, "GET", queryParameters);
    }

    getCounts(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/counts`, "GET", queryParameters);
    }

    getHistogram(account_id, field, queryParameters) {
        return this.apiRequest(`/players/${account_id}/histograms/${field}`, "GET", queryParameters);
    }

    getWardmap(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/wardmap`, "GET", queryParameters);
    }

    getWordcloud(account_id, queryParameters) {
        return this.apiRequest(`/players/${account_id}/wordcloud`, "GET", queryParameters);
    }

    getRating(account_id) {
        return this.apiRequest(`/players/${account_id}/ratings`, "GET");
    }

    getRanking(account_id) {
        return this.apiRequest(`/players/${account_id}/rankings`, "GET");
    }

    playersRefresh(account_id) {
        return this.apiRequest(`/players/${account_id}/refresh`, "POST");
    }

    getProPlayers() {
        return this.apiRequest("/proPlayers", "GET");
    }
    
    getProMatches(queryParameters) {
        return this.apiRequest("/proMatches", "GET", queryParameters);
    }

    getPublicMatches(queryParameters) {
        return this.apiRequest("/publicMatches", "GET", queryParameters);
    }

    getParsedMatches(queryParameters) {
        return this.apiRequest("/parsedMatches", "GET", queryParameters);
    }

    getExplorer(queryParameters) {
        return this.apiRequest("/explorer", "GET", queryParameters);
    }

    getMetadata() {
        return this.apiRequest("/metadata", "GET");
    }

    getDistributions() {
        return this.apiRequest("/distributions", "GET");
    }

    getSearch(queryParameters) {
        return this.apiRequest("/search", "GET", queryParameters);
    }

    getRankings(queryParameters) {
        return this.apiRequest("/rankings", "GET", queryParameters);
    }

    getBenchmarks(queryParameters) {
        return this.apiRequest("/benchmarks", "GET", queryParameters);
    }

    getStatus() {
        return this.apiRequest("/status", "GET");
    }

    getHealth() {
        return this.apiRequest("/health", "GET");
    }

    getRequest(jobId) {
        return this.apiRequest(`/request/${jobId}`, "GET");
    }

    postRequest(match_id) {
        return this.apiRequest(`/request/${match_id}`, "POST");
    }

    getFindMatches(queryParameters) {
        return this.apiRequest("/findMatches", "GET", queryParameters);
    }

    getHeroes() {
        return this.apiRequest("/heroes", "GET");
    }

    getHeroMatches(hero_id) {
        return this.apiRequest(`/heroes/${hero_id}/matches`, "GET");
    }

    getHeroMatchups(hero_id) {
        return this.apiRequest(`/heroes/${hero_id}/matchups`, "GET");
    }

    getHeroDurations(hero_id) {
        return this.apiRequest(`/heroes/${hero_id}/durations`, "GET");
    }

    getHeroPlayers(hero_id) {
        return this.apiRequest(`/heroes/${hero_id}/players`, "GET");
    }

    getHeroItemPopularity(hero_id) {
        return this.apiRequest(`/heroes/${hero_id}/itemPopularity`, "GET");
    }

    getHeroStats() {
        return this.apiRequest("/heroStats", "GET");
    }

    getLeagues() {
        return this.apiRequest("/leagues", "GET");
    }

    getTeams() {
        return this.apiRequest("/teams", "GET");
    }

    getTeam(team_id) {
        return this.apiRequest(`/teams/${team_id}`, "GET");
    }

    getTeamMatches(team_id) {
        return this.apiRequest(`/teams/${team_id}/matches`, "GET");
    }

    getTeamPlayers(team_id) {
        return this.apiRequest(`/teams/${team_id}/players`, "GET");
    }

    getTeamHeroes(team_id) {
        return this.apiRequest(`/teams/${team_id}/heroes`, "GET");
    }

    getReplays(queryParameters) {
        return this.apiRequest("/replays", "GET", queryParameters);
    }

    getRecords(field) {
        return this.apiRequest(`/records/${field}`, "GET");
    }

    getLive() {
        return this.apiRequest("/live", "GET");
    }

    getItemTimings(queryParameters) {
        return this.apiRequest("/scenarios/itemTimings", "GET", queryParameters);
    }

    getLaneRoles(queryParameters) {
        return this.apiRequest("/scenarios/laneRoles", "GET", queryParameters);
    }

    getMiscellaneous(queryParameters) {
        return this.apiRequest("/scenarios/misc", "GET", queryParameters);
    }

    getSchema() {
        return this.apiRequest("/schema", "GET");
    }

    getConstants(resource) {
        return this.apiRequest(`/constants/${resource}`, "GET");
    }
}

module.exports = OpenDota;
