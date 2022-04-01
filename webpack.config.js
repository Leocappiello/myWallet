const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
        mode: 'none',
        entry: './src/main.js',
        output: {
            path: __dirname + '/dist',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.html$/i,
                    use: ['html-loader'],
                },
            ]
        },
        plugins: [
            new HTMLWebPackPlugin({
                template: './src/index.html'
            })
        ]

}