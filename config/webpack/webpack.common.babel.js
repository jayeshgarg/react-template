import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const CopyWebpackPlugin = require('copy-webpack-plugin');

import paths from './paths';
import rules from './rules';

module.exports = {
    entry: paths.entryPath,
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            favicon: paths.favicon,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'static/',
                    filter: async (resPath) => {
                        //console.log(resPath.toString());
                        if (
                            resPath.toString().endsWith('.jpg') ||
                            resPath.toString().endsWith('.jpeg') ||
                            resPath.toString().endsWith('.png')
                        ) {
                            return true;
                        }
                        return false;
                    }
                }
            ]
        })
    ]
};
