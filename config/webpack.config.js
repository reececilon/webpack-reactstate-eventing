const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "none",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        })
    ],    // this gets rid of the default behaviour in the terminal
    module: {
        rules: [// specific instructions for each helper
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, // transpile JavaScript files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, // transpile css files
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: ['file-loader'],
            }, // transpile image files
        ]
    }
}

module.exports = config;