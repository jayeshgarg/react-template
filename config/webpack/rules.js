import paths from './paths';

module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    /* {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: { limit: 5000, name: `${paths.jsFolder}/[name].[contenthash:8].[ext]` }
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: `${paths.fontsFolder}/[name].[hash].[ext]`,
            mimetype: 'application/octet-stream'
        }
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader', 'img-loader']
    },*/
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
        ]
    },
    {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }
];
