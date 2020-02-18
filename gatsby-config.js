module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-force-file-loader`,
            options: {
                rules: ['images' /* Matches Gatsby default rules for images */],
            },
        },
        {
            resolve: 'gatsby-plugin-sass-resources',
            options: {
                resources: `${__dirname}/src/styles/res/_index.scss`,
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '~': `${__dirname}/src`,
            },
        },
    ],
};
