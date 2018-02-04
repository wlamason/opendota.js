import 'request';

class OpenDotaAPI {
    constructor() {
        this.methods = {
            matches: {
                getMatch({ match_id }) {
                    return { type: 'GET', endpoint: `/matches/${match_id}` };
                },
            },
            players: {
                getPlayer({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}` };                    
                },
                getWinLoss({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/wl` };                    
                },
                getRecentMatches({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/recentMatches` };                    
                },
                getMatches({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/matches` };                    
                },
                getHeroes({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/heroes` };
                },
                getPeers({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/peers` };
                },
                getPros({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/pros` };
                },
                getTotals({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/totals` };
                },
                getCounts({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/counts` };
                },
                getHistogram({ account_id, field }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/histograms/${field}` };
                },
                getWardmap({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/wardmap` };
                },
                getWordcloud({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/wordcloud` };
                },
                getRating({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/ratings` };
                },
                getRanking({ account_id }) {
                    return { type: 'GET', endpoint: `/players/${account_id}/rankings` };
                },
                playersRefresh({ account_id }) {
                    return { type: 'POST', endpoint: `/players/${account_id}/refresh` };
                },
            },
            pros: {
                getProPlayers() {
                    return { type: 'GET', endpoint: `/proPlayers` };
                },
                getProMatches() {
                    return { type: 'GET', endpoint: `/proMatches` };
                },
            },
            publicMatches: {
                getPublicMatches() {
                    return { type: 'GET', endpoint: `/publicMatches` };
                },
            },
            explorer: {
                getExplorer() {
                    return { type: 'GET', endpoint: `/explorer` };
                },
            },
            metadata: {
                getMetadata() {
                    return { type: 'GET', endpoint: `/metadata` };
                },
            },
            distributions: {
                getDistributions() {
                    return { type: 'GET', endpoint: `/distributions` };
                },
            },
            search: {
                getSearch() {
                    return { type: 'GET', endpoint: `/search` };
                },
            },
            rankings: {
                getRankings() {
                    return { type: 'GET}', endpoint: `/rankings` };
                },
            },
            benchmarks: {
                getBenchmarks() {
                    return { type: 'GET', endpoint: `/benchmarks` };
                },
            },
            status: {
                getStatus() {
                    return { type: 'GET', endpoint: `/status` };
                },
            },
            health: {
                getHealth() {
                    return { type: 'GET', endpoint: `/health` };
                },
            },
            request: {
                getRequest({ jobId }) {
                    return { type: 'GET', endpoint: `/request/${jobId}` };
                },
                postRequest({ match_id }) {
                    return { type: 'POST', endpoint: `/request/${match_id}` };
                },
            },
            heroes: {
                getHeroes() {
                    return { type: 'GET', endpoint: `/heroes` };
                },
                getHeroMatches({ hero_id }) {
                    return { type: 'GET', endpoint: `/heroes/${hero_id}/matches` };
                },
                getHeroMatchups({ hero_id }) {
                    return { type: 'GET', endpoint: `/heroes/${hero_id}/matchups` };
                },
                getHeroDurations({ hero_id }) {
                    return { type: 'GET', endpoint: `/heroes/${hero_id}/durations` };
                },
                getHeroPlayers({ hero_id }) {
                    return { type: 'GET', endpoint: `/heroes/${hero_id}/players` };
                },                
            },
            heroStats: {
                getHeroStats() {
                    return { type: 'GET', endpoint: `/heroStats` };
                },
            },
            leagues: {
                getLeagues() {
                    return {  type: 'GET', endpoint: `/leagues` };
                },
            },
            teams: {
                getTeams() {
                    return { type: 'GET', endpoint: `/teams` };
                },
                getTeam({ team_id }) {
                    return { type: 'GET', endpoint: `/teams/${team_id}` };
                },
                getTeamMatches({ team_id }) {
                    return { type: 'GET', endpoint: `/teams/${team_id}/matches` };
                },
                getTeamPlayers({ team_id }) {
                    return { type: 'GET', endpoint: `/teams/${team_id}/players` };
                },
                getTeamHeroes({ team_id }) {
                    return { type: 'GET', endpoint: `/teams/${team_id}/heroes` };
                },
            },
            replays: {
                getReplays() {
                    return { type: 'GET', endpoint: `/replays` };
                },
            },
            records: {
                getRecords({ field }) {
                    return { type: 'GET', endpoint: `/records/${field}` };
                },
            },
            live: {
                getLive() {
                    return { type: 'GET', endpoint: `/live` };
                },
            },
            schema: {
                getSchema() {
                    return { type: 'GET', endpoint: `/schema` };
                },
            },
        }
    }

 
 
    //Build the request - QUERY - parameters
    //Re-write
    buildRequestArguments(type, params) {
        const payload = { auth: `mailchimp:${this.apiKey}` };
    
        if (type === 'GET') {
          payload.params = params || {};
        } else {
          payload.data = params || {};
        }
    
        return payload;
    }

    //Needs to be fit with request rather than Metoer's request
    //Build final request with HTTP method (type), base endpoint, action/methodToCall, and paramaters of request
    apiRequest(action, params) {
        const type = action.type;
        const url = `https://api.opendota.com/api${action.endpoint}`;
        //Probably just need to pass params (no type) and make a query string with es6 string literals
        const args = this.buildRequestArguments(type, params);
        //Need to use request instead of meteor/request
        const request = HTTP.call(type, url, args);
        //Need equivalent error return
        if (request.error) return request.error;
        return request;
    }

    //Action: Players - Method: WinLoss - Params: steam32id queryParams
    //Code reuse in building the request from this.methods object
    action(action, method, params) {
        const methodToCall = this.methods[action][method](params);
        return this.apiRequest(methodToCall, params);
    }

    //Different methods to be exposed and consumed (GET /matches/{match_id}, GET /players/{account_id}, etc)
    //Look into default for method
    lists(method, params) {
        return this.action('lists', method, params);
    }

    matches(method, params) {
        return this.action('matches', method, params);
    }

    players(method, params) {
        return this.action('players', method, params);
    }

    pros(method, params) {
        return this.action('pros', method, params);
    }

    publicMatches(method, params) {
        return this.action('publicMatches', method, params);
    }

    explorer(method, params) {
        return this.action('explorer', method, params);
    }

    metadata(method, params) {
        return this.action('metadata', method, params);
    }

    distributions(method, params) {
        return this.action('distributions', method, params);
    }
    
    search(method, params) {
        return this.action('search', method, params);
    }
    
    rankings(method, params) {
        return this.action('rankings', method, params);
    }
    
    benchmarks(method, params) {
        return this.action('benchmarks', method, params);
    }
    
    status(method, params) {
        return this.action('status', method, params);
    }
    
    health(method, params) {
        return this.action('health', method, params);
    }
    
    request(method, params) {
        return this.action('request', method, params);
    }
    
    heroes(method, params) {
        return this.action('heroes', method, params);
    }
    
    heroStats(method, params) {
        return this.action('heroStats', method, params);
    }
    
    leagues(method, params) {
        return this.action('leagues', method, params);
    }
    
    teams(method, params) {
        return this.action('teams', method, params);
    }
    
    replays(method, params) {
        return this.action('replays', method, params);
    }
    
    records(method, params) {
        return this.action('records', method, params);
    }
    
    live(method, params) {
        return this.action('live', method, params);
    }
    
    schema(method, params) {
        return this.action('schema', method, params);
    }
}

export const OpenDotaWrapper = new OpenDotaAPI();