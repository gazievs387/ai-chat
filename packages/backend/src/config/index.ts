import { config } from "dotenv";
config({quiet: true}) 


export { SECRET_KEY } from "./config"

export { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, TOKEN_URL, INFO_URL } from "./auth"
