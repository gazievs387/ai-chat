import { MessageType } from "@ai_chat/types";
import { CreateChatParameters, GoogleGenAI } from "@google/genai";



class AIApiService {
    constructor() {}

    public async sendMessage(message: string, prevMessages: MessageType[], model: string) {
        const prevMessagesHistory: CreateChatParameters["history"] = prevMessages.map((msg) => {
                return {parts: [{text: msg.text}], role: msg.role}
            })
    
            const ai = new GoogleGenAI({});
    
            const chat = ai.chats.create({
                model: model,
                history: prevMessagesHistory
            })
    
            const result = await chat.sendMessage({message: message})

            return result
    }
}


export const aiApiService = new AIApiService() 
