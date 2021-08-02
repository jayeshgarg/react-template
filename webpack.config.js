const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [['import', { libraryName: 'antd' }]],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
            manifest: './public/manifest.json',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    filter: async (resPath) => {
                        console.log(resPath.toString())
                        if (resPath.toString().endsWith('index.html')) {
                            return false
                        }
                        return true
                    },
                },
            ],
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
    },
    mode: 'development',
    //devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}
