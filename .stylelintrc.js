module.exports = {
    extends: 'stylelint-config-recommended-scss',
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'color-no-invalid-hex': true,
        'indentation': 4,
        'color-named': 'never',
        'order/properties-alphabetical-order': true
    }
}