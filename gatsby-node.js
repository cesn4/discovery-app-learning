// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.onCreateWebpackConfig = (args) => {
    args.actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, '../src'), 'node_modules'],
            alias: {
                '~': path.resolve(__dirname, '../src/'),
            },
        },
    });
};
