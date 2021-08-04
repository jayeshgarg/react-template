const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    //stats: 'verbose',
    output: {
        clean: true,
        path: path.resolve(__dirname, './../dist'),
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath: '.'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [['import', { libraryName: 'antd' }]]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('file-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[contenthash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public', 'index.html'),
            favicon: path.join(__dirname, '../public', 'favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'static/',
                    filter: async (resPath) => {
                        //console.log(resPath.toString());
                        if (
                            resPath.toString().endsWith('index.html') ||
                            resPath.toString().endsWith('.html') ||
                            resPath.toString().endsWith('favicon.ico')
                        ) {
                            return false;
                        }
                        return true;
                    }
                }
            ]
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    },
    mode: 'production',
    //devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        const moduleFileName = module
                            .identifier()
                            .split('/')
                            .reduceRight((item) => item);
                        console.log(moduleFileName);
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }
        }
    }
};
