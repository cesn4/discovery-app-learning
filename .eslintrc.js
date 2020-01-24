module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    settings: {
        'react': {
            "version": "detect"
        }
    },
    rules: {
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    }
}
