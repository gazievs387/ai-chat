import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken"
import { SECRET_KEY } from "../config";
import { isJwtPayload, isTokenExpiredError } from "../types/utils";
import { AuthRequest } from "../types/express";


function handleUnauthorized(res: Response, next: NextFunction, raiseError: boolean) {
    return raiseError ? res.status(401).json("Access denied") : next()
}

export function authMiddleware(raiseError=true) {
    return function (req: AuthRequest, res: Response, next: NextFunction) {
        const access = req.headers.authorization as string;

        try {
            const payload = jwt.verify(access, SECRET_KEY)

            if (isJwtPayload(payload)) {
                req.user = { id: payload.id, name: payload.name }
    
                next()
            } else {
                handleUnauthorized(res, next, raiseError)
            }
    
        } catch (error) {
            const isTokenExpired = isTokenExpiredError(error)

            handleUnauthorized(res, next, raiseError || isTokenExpired)
        }
        
    }
}
