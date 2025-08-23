import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import "webpack-dev-server"
import ReactRefreshTypeScript from "react-refresh-typescript"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"


function getPath(...paths: string[]): string {
    return path.resolve(__dirname, ...paths)
}


function getWebpackConfig(env: any): Configuration {
    const isProd = env.prod ? true : false 
    const isDev = !isProd


    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({template: getPath("public", "index.html")}),
        new ForkTsCheckerWebpackPlugin(),
    ]

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin())
    } else {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return {
        mode: isProd ? "production" : "development",
        entry: getPath("src", "index.tsx"),
        output: {
            filename: "index.js",
            path: getPath("build"),
            clean: true,
            publicPath: "/"
        },
        devtool: isDev && "eval-cheap-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve("ts-loader"),
                        options: {
                            getCustomTransformers: () => ({
                                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                            }),

                        },
                    }
                },
                {
                    test: /\.((c|sa|sc)ss)$/i,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : "style-loader",
                        { 
                            loader: "css-loader",
                            options: {
                                modules: {
                                    namedExport: false,
                                    exportLocalsConvention: "as-is"
                                }
                            }
                        },
                        { 
                            loader: "sass-loader",
                            options: {
                                additionalData: '@use "shared/static/styles/base" as *;',
                                sassOptions: {
                                    loadPaths: [getPath("src")]
                                }
                            },
                        }
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
        plugins: plugins,
        devServer: {
            port: 3000,
            static: {
                directory: getPath("public")
            },
            historyApiFallback: true,
            hot: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
            
            plugins: [new TsconfigPathsPlugin()]
        }
    }
}


export default getWebpackConfig
