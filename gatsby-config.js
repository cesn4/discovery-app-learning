module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-force-file-loader`,
            options: {
                rules: ['images' /* Matches Gatsby default rules for images */],
            },
        },
        'gatsby-plugin-sass',
    ],
};
