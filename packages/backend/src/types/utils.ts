import { ApiError } from "@google/genai";
import { JwtPayload } from "jsonwebtoken";


export function isApiError(error: any): error is ApiError {
    if (typeof error === "object" && "status" in error) {
        return true
    }

    return false
}


export function isJwtPayload(payload: any): payload is JwtPayload {
    return typeof payload === "object"
}
