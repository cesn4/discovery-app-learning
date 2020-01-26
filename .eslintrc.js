module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    settings: {
        react: {
            version: 'detect',
        },
        '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
    },
};
