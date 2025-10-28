import { Configuration } from "webpack-dev-server"
import { getPath } from "./utils/getPath"


export function getDevServerConfig(): Configuration  {
    const config: Configuration = {
        port: 3000,
        static: {
            directory: getPath("public")
        },
        historyApiFallback: true,
        hot: true
    }

    return config
}
