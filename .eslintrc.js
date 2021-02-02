module.exports = {
    env: {
        browser: true
    },
    extends: [
        "preact",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
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
