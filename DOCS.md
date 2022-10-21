<a name="OpenDota"></a>

## OpenDota
Provides access to the OpenDota API

**Kind**: global class  

* [OpenDota](#OpenDota)
    * [new OpenDota([apiKey])](#new_OpenDota_new)
    * [.apiRequest(path, method, queryParameters)](#OpenDota+apiRequest) ⇒ <code>Promise</code>
    * [.getMatch(match_id)](#OpenDota+getMatch) ⇒ <code>Promise</code>
    * [.getPlayersByRank()](#OpenDota+getPlayersByRank) ⇒ <code>Promise</code>
    * [.getPlayer(account_id)](#OpenDota+getPlayer) ⇒ <code>Promise</code>
    * [.getWinLoss(account_id, [queryParameters])](#OpenDota+getWinLoss) ⇒ <code>Promise</code>
    * [.getRecentMatches(account_id)](#OpenDota+getRecentMatches) ⇒ <code>Promise</code>
    * [.getMatches(account_id, [queryParameters])](#OpenDota+getMatches) ⇒ <code>Promise</code>
    * [.getHeroes(account_id, [queryParameters])](#OpenDota+getHeroes) ⇒ <code>Promise</code>
    * [.getPeers(account_id, [queryParameters])](#OpenDota+getPeers) ⇒ <code>Promise</code>
    * [.getPros(account_id, [queryParameters])](#OpenDota+getPros) ⇒ <code>Promise</code>
    * [.getTotals(account_id, [queryParameters])](#OpenDota+getTotals) ⇒ <code>Promise</code>
    * [.getCounts(account_id, [queryParameters])](#OpenDota+getCounts) ⇒ <code>Promise</code>
    * [.getHistogram(account_id, field, [queryParameters])](#OpenDota+getHistogram) ⇒ <code>Promise</code>
    * [.getWardmap(account_id, [queryParameters])](#OpenDota+getWardmap) ⇒ <code>Promise</code>
    * [.getWordcloud(account_id, [queryParameters])](#OpenDota+getWordcloud) ⇒ <code>Promise</code>
    * [.getRating(account_id)](#OpenDota+getRating) ⇒ <code>Promise</code>
    * [.getRanking(account_id)](#OpenDota+getRanking) ⇒ <code>Promise</code>
    * [.playersRefresh(account_id)](#OpenDota+playersRefresh) ⇒ <code>Promise</code>
    * [.getProPlayers()](#OpenDota+getProPlayers) ⇒ <code>Promise</code>
    * [.getProMatches([queryParameters])](#OpenDota+getProMatches) ⇒ <code>Promise</code>
    * [.getPublicMatches([queryParameters])](#OpenDota+getPublicMatches) ⇒ <code>Promise</code>
    * [.getParsedMatches([queryParameters])](#OpenDota+getParsedMatches) ⇒ <code>Promise</code>
    * [.getExplorer([queryParameters])](#OpenDota+getExplorer) ⇒ <code>Promise</code>
    * [.getMetadata()](#OpenDota+getMetadata) ⇒ <code>Promise</code>
    * [.getDistributions()](#OpenDota+getDistributions) ⇒ <code>Promise</code>
    * [.search(queryParameters)](#OpenDota+search) ⇒ <code>Promise</code>
    * [.getRankings(queryParameters)](#OpenDota+getRankings) ⇒ <code>Promise</code>
    * [.getBenchmarks(queryParameters)](#OpenDota+getBenchmarks) ⇒ <code>Promise</code>
    * [.getStatus()](#OpenDota+getStatus) ⇒ <code>Promise</code>
    * [.getHealth()](#OpenDota+getHealth) ⇒ <code>Promise</code>
    * [.getRequest(jobId)](#OpenDota+getRequest) ⇒ <code>Promise</code>
    * [.postRequest(match_id)](#OpenDota+postRequest) ⇒ <code>Promise</code>
    * [.getFindMatches([queryParameters])](#OpenDota+getFindMatches) ⇒ <code>Promise</code>
    * [.getHeroes()](#OpenDota+getHeroes) ⇒ <code>Promise</code>
    * [.getHeroMatches(hero_id)](#OpenDota+getHeroMatches) ⇒ <code>Promise</code>
    * [.getHeroMatchups(hero_id)](#OpenDota+getHeroMatchups) ⇒ <code>Promise</code>
    * [.getHeroDurations(hero_id)](#OpenDota+getHeroDurations) ⇒ <code>Promise</code>
    * [.getHeroPlayers(hero_id)](#OpenDota+getHeroPlayers) ⇒ <code>Promise</code>
    * [.getHeroItemPopularity(hero_id)](#OpenDota+getHeroItemPopularity) ⇒ <code>Promise</code>
    * [.getHeroStats()](#OpenDota+getHeroStats) ⇒ <code>Promise</code>
    * [.getLeagues()](#OpenDota+getLeagues) ⇒ <code>Promise</code>
    * [.getLeague(league_id)](#OpenDota+getLeague) ⇒ <code>Promise</code>
    * [.getLeagueMatches(league_id)](#OpenDota+getLeagueMatches) ⇒ <code>Promise</code>
    * [.getLeagueTeams(league_id)](#OpenDota+getLeagueTeams) ⇒ <code>Promise</code>
    * [.getTeams()](#OpenDota+getTeams) ⇒ <code>Promise</code>
    * [.getTeam(team_id)](#OpenDota+getTeam) ⇒ <code>Promise</code>
    * [.getTeamMatches(team_id)](#OpenDota+getTeamMatches) ⇒ <code>Promise</code>
    * [.getTeamPlayers(team_id)](#OpenDota+getTeamPlayers) ⇒ <code>Promise</code>
    * [.getTeamHeroes(team_id)](#OpenDota+getTeamHeroes) ⇒ <code>Promise</code>
    * [.getReplays(queryParameters)](#OpenDota+getReplays) ⇒ <code>Promise</code>
    * [.getRecords(field)](#OpenDota+getRecords) ⇒ <code>Promise</code>
    * [.getLive()](#OpenDota+getLive) ⇒ <code>Promise</code>
    * [.getItemTimings([queryParameters])](#OpenDota+getItemTimings) ⇒ <code>Promise</code>
    * [.getLaneRoles([queryParameters])](#OpenDota+getLaneRoles) ⇒ <code>Promise</code>
    * [.getMiscellaneous([queryParameters])](#OpenDota+getMiscellaneous) ⇒ <code>Promise</code>
    * [.getSchema()](#OpenDota+getSchema) ⇒ <code>Promise</code>
    * [.getConstants(resource)](#OpenDota+getConstants) ⇒ <code>Promise</code>


* * *

<a name="new_OpenDota_new"></a>

### new OpenDota([apiKey])
Create a new OpenDota object.


| Param | Type | Description |
| --- | --- | --- |
| [apiKey] | <code>string</code> | API key for accessing the OpenDota API. If this is supplied, a 1200 requests per minute rate limiter is created. If not supplied, a 60 requests/minute rate limiter is created. |


* * *

<a name="OpenDota+apiRequest"></a>

### openDota.apiRequest(path, method, queryParameters) ⇒ <code>Promise</code>
Create a HTTP request to the OpenDota API. I do not recommend using this raw method directly, but rather the abstractions provided by opendota.js

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object with the result object of the HTTP request.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  | Endpoint path. |
| method | <code>string</code> |  | HTTP method. |
| queryParameters | <code>object</code> | <code></code> | Query parameters to be processed by <pre><code>querystring.stringify(queryParameters)</code></pre> |


* * *

<a name="OpenDota+getMatch"></a>

### openDota.getMatch(match_id) ⇒ <code>Promise</code>
Match data for a specific match id.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /matches/{match_id} in the official [documentation](https://docs.opendota.com/#tag/matches%2Fpaths%2F~1matches~1%7Bmatch_id%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| match_id | <code>number</code> | ID number of the match assigned by Valve. |


* * *

<a name="OpenDota+getPlayersByRank"></a>

### openDota.getPlayersByRank() ⇒ <code>Promise</code>
Players ordered by rank/medal tier.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /playersByRank in the official [documentation](https://docs.opendota.com/#tag/playersByRank%2Fpaths%2F~1playersByRank%2Fget).  

* * *

<a name="OpenDota+getPlayer"></a>

### openDota.getPlayer(account_id) ⇒ <code>Promise</code>
General player data.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id} in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |


* * *

<a name="OpenDota+getWinLoss"></a>

### openDota.getWinLoss(account_id, [queryParameters]) ⇒ <code>Promise</code>
Player win/loss count.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/wl in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wl%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getRecentMatches"></a>

### openDota.getRecentMatches(account_id) ⇒ <code>Promise</code>
Recent matches played.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/recentMatches in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1recentMatches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |


* * *

<a name="OpenDota+getMatches"></a>

### openDota.getMatches(account_id, [queryParameters]) ⇒ <code>Promise</code>
Matches played by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/matches in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1matches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |
| [queryParameters.project] | <code>Array.&lt;string&gt;</code> | Fields to project (array). |


* * *

<a name="OpenDota+getHeroes"></a>

### openDota.getHeroes(account_id, [queryParameters]) ⇒ <code>Promise</code>
Heroes played by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/heroes in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1heroes%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getPeers"></a>

### openDota.getPeers(account_id, [queryParameters]) ⇒ <code>Promise</code>
Players played with by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/peers in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1peers%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getPros"></a>

### openDota.getPros(account_id, [queryParameters]) ⇒ <code>Promise</code>
Pro players played with by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/pros in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1pros%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getTotals"></a>

### openDota.getTotals(account_id, [queryParameters]) ⇒ <code>Promise</code>
Totals in stats for player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/totals in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1totals%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getCounts"></a>

### openDota.getCounts(account_id, [queryParameters]) ⇒ <code>Promise</code>
Counts in categories for player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/counts in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1counts%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getHistogram"></a>

### openDota.getHistogram(account_id, field, [queryParameters]) ⇒ <code>Promise</code>
Distribution of matches in a single stat.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/histograms in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1histograms~1%7Bfield%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| field | <code>string</code> | Field to aggregate on. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getWardmap"></a>

### openDota.getWardmap(account_id, [queryParameters]) ⇒ <code>Promise</code>
Wards placed in matches played by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/wardmap in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wardmap%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getWordcloud"></a>

### openDota.getWordcloud(account_id, [queryParameters]) ⇒ <code>Promise</code>
Words said/read in matches played by player.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/wordcloud in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1wordcloud%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.limit] | <code>number</code> | Number of matches to limit to. |
| [queryParameters.offset] | <code>number</code> | Number of matches to offset start by. |
| [queryParameters.win] | <code>number</code> | Whether the player won. |
| [queryParameters.patch] | <code>number</code> | Patch ID. |
| [queryParameters.game_mode] | <code>number</code> | Game Mode ID. |
| [queryParameters.lobby_type] | <code>number</code> | Lobby type ID. |
| [queryParameters.region] | <code>number</code> | Region ID. |
| [queryParameters.date] | <code>number</code> | Days previous. |
| [queryParameters.lane_role] | <code>number</code> | Lane Role ID. |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |
| [queryParameters.is_radiant] | <code>number</code> | Whether the player was radiant. |
| [queryParameters.included_account_id] | <code>Array.&lt;number&gt;</code> | Account IDs in the match (array). |
| [queryParameters.excluded_account_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.with_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs on the player's team (array). |
| [queryParameters.against_hero_id] | <code>Array.&lt;number&gt;</code> | Hero IDs against the player's team (array). |
| [queryParameters.significant] | <code>number</code> | Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. |
| [queryParameters.having] | <code>number</code> | The minimum number of games played, for filtering hero stats. |
| [queryParameters.sort] | <code>string</code> | The field to return matches sorted by in descending order. |


* * *

<a name="OpenDota+getRating"></a>

### openDota.getRating(account_id) ⇒ <code>Promise</code>
Player rating history.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/ratings in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1ratings%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |


* * *

<a name="OpenDota+getRanking"></a>

### openDota.getRanking(account_id) ⇒ <code>Promise</code>
Player hero rankings.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /players/{account_id}/rankings in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1rankings%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |


* * *

<a name="OpenDota+playersRefresh"></a>

### openDota.playersRefresh(account_id) ⇒ <code>Promise</code>
Refresh player match history.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by POST /players/{account_id}/refresh in the official [documentation](https://docs.opendota.com/#tag/players%2Fpaths%2F~1players~1%7Baccount_id%7D~1refresh%2Fpost).  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> | Steam32 account ID. |


* * *

<a name="OpenDota+getProPlayers"></a>

### openDota.getProPlayers() ⇒ <code>Promise</code>
Get list of pro players.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /proPlayers in the official [documentation](https://docs.opendota.com/#tag/pro-players%2Fpaths%2F~1proPlayers%2Fget).  

* * *

<a name="OpenDota+getProMatches"></a>

### openDota.getProMatches([queryParameters]) ⇒ <code>Promise</code>
Get list of pro matches.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /proMatches in the official [documentation](https://docs.opendota.com/#tag/pro-matches%2Fpaths%2F~1proMatches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.less_than_match_id] | <code>number</code> | Get matches with a match ID lower than this value. |


* * *

<a name="OpenDota+getPublicMatches"></a>

### openDota.getPublicMatches([queryParameters]) ⇒ <code>Promise</code>
Get list of randomly sampled public matches.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /publicMatches in the official [documentation](https://docs.opendota.com/#tag/public-matches%2Fpaths%2F~1publicMatches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.mmr_ascending] | <code>number</code> | Order by MMR ascending. |
| [queryParameters.mmr_descending] | <code>number</code> | Order by MMR descending. |
| [queryParameters.less_than_match_id] | <code>number</code> | Get matches with a match ID lower than this value. |


* * *

<a name="OpenDota+getParsedMatches"></a>

### openDota.getParsedMatches([queryParameters]) ⇒ <code>Promise</code>
Get list of parsed match IDs.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /parsedMatches in the official [documentation](https://docs.opendota.com/#tag/parsed-matches%2Fpaths%2F~1parsedMatches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.less_than_match_id] | <code>number</code> | Get matches with a match ID lower than this value. |


* * *

<a name="OpenDota+getExplorer"></a>

### openDota.getExplorer([queryParameters]) ⇒ <code>Promise</code>
Submit arbitrary SQL queries to the database.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /explorer in the official [documentation](https://docs.opendota.com/#tag/explorer%2Fpaths%2F~1explorer%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.sql] | <code>string</code> | The PostgreSQL query as percent-encoded string. |


* * *

<a name="OpenDota+getMetadata"></a>

### openDota.getMetadata() ⇒ <code>Promise</code>
Site metadata.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /metadata in the official [documentation](https://docs.opendota.com/#tag/metadata%2Fpaths%2F~1metadata%2Fget).  

* * *

<a name="OpenDota+getDistributions"></a>

### openDota.getDistributions() ⇒ <code>Promise</code>
Distributions of MMR data by bracket and country.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /distributions in the official [documentation](https://docs.opendota.com/#tag/distributions%2Fpaths%2F~1distributions%2Fget).  

* * *

<a name="OpenDota+search"></a>

### openDota.search(queryParameters) ⇒ <code>Promise</code>
Search players by personaname.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /search in the official [documentation](https://docs.opendota.com/#tag/search%2Fpaths%2F~1search%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| queryParameters | <code>object</code> |  |
| queryParameters.q | <code>string</code> | Search string (required). |


* * *

<a name="OpenDota+getRankings"></a>

### openDota.getRankings(queryParameters) ⇒ <code>Promise</code>
Top players by hero.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /rankings in the official [documentation](https://docs.opendota.com/#tag/rankings%2Fpaths%2F~1rankings%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| queryParameters | <code>object</code> |  |
| queryParameters.hero_id | <code>string</code> | Hero ID (required). |


* * *

<a name="OpenDota+getBenchmarks"></a>

### openDota.getBenchmarks(queryParameters) ⇒ <code>Promise</code>
Benchmarks of average stat values for a hero.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /benchmarks in the official [documentation](https://docs.opendota.com/#tag/benchmarks%2Fpaths%2F~1benchmarks%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| queryParameters | <code>object</code> |  |
| queryParameters.hero_id | <code>string</code> | Hero ID (required). |


* * *

<a name="OpenDota+getStatus"></a>

### openDota.getStatus() ⇒ <code>Promise</code>
Get current service statistics.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /status in the official [documentation](https://docs.opendota.com/#tag/status%2Fpaths%2F~1status%2Fget).  

* * *

<a name="OpenDota+getHealth"></a>

### openDota.getHealth() ⇒ <code>Promise</code>
Get service health data.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /health in the official [documentation](https://docs.opendota.com/#tag/health%2Fpaths%2F~1health%2Fget).  

* * *

<a name="OpenDota+getRequest"></a>

### openDota.getRequest(jobId) ⇒ <code>Promise</code>
Get parse request state.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /request/{jobId} in the official [documentation](https://docs.opendota.com/#tag/request%2Fpaths%2F~1request~1%7BjobId%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>string</code> | The job ID to query (required). |


* * *

<a name="OpenDota+postRequest"></a>

### openDota.postRequest(match_id) ⇒ <code>Promise</code>
Submit a new parse request

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by POST /request/{match_id} in the official [documentation](https://docs.opendota.com/#tag/request%2Fpaths%2F~1request~1%7Bmatch_id%7D%2Fpost).  

| Param | Type | Description |
| --- | --- | --- |
| match_id | <code>number</code> | Match ID (required). |


* * *

<a name="OpenDota+getFindMatches"></a>

### openDota.getFindMatches([queryParameters]) ⇒ <code>Promise</code>
Finds recent matches by heroes played.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /findMatches in the official [documentation](https://docs.opendota.com/#tag/findMatches%2Fpaths%2F~1findMatches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.teamA] | <code>Array.&lt;number&gt;</code> | Hero IDs on first team (array). |
| [queryParameters.teamB] | <code>Array.&lt;number&gt;</code> | Hero IDs on second team (array). |


* * *

<a name="OpenDota+getHeroes"></a>

### openDota.getHeroes() ⇒ <code>Promise</code>
Get hero data.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget).  

* * *

<a name="OpenDota+getHeroMatches"></a>

### openDota.getHeroMatches(hero_id) ⇒ <code>Promise</code>
Get recent matches with a hero.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/matches in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1matches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| hero_id | <code>number</code> | Hero ID (required). |


* * *

<a name="OpenDota+getHeroMatchups"></a>

### openDota.getHeroMatchups(hero_id) ⇒ <code>Promise</code>
Get results against other heroes for a hero.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/matchups in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1matchups%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| hero_id | <code>number</code> | Hero ID (required). |


* * *

<a name="OpenDota+getHeroDurations"></a>

### openDota.getHeroDurations(hero_id) ⇒ <code>Promise</code>
Get hero performance over a range of match durations.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/durations in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1durations%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| hero_id | <code>number</code> | Hero ID (required). |


* * *

<a name="OpenDota+getHeroPlayers"></a>

### openDota.getHeroPlayers(hero_id) ⇒ <code>Promise</code>
Get players who have played this hero.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/players in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1players%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| hero_id | <code>number</code> | Hero ID (required). |


* * *

<a name="OpenDota+getHeroItemPopularity"></a>

### openDota.getHeroItemPopularity(hero_id) ⇒ <code>Promise</code>
Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroes/{hero_id}/itemPopularity in the official [documentation](https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes~1%7Bhero_id%7D~1itemPopularity%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| hero_id | <code>number</code> | Hero ID (required). |


* * *

<a name="OpenDota+getHeroStats"></a>

### openDota.getHeroStats() ⇒ <code>Promise</code>
Get stats about hero performance in recent matches.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /heroStats in the official [documentation](https://docs.opendota.com/#tag/hero-stats%2Fpaths%2F~1heroStats%2Fget).  

* * *

<a name="OpenDota+getLeagues"></a>

### openDota.getLeagues() ⇒ <code>Promise</code>
Get league data.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /leagues in the official [documentation](https://docs.opendota.com/#tag/leagues%2Fpaths%2F~1leagues%2Fget).  

* * *

<a name="OpenDota+getLeague"></a>

### openDota.getLeague(league_id) ⇒ <code>Promise</code>
Get data for a league.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /leagues/{league_id} in the official [documentation](https://docs.opendota.com/#tag/leagues%2Fpaths%2F~1leagues~1%7Bleague_id%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| league_id | <code>number</code> | League ID (required). |


* * *

<a name="OpenDota+getLeagueMatches"></a>

### openDota.getLeagueMatches(league_id) ⇒ <code>Promise</code>
Get matches for a league.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /leagues/{league_id}/matches in the official [documentation](https://docs.opendota.com/#tag/leagues%2Fpaths%2F~1leagues~1%7Bleague_id%7D~1matches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| league_id | <code>number</code> | League ID (required). |


* * *

<a name="OpenDota+getLeagueTeams"></a>

### openDota.getLeagueTeams(league_id) ⇒ <code>Promise</code>
Get teams for a league.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /leagues/{league_id}/teams in the official [documentation](https://docs.opendota.com/#tag/leagues%2Fpaths%2F~1leagues~1%7Bleague_id%7D~1teams%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| league_id | <code>number</code> | League ID (required). |


* * *

<a name="OpenDota+getTeams"></a>

### openDota.getTeams() ⇒ <code>Promise</code>
Get team data.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /teams in the official [documentation](https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams%2Fget).  

* * *

<a name="OpenDota+getTeam"></a>

### openDota.getTeam(team_id) ⇒ <code>Promise</code>
Get data for a team.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /teams/{team_id} in the official [documentation](https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| team_id | <code>number</code> | Team ID (required). |


* * *

<a name="OpenDota+getTeamMatches"></a>

### openDota.getTeamMatches(team_id) ⇒ <code>Promise</code>
Get matches for a team.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /teams/{team_id}/matches in the official [documentation](https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1matches%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| team_id | <code>number</code> | Team ID (required). |


* * *

<a name="OpenDota+getTeamPlayers"></a>

### openDota.getTeamPlayers(team_id) ⇒ <code>Promise</code>
Get players who have played for a team.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /teams/{team_id}/players in the official [documentation](https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1players%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| team_id | <code>number</code> | Team ID (required). |


* * *

<a name="OpenDota+getTeamHeroes"></a>

### openDota.getTeamHeroes(team_id) ⇒ <code>Promise</code>
Get heroes for a team.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /teams/{team_id}/heroes in the official [documentation](https://docs.opendota.com/#tag/teams%2Fpaths%2F~1teams~1%7Bteam_id%7D~1heroes%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| team_id | <code>number</code> | Team ID (required). |


* * *

<a name="OpenDota+getReplays"></a>

### openDota.getReplays(queryParameters) ⇒ <code>Promise</code>
Get data to construct a replay URL with.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /replays in the official [documentation](https://docs.opendota.com/#tag/replays%2Fpaths%2F~1replays%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| queryParameters | <code>object</code> |  |
| queryParameters.match_id | <code>Array.&lt;number&gt;</code> | Match IDs (array, required). |


* * *

<a name="OpenDota+getRecords"></a>

### openDota.getRecords(field) ⇒ <code>Promise</code>
Get top performances in a stat.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /records/{field} in the official [documentation](https://docs.opendota.com/#tag/records%2Fpaths%2F~1records~1%7Bfield%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | Field name to query (required). |


* * *

<a name="OpenDota+getLive"></a>

### openDota.getLive() ⇒ <code>Promise</code>
Get top currently ongoing live games.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /live in the official [documentation](https://docs.opendota.com/#tag/live%2Fpaths%2F~1live%2Fget).  

* * *

<a name="OpenDota+getItemTimings"></a>

### openDota.getItemTimings([queryParameters]) ⇒ <code>Promise</code>
Win rates for certain item timings on a hero for items that cost at least 1400 gold.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /scenarios/itemTimings in the official [documentation](https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1itemTimings%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.item] | <code>string</code> | Filter by item name e.g. "spirit_vessel". |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |


* * *

<a name="OpenDota+getLaneRoles"></a>

### openDota.getLaneRoles([queryParameters]) ⇒ <code>Promise</code>
Win rates for heroes in certain lane roles.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /scenarios/laneRoles in the official [documentation](https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1laneRoles%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.lane_role] | <code>string</code> | Filter by lane role 1-4 (Safe, Mid, Off, Jungle). |
| [queryParameters.hero_id] | <code>number</code> | Hero ID. |


* * *

<a name="OpenDota+getMiscellaneous"></a>

### openDota.getMiscellaneous([queryParameters]) ⇒ <code>Promise</code>
Miscellaneous team scenarios.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /scenarios/misc in the official [documentation](https://docs.opendota.com/#tag/scenarios%2Fpaths%2F~1scenarios~1misc%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| [queryParameters] | <code>object</code> |  |
| [queryParameters.scenario] | <code>string</code> | ex. pos_chat_1min,neg_chat_1min,courier_kill,first_blood |


* * *

<a name="OpenDota+getSchema"></a>

### openDota.getSchema() ⇒ <code>Promise</code>
Get database schema

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /schema in the official [documentation](https://docs.opendota.com/#tag/schema%2Fpaths%2F~1schema%2Fget).  

* * *

<a name="OpenDota+getConstants"></a>

### openDota.getConstants(resource) ⇒ <code>Promise</code>
Get static game data mirrored from the dotaconstants repository. If no resource is specified, returns an array of available resources.

**Kind**: instance method of [<code>OpenDota</code>](#OpenDota)  
**Returns**: <code>Promise</code> - Promise object that resolves to JSON response represented by GET /constants in the official [documentation](https://docs.opendota.com/#tag/constants%2Fpaths%2F~1constants~1%7Bresource%7D%2Fget).  

| Param | Type | Description |
| --- | --- | --- |
| resource | <code>string</code> | Resource name e.g. heroes. List of [resources](https://github.com/odota/dotaconstants/tree/master/build). |


* * *

