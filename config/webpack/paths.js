import path from 'path';

module.exports = {
    root: path.resolve(__dirname, '../', '../'),
    outputPath: path.resolve(__dirname, '../', '../', 'dist'),
    entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
    templatePath: path.resolve(__dirname, '../', '../', 'public/index.html'),
    favicon: path.resolve(__dirname, '../', '../', 'public/favicon.ico'),
    imagesFolder: 'static/images',
    fontsFolder: 'static/fonts',
    cssFolder: 'static/css',
    jsFolder: 'static/js'
};
