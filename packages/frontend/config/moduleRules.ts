import { ModuleOptions } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript"
import { getPath } from "./utils/getPath";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function getModuleRules(isProd: boolean): ModuleOptions["rules"] {
    const isDev = !isProd

    const rules: ModuleOptions["rules"] = [
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
            test: /\.module\.((c|sa|sc)ss)$/i,
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
            test: /(?<!\.module)\.((c|sa|sc)ss)$/i,
            use: [
                isProd ? MiniCssExtractPlugin.loader : "style-loader",
                { 
                    loader: "css-loader",
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
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: /url/,
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        exportType: "named"
                    }
                }
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
    ]

    
    return rules
}
