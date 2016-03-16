module.exports = {
    entry: './js/entry.js',
    output: {
        path: __dirname,
        filename: '../server/assets/bundle.js'
    },
    module: {
        loaders: [
            {test:/\.js|jsx$/, loader: 'jsx?harmony'}
        ]
    }
};