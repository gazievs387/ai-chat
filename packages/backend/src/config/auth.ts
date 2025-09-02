


const CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_AUTH_CLIENT_SECRET


const REDIRECT_URI = 'http://localhost:3000';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const INFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"


export { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, TOKEN_URL, INFO_URL } 
