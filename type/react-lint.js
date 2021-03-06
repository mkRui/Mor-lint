const path = require('path');
const fs = require('fs');

const alias = {};
const filePath = path.resolve(__dirname, '../../../package.json');
if (fs.existsSync(filePath)) {
    alias[require(filePath).name] = path.resolve(__dirname, '../../../');
}

module.exports = {
    extends: [
        'standard',
        'alloy',
        'alloy/react',
        'alloy/typescript',
        'plugin:import/errors',
        'plugin:import/typescript',
        "plugin:promise/recommended",
        'prettier',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: { // 添加 ESLint 对 TypeScript 的解析
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
        
    },
    env: {
        browser: true,
        node: true, // 需要添加 eslint-plugin-node
        es6: true
    },
    globals: {},
    rules: {
        'no-param-reassign': 'off',
        "promise/catch-or-return": "off",
        "promise/always-return": "off",
        'max-params': ['error', 5],
        'no-undef': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                useTabs: false,
                semi: true,
                trailingComma: 'none',
                singleQuote: true,
                bracketSpacing: true,
                arrowParens: 'always'
            }
        ]
    },
    settings: {
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
                alias,
                extensions: ['.js', 'jsx', '.vue', '.ts', 'tsx']
            },
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};

