import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config"


export function getJwtTokens(payload: Record<string, string | number | undefined>) {
    const accessToken = jwt.sign(payload, SECRET_KEY, {algorithm: "HS256", expiresIn: "30m"})

    const refreshToken = jwt.sign(payload, SECRET_KEY, {algorithm: "HS256", expiresIn: "90d"})

    return { accessToken, refreshToken }
}
