# opendota.js
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/wlamason/opendota.js/blob/master/LICENSE)

A minimalistic wrapper for the opendota api. 

## Install

```npm install opendota.js```

## Example Usage

```js
const { OpenDota } = require("opendota.js");

// Remember to store your api keys safely. I recommend using dotenv.
const opendota = new OpenDota("OPTIONAL_API_KEY");

// Search players by personaname
opendota.search({ q: "noob" }).then(res => console.log(res));

// Get the health of the opendota api service
opendota.getHealth().then(res => console.log(res));
```

## Features

- Covers 100% of the 54 opendota api endpoints.
- Fully documented and tested. 
- Respects opendota api rate limits.
- Reduces boilerplate calls to opendota api.

## Docs

Documentation can be found in [DOCS.md](./DOCS.md).

## Reporting Bugs

## Development - Run tests

```npm run test```

## Development - Generate Docs

```npm run docs```

## Development - Generate Types

```npm run types```

## Author

👤 **Will Lamason**

* Website: wmel.us
* Github: [@wlamason](https://github.com/wlamason)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Will Lamason](https://github.com/wlamason).

This project is [Apache License 2.0](https://github.com/wlamason/opendota.js/blob/master/LICENSE) licensed.