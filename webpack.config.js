const path = require('path');
module.exports = {
    entry: {
        bundle: './app/ts/app', 
        newpost: './app/ts/newpost'
    },
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: '[name].js',
    }, 
    resolve: {
        extensions: ['.ts', '.js']
    }, 
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader'}, 
            { test: /\.css$/, use: ['style-loader', 'css-loader']}, 
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, 
        ]
    }, 
    watch: true
}