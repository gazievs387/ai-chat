import { Request, Response } from "express"
import axios, { isAxiosError } from "axios"
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, TOKEN_URL, INFO_URL, SECRET_KEY } from "../../config";
import { db } from "../../model";
import { getJwtTokens } from "../../utils/getJwtTokens";
import jwt from "jsonwebtoken"
import { isJwtPayload } from "../../types/utils";


async function auth(req: Request, res: Response) {
    const code = req.body.code

    try {
        const tokenResponse = await axios.post(TOKEN_URL, {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code'
        });

        const accessToken = tokenResponse.data.access_token;

        const userInfo = await axios.get(INFO_URL, {headers: {Authorization: `Bearer ${accessToken}`}})

        const userInDb = await db.user.findFirst({where: {email: userInfo.data.email}})

        if (userInDb) {
            const { accessToken, refreshToken } = getJwtTokens({id: userInDb.id, name: userInDb.name})

            res.json({accessToken, refreshToken})
        } else {
            const createdUser = await db.user.create({data: {name: userInfo.data.name, email: userInfo.data.email}})
            
            const { accessToken, refreshToken } = getJwtTokens({id: createdUser.id, name: createdUser.name})

            res.json({accessToken, refreshToken})
        }

    } catch (error) {
        if (isAxiosError(error)) {
            res.status(500).send('Authentication failed.');
        }
    }

}

export async function refreshToken(req: Request<any, any, {refresh: string}>, res: Response) {
    const prevRefreshToken = req.body.refresh

    
    try {
        const payload = jwt.verify(prevRefreshToken, SECRET_KEY)
        
        if (isJwtPayload(payload)) {
            const { accessToken, refreshToken } = getJwtTokens({id: payload.id, name: payload.name})

            res.json({accessToken, refreshToken})
        } else {
            res.status(401).json({ message: "Invalid or expired refresh token" });
        }

    } catch (error) {
        res.status(401).json({ message: "Invalid or expired refresh token" });
    }

}



export { auth }
