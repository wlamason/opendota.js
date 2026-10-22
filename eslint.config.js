const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    {
        ignores: ["coverage/**"],
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ["__tests__/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];
