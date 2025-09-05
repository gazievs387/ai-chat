import { ApiError } from "@google/genai";
import { JwtPayload, TokenExpiredError } from "jsonwebtoken";


export function isApiError(error: any): error is ApiError {
    if (typeof error === "object" && "status" in error) {
        return true
    }

    return false
}


export function isJwtPayload(payload: any): payload is JwtPayload {
    return typeof payload === "object"
}


export function isTokenExpiredError(error: unknown): error is TokenExpiredError {
    if (!error) {
        return false
    }

    return (typeof error === "object" && "name" in error && error.name === "TokenExpiredError")
}
