import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import "webpack-dev-server"



function getPath(...paths: string[]): string {
    return path.resolve(__dirname, ...paths)
}


function getWebpackConfig(env: any): Configuration {
    const isProd = env.prod ? true : false 
    const isDev = !isProd


    return {
        mode: isProd ? "production" : "development",
        entry: getPath("src", "index.tsx"),
        output: {
            filename: "index.js",
            path: getPath("build"),
            clean: true
        },
        devtool: isDev && "eval-cheap-source-map",
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
                    test: /\.((c|sa|sc)ss)$/i,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : "style-loader",
                        { 
                            loader: "css-loader",
                            options: {
                                modules: {
                                    namedExport: false
                                }
                            }
                        },
                        "sass-loader"
                    ]
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
        plugins: [
            new HtmlWebpackPlugin({template: getPath("public", "index.html")}),
            isProd && new MiniCssExtractPlugin()
        ],
        devServer: {
            port: 3000,
            static: ["src", "public"]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"]
        }
    }
}


export default getWebpackConfig
