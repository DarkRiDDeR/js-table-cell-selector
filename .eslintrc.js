module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint"
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        "no-empty": [2, { "allowEmptyCatch": true }],
        "no-unused-vars": [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "indent": [2, 4],
        "semi": [2, "always"],
        "no-console": "off",
    }
};
