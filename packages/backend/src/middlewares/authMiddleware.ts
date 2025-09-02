import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config";
import { isJwtPayload } from "../types/utils";
import { AuthRequest } from "../types/express";


function handleUnauthorized(res: Response, next: NextFunction, raiseError: boolean) {
    return raiseError ? res.status(401).json("Access denied") : next()
}

export function authMiddleware(raiseError=true) {
    return function (req: AuthRequest, res: Response, next: NextFunction) {
        const prevRefreshToken = req.body.refresh
    
        try {
            const payload = jwt.verify(prevRefreshToken, SECRET_KEY)
            
            if (isJwtPayload(payload)) {
                req.user = { id: payload.id, name: payload.name }
    
                next()
            } else {
                handleUnauthorized(res, next, raiseError)
            }
    
        } catch (error) {
            handleUnauthorized(res, next, raiseError)
        }
        
    }
}
