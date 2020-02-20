// Gatsby config needed for docz

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-force-file-loader`,
            options: {
                rules: ['images' /* Matches Gatsby default rules for images */],
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ['../src/styles/res/_index.scss'],
            },
        },
    ],
};
