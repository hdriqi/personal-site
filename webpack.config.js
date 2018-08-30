const path = require('path')

const config = {
    context: __dirname,
    entry:  './js/index.js',
    devtool: 'cheap-eval-source-map',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {test: /\.js?$/, loader: 'babel-loader'}
        ]
    }
}

module.exports = config