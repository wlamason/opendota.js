import 'request';


//Object of functions that return formatted endpoints
const METHODS = {
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

//Takes endpoint, builds query string, returns the output of the request
function apiRequest(action, { queryParams }) {
    const options = {
        url: `https://api.opendota.com/api${action.endpoint}`,
        method: action.type,
        qs: queryParams,
    };

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body));
        });
    });
}

//Routes exposed method, builds request, returns request
function action(action, method, params) {
    const methodToCall = this.METHODS[action][method](params);
    return this.apiRequest(methodToCall, params);
}

//Exposed API functions
export function matches(method, params) {
    return this.action('matches', method, params);
}

export function players(method, params) {
    return this.action('players', method, params);
}

export function pros(method, params) {
    return this.action('pros', method, params);
}

export function publicMatches(method, params) {
    return this.action('publicMatches', method, params);
}

export function explorer(method, params) {
    return this.action('explorer', method, params);
}

export function metadata(method, params) {
    return this.action('metadata', method, params);
}

export function distributions(method, params) {
    return this.action('distributions', method, params);
}

export function search(method, params) {
    return this.action('search', method, params);
}

export function rankings(method, params) {
    return this.action('rankings', method, params);
}

export function benchmarks(method, params) {
    return this.action('benchmarks', method, params);
}

export function status(method, params) {
    return this.action('status', method, params);
}

export function health(method, params) {
    return this.action('health', method, params);
}

export function request(method, params) {
    return this.action('request', method, params);
}

export function heroes(method, params) {
    return this.action('heroes', method, params);
}

export function heroStats(method, params) {
    return this.action('heroStats', method, params);
}

export function leagues(method, params) {
    return this.action('leagues', method, params);
}

export function teams(method, params) {
    return this.action('teams', method, params);
}

export function replays(method, params) {
    return this.action('replays', method, params);
}

export function records(method, params) {
    return this.action('records', method, params);
}

export function live(method, params) {
    return this.action('live', method, params);
}

export function schema(method, params) {
    return this.action('schema', method, params);
}