import { Configuration } from "webpack"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import "webpack-dev-server"
import { getPath } from "./config/utils/getPath"
import { getWebpackPlugins } from "./config/plugins"
import { getModuleRules } from "./config/moduleRules"
import { getDevServerConfig } from "./config/devServer"
import { loadEnv } from "./config/loadEnv"


function getWebpackConfig(env: any): Configuration {
    const isProd = env.prod ? true : false 
    const isDev = !isProd

    
    loadEnv(isProd)


    return {
        mode: isProd ? "production" : "development",
        entry: getPath("src", "index.tsx"),
        output: {
            filename: "index.[contenthash].js",
            path: getPath("build"),
            clean: true,
            publicPath: "/"
        },
        devtool: isDev && "eval-cheap-source-map",
        module: {
            rules: getModuleRules(isProd)
        },
        plugins: getWebpackPlugins(isProd),
        devServer: getDevServerConfig(),
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
            
            plugins: [new TsconfigPathsPlugin()]
        }
    }
}


export default getWebpackConfig
