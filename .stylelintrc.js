module.exports = {
    extends: 'stylelint-config-recommended-scss',
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'color-no-invalid-hex': true,
        'indentation': 4,
        'color-named': 'never',
        'order/properties-alphabetical-order': true,
        'block-closing-brace-newline-after': 'always',
        'selector-max-empty-lines': 0,
        'block-opening-brace-newline-after': 'always-multi-line',
        'rule-empty-line-before': 'always-multi-line'
    }
}