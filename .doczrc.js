const webpackConfig = require('./webpack.config.js');

module.exports = {
    modifyBundlerConfig: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...webpackConfig
        }
    }
}
