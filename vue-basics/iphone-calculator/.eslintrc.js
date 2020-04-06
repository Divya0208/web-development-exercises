module.exports = {
    "env": {
        "browser": true,
        "es6": true,       
        "commonjs": false,
        "node": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "no-unused-vars": ["error", { "args": "none", "argsIgnorePattern": "^evt$" }]
    }
};