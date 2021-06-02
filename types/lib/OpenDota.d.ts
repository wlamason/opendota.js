export = OpenDota;
/** Provides access to the OpenDota API */
declare class OpenDota {
    /**
     * Create a new OpenDota object.
     * @param {string} [apiKey] - API key for accessing the OpenDota API. If this is supplied, a 1200 requests per minute rate limiter is created. If not supplied, a 60 requests/minute rate limiter is created.
     */
    constructor(apiKey?: string);
    HOSTNAME: string;
    BASEPATH: string;
    apiKey: string;
    tokenBucket: TokenBucket;
    /**
     * Create a HTTP request to the OpenDota API. I do not recommend using this raw method directly, but rather the abstractions provided by opendota.js
     * @param {string} path - Endpoint path.
     * @param {string} method - HTTP method.
     * @param {object} queryParameters - Query parameters to be processed by <pre><code>querystring.stringify(queryParameters)</code></pre>
     * @returns {Promise} Promise object with the result object of the HTTP request.
     */
    apiRequest(path: string, method: string, queryParameters?: object): Promise<any>;
    /**
     * Match data for a specific match id.
     * @param {number} match_id - ID number of the match assigned by Valve.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /matches/{match_id} in the official {@link https://docs.opendota.com/#tag/matches%2Fpaths%2F~1matches~1%7Bmatch_id%7D%2Fget documentation}.
     */
    getMatch(match_id: number): Promise<any>;
    /**
     * Players ordered by rank/medal tier.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /playersByRank in the official {@link https://docs.opendota.com/#tag/playersByRank%2Fpaths%2F~1playersByRank%2Fget documentation}.
     */
    getPlayersByRank(): Promise<any>;
    /**
     * General player data.
     * @param {number} account_id - Steam32 account ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id} in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D%2Fget documentation}.
     */
    getPlayer(account_id: number): Promise<any>;
    /**
     * Player win/loss count.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/wl in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wl%2Fget documentation}.
     */
    getWinLoss(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Recent matches played.
     * @param {number} account_id - Steam32 account ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/recentMatches in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1recentMatches%2Fget documentation}.
     */
    getRecentMatches(account_id: number): Promise<any>;
    /**
     * Matches played by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @param {string[]} [queryParameters.project] - Fields to project (array).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/matches in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1matches%2Fget documentation}.
     */
    getMatches(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
        project?: string[];
    }): Promise<any>;
    /**
     * Heroes played by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/heroes in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1heroes%2Fget documentation}.
     */
    getHeroes(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Get hero data.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget documentation}.
     */
    getHeroes(): Promise<any>;
    /**
     * Players played with by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/peers in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1peers%2Fget documentation}.
     */
    getPeers(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Pro players played with by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/pros in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1pros%2Fget documentation}.
     */
    getPros(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Totals in stats for player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/totals in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1totals%2Fget documentation}.
     */
    getTotals(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Counts in categories for player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/counts in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1counts%2Fget documentation}.
     */
    getCounts(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Distribution of matches in a single stat.
     * @param {number} account_id - Steam32 account ID.
     * @param {string} field - Field to aggregate on.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/histograms in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1histograms~1%7Bfield%7D%2Fget documentation}.
     */
    getHistogram(account_id: number, field: string, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Wards placed in matches played by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wardmap%2Fget documentation}.
     */
    getWardmap(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Words said/read in matches played by player.
     * @param {number} account_id - Steam32 account ID.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.limit] - Number of matches to limit to.
     * @param {number} [queryParameters.offset] - Number of matches to offset start by.
     * @param {number} [queryParameters.win] - Whether the player won.
     * @param {number} [queryParameters.patch] - Patch ID.
     * @param {number} [queryParameters.game_mode] - Game Mode ID.
     * @param {number} [queryParameters.lobby_type] - Lobby type ID.
     * @param {number} [queryParameters.region] - Region ID.
     * @param {number} [queryParameters.date] - Days previous.
     * @param {number} [queryParameters.lane_role] - Lane Role ID.
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @param {number} [queryParameters.is_radiant] - Whether the player was radiant.
     * @param {number[]} [queryParameters.included_account_id] - Account IDs in the match (array).
     * @param {number[]} [queryParameters.excluded_account_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.with_hero_id] - Hero IDs on the player's team (array).
     * @param {number[]} [queryParameters.against_hero_id] - Hero IDs against the player's team (array).
     * @param {number} [queryParameters.significant] - Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
     * @param {number} [queryParameters.having] - The minimum number of games played, for filtering hero stats.
     * @param {string} [queryParameters.sort] - The field to return matches sorted by in descending order.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/wordcloud in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wordcloud%2Fget documentation}.
     */
    getWordcloud(account_id: number, queryParameters?: {
        limit?: number;
        offset?: number;
        win?: number;
        patch?: number;
        game_mode?: number;
        lobby_type?: number;
        region?: number;
        date?: number;
        lane_role?: number;
        hero_id?: number;
        is_radiant?: number;
        included_account_id?: number[];
        excluded_account_id?: number[];
        with_hero_id?: number[];
        against_hero_id?: number[];
        significant?: number;
        having?: number;
        sort?: string;
    }): Promise<any>;
    /**
     * Player rating history.
     * @param {number} account_id - Steam32 account ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/ratings in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1ratings%2Fget documentation}.
     */
    getRating(account_id: number): Promise<any>;
    /**
     * Player hero rankings.
     * @param {number} account_id - Steam32 account ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /players/{account_id}/rankings in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1rankings%2Fget documentation}.
     */
    getRanking(account_id: number): Promise<any>;
    /**
     * Refresh player match history.
     * @param {number} account_id - Steam32 account ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by POST /players/{account_id}/refresh in the official {@link https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1refresh%2Fpost documentation}.
     */
    playersRefresh(account_id: number): Promise<any>;
    /**
     * Get list of pro players.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /proPlayers in the official {@link https://docs.opendota.com/#tag/pro-players%2Fpaths%2F~1proPlayers%2Fget documentation}.
     */
    getProPlayers(): Promise<any>;
    /**
     * Get list of pro matches.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.less_than_match_id] - Get matches with a match ID lower than this value.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /proMatches in the official {@link https://docs.opendota.com/#tag/pro-matches%2Fpaths%2F~1proMatches%2Fget documentation}.
     */
    getProMatches(queryParameters?: {
        less_than_match_id?: number;
    }): Promise<any>;
    /**
     * Get list of randomly sampled public matches.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.mmr_ascending] - Order by MMR ascending.
     * @param {number} [queryParameters.mmr_descending] - Order by MMR descending.
     * @param {number} [queryParameters.less_than_match_id] - Get matches with a match ID lower than this value.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /publicMatches in the official {@link https://docs.opendota.com/#tag/public-matches%2Fpaths%2F~1publicMatches%2Fget documentation}.
     */
    getPublicMatches(queryParameters?: {
        mmr_ascending?: number;
        mmr_descending?: number;
        less_than_match_id?: number;
    }): Promise<any>;
    /**
     * Get list of parsed match IDs.
     * @param {object} [queryParameters]
     * @param {number} [queryParameters.less_than_match_id] - Get matches with a match ID lower than this value.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /parsedMatches in the official {@link https://docs.opendota.com/#tag/parsed-matches%2Fpaths%2F~1parsedMatches%2Fget documentation}.
     */
    getParsedMatches(queryParameters?: {
        less_than_match_id?: number;
    }): Promise<any>;
    /**
     * Submit arbitrary SQL queries to the database.
     * @param {object} [queryParameters]
     * @param {string} [queryParameters.sql] - The PostgreSQL query as percent-encoded string.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /explorer in the official {@link https://docs.opendota.com/#tag/explorer%2Fpaths%2F~1explorer%2Fget documentation}.
     */
    getExplorer(queryParameters?: {
        sql?: string;
    }): Promise<any>;
    /**
     * Site metadata.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /metadata in the official {@link https://docs.opendota.com/#tag/metadata%2Fpaths%2F~1metadata%2Fget documentation}.
     */
    getMetadata(): Promise<any>;
    /**
     * Distributions of MMR data by bracket and country.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /distributions in the official {@link https://docs.opendota.com/#tag/distributions%2Fpaths%2F~1distributions%2Fget documentation}.
     */
    getDistributions(): Promise<any>;
    /**
     * Search players by personaname.
     * @param {object} queryParameters
     * @param {string} queryParameters.q - Search string (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /search in the official {@link https://docs.opendota.com/#tag/search%2Fpaths%2F~1search%2Fget documentation}.
     */
    search(queryParameters: {
        q: string;
    }): Promise<any>;
    /**
     * Top players by hero.
     * @param {object} queryParameters
     * @param {string} queryParameters.hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /rankings in the official {@link https://docs.opendota.com/#tag/rankings%2Fpaths%2F~1rankings%2Fget documentation}.
     */
    getRankings(queryParameters: {
        hero_id: string;
    }): Promise<any>;
    /**
     * Benchmarks of average stat values for a hero.
     * @param {object} queryParameters
     * @param {string} queryParameters.hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /benchmarks in the official {@link https://docs.opendota.com/#tag/benchmarks%2Fpaths%2F~1benchmarks%2Fget documentation}.
     */
    getBenchmarks(queryParameters: {
        hero_id: string;
    }): Promise<any>;
    /**
     * Get current service statistics.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /status in the official {@link https://docs.opendota.com/#tag/status%2Fpaths%2F~1status%2Fget documentation}.
     */
    getStatus(): Promise<any>;
    /**
     * Get service health data.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /health in the official {@link https://docs.opendota.com/#tag/health%2Fpaths%2F~1health%2Fget documentation}.
     */
    getHealth(): Promise<any>;
    /**
     * Get parse request state.
     * @param {string} jobId - The job ID to query (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /request/{jobId} in the official {@link https://docs.opendota.com/#tag/request%2Fpaths%2F~1request~1%7BjobId%7D%2Fget documentation}.
     */
    getRequest(jobId: string): Promise<any>;
    /**
     * Submit a new parse request
     * @param {number} match_id - Match ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by POST /request/{match_id} in the official {@link https://docs.opendota.com/#tag/request%2Fpaths%2F~1request~1%7Bmatch_id%7D%2Fpost documentation}.
     */
    postRequest(match_id: number): Promise<any>;
    /**
     * Finds recent matches by heroes played.
     * @param {object} [queryParameters]
     * @param {number[]} [queryParameters.teamA] - Hero IDs on first team (array).
     * @param {number[]} [queryParameters.teamB] - Hero IDs on second team (array).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /findMatches in the official {@link https://docs.opendota.com/#tag/findMatches%2Fpaths%2F~1findMatches%2Fget documentation}.
     */
    getFindMatches(queryParameters?: {
        teamA?: number[];
        teamB?: number[];
    }): Promise<any>;
    /**
     * Get recent matches with a hero.
     * @param {number} hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/matches in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1matches%2Fget documentation}.
     */
    getHeroMatches(hero_id: number): Promise<any>;
    /**
     * Get results against other heroes for a hero.
     * @param {number} hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/matchups in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1matchups%2Fget documentation}.
     */
    getHeroMatchups(hero_id: number): Promise<any>;
    /**
     * Get hero performance over a range of match durations.
     * @param {number} hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/durations in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1durations%2Fget documentation}.
     */
    getHeroDurations(hero_id: number): Promise<any>;
    /**
     * Get players who have played this hero.
     * @param {number} hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/players in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1players%2Fget documentation}.
     */
    getHeroPlayers(hero_id: number): Promise<any>;
    /**
     * Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games.
     * @param {number} hero_id - Hero ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/itemPopularity in the official {@link https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1itemPopularity%2Fget documentation}.
     */
    getHeroItemPopularity(hero_id: number): Promise<any>;
    /**
     * Get stats about hero performance in recent matches.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /heroStats in the official {@link https://docs.opendota.com/#tag/hero-stats%2Fpaths%2F~1heroStats%2Fget documentation}.
     */
    getHeroStats(): Promise<any>;
    /**
     * Get league data.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /leagues in the official {@link https://docs.opendota.com/#tag/leagues%2Fpaths%2F~1leagues%2Fget documentation}.
     */
    getLeagues(): Promise<any>;
    /**
     * Get team data.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /teams in the official {@link https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams%2Fget documentation}.
     */
    getTeams(): Promise<any>;
    /**
     * Get data for a team.
     * @param {number} team_id - Team ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /teams/{team_id} in the official {@link https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D%2Fget documentation}.
     */
    getTeam(team_id: number): Promise<any>;
    /**
     * Get matches for a team.
     * @param {number} team_id - Team ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /teams/{team_id}/matches in the official {@link https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1matches%2Fget documentation}.
     */
    getTeamMatches(team_id: number): Promise<any>;
    /**
     * Get players who have played for a team.
     * @param {number} team_id - Team ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /teams/{team_id}/players in the official {@link https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1players%2Fget documentation}.
     */
    getTeamPlayers(team_id: number): Promise<any>;
    /**
     * Get heroes for a team.
     * @param {number} team_id - Team ID (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /teams/{team_id}/heroes in the official {@link https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1heroes%2Fget documentation}.
     */
    getTeamHeroes(team_id: number): Promise<any>;
    /**
     * Get data to construct a replay URL with.
     * @param {object} queryParameters
     * @param {number[]} queryParameters.match_id - Match IDs (array, required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /replays in the official {@link https://docs.opendota.com/#tag/replays%2Fpaths%2F~1replays%2Fget documentation}.
     */
    getReplays(queryParameters: {
        match_id: number[];
    }): Promise<any>;
    /**
     * Get top performances in a stat.
     * @param {string} field - Field name to query (required).
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /records/{field} in the official {@link https://docs.opendota.com/#tag/records%2Fpaths%2F~1records~1%7Bfield%7D%2Fget documentation}.
     */
    getRecords(field: string): Promise<any>;
    /**
     * Get top currently ongoing live games.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /live in the official {@link https://docs.opendota.com/#tag/live%2Fpaths%2F~1live%2Fget documentation}.
     */
    getLive(): Promise<any>;
    /**
     * Win rates for certain item timings on a hero for items that cost at least 1400 gold.
     * @param {object} [queryParameters]
     * @param {string} [queryParameters.item] - Filter by item name e.g. "spirit_vessel".
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /scenarios/itemTimings in the official {@link https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1itemTimings%2Fget documentation}.
     */
    getItemTimings(queryParameters?: {
        item?: string;
        hero_id?: number;
    }): Promise<any>;
    /**
     * Win rates for heroes in certain lane roles.
     * @param {object} [queryParameters]
     * @param {string} [queryParameters.lane_role] - Filter by lane role 1-4 (Safe, Mid, Off, Jungle).
     * @param {number} [queryParameters.hero_id] - Hero ID.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /scenarios/laneRoles in the official {@link https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1laneRoles%2Fget documentation}.
     */
    getLaneRoles(queryParameters?: {
        lane_role?: string;
        hero_id?: number;
    }): Promise<any>;
    /**
     * Miscellaneous team scenarios.
     * @param {object} [queryParameters]
     * @param {string} [queryParameters.scenario] - ex. pos_chat_1min,neg_chat_1min,courier_kill,first_blood
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /scenarios/misc in the official {@link https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1misc%2Fget documentation}.
     */
    getMiscellaneous(queryParameters?: {
        scenario?: string;
    }): Promise<any>;
    /**
     * Get database schema
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /schema in the official {@link https://docs.opendota.com/#tag/schema%2Fpaths%2F~1schema%2Fget documentation}.
     */
    getSchema(): Promise<any>;
    /**
     * Get static game data mirrored from the dotaconstants repository. If no resource is specified, returns an array of available resources.
     * @param {string} resource - Resource name e.g. heroes. List of {@link https://github.com/odota/dotaconstants/tree/master/build resources}.
     * @returns {Promise} Promise object that resolves to JSON response represented by GET /constants in the official {@link https://docs.opendota.com/#tag/constants%2Fpaths%2F~1constants~1%7Bresource%7D%2Fget documentation}.
     */
    getConstants(resource: string): Promise<any>;
}
import TokenBucket = require("./TokenBucket");
