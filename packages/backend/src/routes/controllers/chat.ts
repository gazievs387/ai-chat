import { MessageType } from "@ai_chat/types";
import { CreateChatParameters, GoogleGenAI } from "@google/genai";
import { NextFunction, Request, Response } from "express";
import { isApiError } from "../../types/utils";


export async function sendMessage(req: Request<any, any, {message: string, prevMessages: MessageType[], model: string}>, res: Response, next: NextFunction) {
    try {
        const prevMessages = req.body.prevMessages

        const prevMessagesHistory: CreateChatParameters["history"] = prevMessages.map((msg) => {
            return {parts: [{text: msg.text}], role: msg.role}
        })

        const ai = new GoogleGenAI({});

        const chat = ai.chats.create({
            model: req.body.model,
            history: prevMessagesHistory
        })

        const result = await chat.sendMessage({message: req.body.message})

        const responseMessage: MessageType = { id: Math.random() * 100000, text: result.text || "", role: "model"};

        setTimeout(() => {
            res.json(responseMessage);
        }, 500);

    } catch (error) {
        if (isApiError(error)) {
            const status = error.status;

            switch (status) {
                case 429:
                    return res.status(429).json({
                        message: "Rate limit exceeded. Please try again later.",
                        code: "LIMIT_EXCEEDED"
                    });
                case 503:
                    return res.status(503).json({
                        message: "The model is temporarily unavailable. Please try again later.",
                        code: "MODEL_UNAVAILABLE"
                    });
                case 500:
                    return res.status(503).json({
                        message: "The model is temporarily unavailable. Please try again later.",
                        code: "MODEL_UNAVAILABLE"
                    });
                default:
                    return res.status(status || 500).json({
                        message: "An API error occurred.",
                        code: "API_ERROR",
                        details: error.message
                    });
            }
        }

        res.status(500).json({
            message: "An unexpected error occurred.",
            code: "UNEXPECTED_ERROR"
        });
        
    }

}