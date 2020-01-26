const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "sourcemap", // Nurodo kad kurtu source maps, lengviau debuginti koda per chrome dev tools
    stats: "minimal", // Sitas nurodo kad console langelyje rodytu maziau info, pagrinde tik errorus
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src") // nustatymas kad ~ reiskia src direktorija
        },
        extensions: [".js", ".ts", ".tsx", ".scss",]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js"
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: ["babel-loader", "eslint-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: [/node_modules/],
            use: ["ts-loader", "eslint-loader"],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
            test: /\.scss$/i,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                    importLoaders: 2
                }
            },
            "postcss-loader",
            {
                loader: "resolve-url-loader",
                options: {
                    root: path.resolve(__dirname, "src")
                }
            },
            "sass-loader",
            {
                loader: "sass-resources-loader",
                options: {
                resources: path.resolve(__dirname, "src/styles/res/_index.scss")
                }
            }
            ]
        },
        {
            test: /\.(jpg|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/',
                        name: '[name].[hash].[ext]'
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: "React app",
        template: path.resolve(__dirname, "src/index.html")
        }),
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ["dist"] }
        }),
        new MiniCssExtractPlugin({
        filename: "styles.min.[hash].css"
        }),
        new StylelintPlugin()
    ]
};
