const OFF = 'off';
const ERROR = 'error';

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    rules: {
        'jsx-a11y/click-events-have-key-events': OFF, // todo
        'jsx-a11y/no-static-element-interactions': OFF, // todo
        'react-hooks/exhaustive-deps': OFF, // todo
        'max-len': OFF, // todo

        indent: [ERROR, 4],
        'default-case': OFF,
        'object-curly-newline': OFF,
        'import/prefer-default-export': OFF,

        // 'max-len': [ERROR, {
        //     code: 120,
        //     ignoreComments: true,
        // }],

        'import/extensions': ['error', 'always', {
            ignorePackages: true,
        }],
        'import/order': [ERROR, {
            'newlines-between': 'always',
            pathGroups: [
                { pattern: '~/**', group: 'external', position: 'after' },
                { pattern: '*.css', group: 'sibling', position: 'after' },
            ],
            groups: [
                ['builtin', 'external'],
                ['index', 'parent', 'sibling'],
            ],
        }],

        // React
        'react/prop-types': OFF,
        'react/jsx-no-bind': OFF,
        'react/jsx-indent': OFF,
        'react/jsx-indent-props': OFF,
        'react/react-in-jsx-scope': OFF,
        'react/require-default-props': OFF,
        'react/button-has-type': OFF,
        'react/no-unstable-nested-components': OFF,
        'react/jsx-sort-props': [ERROR, {
            callbacksLast: true,
            shorthandLast: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
        }],
        'react/jsx-props-no-spreading': [ERROR, {
            html: 'enforce',
            custom: 'ignore',
            explicitSpread: 'enforce',
        }],
    },
};
