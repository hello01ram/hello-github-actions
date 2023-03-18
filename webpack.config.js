const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "production", 
    entry: "./src/script.js", 
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "bundle.js"
    }, 
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({template: "./src/index.html"})
    ]
}