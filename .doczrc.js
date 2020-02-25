const webpackConfig = require('./webpack.config.js');

module.exports = {
    typescript: true,
    modifyBundlerConfig: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...webpackConfig
        }
    }
}
