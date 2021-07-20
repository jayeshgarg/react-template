const {HotModuleReplacementPlugin} = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    plugins: [new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true,
    },
};
