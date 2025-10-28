import dotenv from "dotenv"


export function loadEnv(isProd: boolean) {
    dotenv.config(isProd ? {path: "./.env.production", quiet: true} : {quiet: true}) 
}
