const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


function getPath(...paths) {
    return path.resolve(__dirname, ...paths)
}


module.exports = {
    mode: "development",
    entry: getPath("src", "index.tsx"),
    output: {
        filename: "index.js",
        path: getPath("build"),
        clean: true
    },
    devtool: "eval-cheap-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:js|jsx|mjs|cjs)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: getPath("public", "index.html")})],
    devServer: {
        port: 3000,
        static: ["src", "public"]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    }
}
