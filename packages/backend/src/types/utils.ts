import { ApiError } from "@google/genai";


export function isApiError(error: any): error is ApiError {
    if (typeof error === "object" && "status" in error) {
        return true
    }

    return false
}
