module.exports = {
    env: {
        browser: true
    },
    extends: [
        "preact",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    settings: {
        react: {
            pragma: "h",
            version: "detect"
        },
    },
};
