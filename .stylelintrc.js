module.exports = {
    extends: 'stylelint-config-recommended-scss',
    plugins: [
        'stylelint-order',
        'stylelint-scss'
    ],
    rules: {
        'color-no-invalid-hex': true,
        'indentation': 4,
        'color-named': 'never',
        'order/properties-alphabetical-order': true,
        'block-closing-brace-newline-after': 'always',
        'selector-max-empty-lines': 0,
        'block-opening-brace-newline-after': 'always-multi-line',
        'rule-empty-line-before': 'always-multi-line',
        'selector-type-case': 'lower',
        'value-keyword-case': 'lower',
        'at-rule-name-case': 'lower',
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-element-case': 'lower',
        'property-case': 'lower',
        'scss/selector-no-redundant-nesting-selector': true,
    }
}