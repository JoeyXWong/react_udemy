//Entry point -> output

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module:{
        rules: [{
            leader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};