import { MessageType } from "@ai_chat/types";
import { NextFunction, Response } from "express";
import { isApiError } from "../../types/utils";
import { AuthRequest } from "../../types/express";
import { chatService } from "../../services/chat.service";
import { MessageData, SendMessageResponse } from "../../types/chat";
import { aiApiService } from "../../services/aiapi.service";


function handleSendMessageError(error: unknown): [number, {message: string, code: string, details?: string}] {
    if (isApiError(error)) {
        const status = error.status;

        switch (status) {
            case 429:
                return [429, {message: "Rate limit exceeded. Please try again later.", code: "LIMIT_EXCEEDED"}]
            case 503:
                return [503, {message: "The model is temporarily unavailable. Please try again later.", code: "MODEL_UNAVAILABLE"}]
            case 500:
                return [503, {message: "The model is temporarily unavailable. Please try again later.",code: "MODEL_UNAVAILABLE"}]
            default:
                return [(status || 500), {message: "An API error occurred.", code: "API_ERROR", details: error.message}]
        }
    }

    return [500, {message: "An unexpected error occurred.", code: "UNEXPECTED_ERROR"}];
}


export async function sendMessage(req: AuthRequest<any, any, {message: string, prevMessages: MessageType[], model: string, chatId?: number}>, res: Response) {
    try {
        const {message, prevMessages, model, chatId} = req.body

        const isNewChat = (prevMessages.length <= 1 && !chatId)

        const result = await aiApiService.sendMessage(message, prevMessages, model, isNewChat)

        const response: SendMessageResponse = { 
            message: {
                id: Math.random() * 100000, text: result.message || "", role: "model"
            }
        }

        const user = req.user

        if (user) {
            if (isNewChat && result.title) {
                const chatData = {
                    title: result.title,
                    userId: user.id,
                    model: req.body.model,
                }

                const messages: MessageData[] = [
                    {
                        text: message,
                        role: "user"
                    },
                    {
                        text: result.message || "",
                        role: "model"
                    }
                ]

                const chat = await chatService.createChat(chatData, messages)

                response.newChat = chat

            } else if (chatId) {
                await chatService.addMessages([
                    {
                        text: message,
                        role: "user",
                        chatId: chatId
                    },
                    {
                        text: result.message || "",
                        role: "model",
                        chatId: chatId
                    }
                ])
                
            }
        }

        setTimeout(() => {
            res.json(response);
        }, 500);

    } catch (error) {
        const [status, json] = handleSendMessageError(error)
        
        return res.status(status).json(json)
    }

}

export async function getChats(req: AuthRequest, res: Response) {
    const userId = req.user?.id

    const chats = await chatService.getChats(userId)

    return res.json(chats)
}


export async function getChat(req: AuthRequest, res: Response) {
    const chatId = req.params.chatId

    const result = await chatService.getChatWithMessages(Number(chatId))

    if (!result) {
        return res.status(404).json({message: "Chat is not found"})
    }

    return res.json(result)
}
