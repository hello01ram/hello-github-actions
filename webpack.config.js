const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "production", 
    entry: "./src/script.js", 
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "bundle.js"
    }, 
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})]
}