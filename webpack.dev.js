const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/dev'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/dev'),
        index: 'dist/dev/index.html',
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: "./src/client/views/index.html"
            }
        )
    ]
};