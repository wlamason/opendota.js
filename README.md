# opendota.js
![Version](https://img.shields.io/badge/version-2.1.0-blue.svg?cacheSeconds=2592000)
[![CI](https://github.com/wlamason/opendota.js/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wlamason/opendota.js/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/wlamason/opendota.js/blob/main/LICENSE)

A minimalistic wrapper for the opendota api. 

## Install

```npm install opendota.js```

## Example Usage

```js
const { OpenDota } = require("opendota.js");

// Remember to store your api keys safely. I recommend using dotenv.
const opendota = new OpenDota("OPTIONAL_API_KEY");

// Search players by personaname
opendota.search({ q: "noob" }).then(response => console.log(response));

// Get the health of the opendota api service
opendota.getHealth().then(response => console.log(response));

// Using async/await syntax
async function awaitDemo() {
    const response = await opendota.search( { q: "noob" } );
    console.log(response);
}

awaitDemo();
```

## Features

- Covers 100% of the 54 opendota api endpoints.
- 0 dependencies.
- Fully documented and tested. 
- Respects opendota api rate limits.
- Reduces boilerplate calls to opendota api.

## Docs

Documentation can be found in [DOCS.md](./DOCS.md).

## Reporting Bugs
Please use the [issues](https://github.com/wlamason/opendota.js/issues) tab above.

## Development

```
npm run format
npm run format:check
npm run lint
npm run test:unit
npm run test:integration
npm run test
npm run docs
npm run types
```

`format` writes Prettier formatting and `format:check` checks it. `lint` runs ESLint. `test:unit` runs the unit tests. `test:integration` runs the live OpenDota integration tests. `test` runs both. `docs` regenerates DOCS.md. `types` regenerates the TypeScript declarations.

## Releasing

Go to the [Actions](https://github.com/wlamason/opendota.js/actions) tab, choose the Release workflow ([`.github/workflows/publish.yml`](.github/workflows/publish.yml)), click **Run workflow**, and pick the bump (`patch`, `minor`, or `major`). The default is `patch`. The workflow runs on `main`. It runs `npm run test:unit`, then `npm run test:integration`, and only after both pass bumps the version, pushes the commit and tag, publishes the package to npm, and creates the GitHub release.

One-time setup on npmjs.com: add a trusted publisher for GitHub Actions with owner `wlamason`, repository `opendota.js`, workflow filename `publish.yml`, no environment, and allow `npm publish`.

## Author

👤 **Will Lamason**

* Website: [wmel.us](https://wmel.us)
* Github: [@wlamason](https://github.com/wlamason)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Will Lamason](https://github.com/wlamason).

This project is [Apache License 2.0](https://github.com/wlamason/opendota.js/blob/main/LICENSE) licensed.