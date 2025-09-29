import { MessageType } from "@ai_chat/types";
import { CreateChatParameters, GoogleGenAI } from "@google/genai";


const standardResponseMessage = `Это стандартный ответ, который используется, если gemini api недоступен в регионе
\`\`\`javascript
# Пример блока с кодом
const msg = "Hello, world!"

console.log(msg)
\`\`\`
`

interface MessageTitleResult {
    message: string;
    title?: string
}

class AIApiService {
    constructor() {}

    public async sendMessage(message: string, prevMessages: MessageType[], model: string, isNewChat: boolean = false): Promise<MessageTitleResult> {
        if (model === "standard") {
            return {title: "Чат с ИИ", message: standardResponseMessage}
        }

        const prevMessagesHistory: CreateChatParameters["history"] = prevMessages.map((msg) => {
            return {parts: [{text: msg.text}], role: msg.role}
        })

        const ai = new GoogleGenAI({});

        const chat = ai.chats.create({
            model: model,
            history: prevMessagesHistory
        })

        const response = await chat.sendMessage({message: message})

        const result: MessageTitleResult = { message: response.text || "" }

        if (isNewChat) {
            const title = await this.generateTitleFromMessage(message)
            
            result.title = title
        }
        
        return result
    }

    private async generateTitleFromMessage(message: string) {
        const ai = new GoogleGenAI({});

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: `Сообщения: //// \`${message}\` ////. Сгенерируй короткий заголовок без форматирование, обычный текст, который подойдет для названия чата (максимум 4-6 слов), который описывает это сообщение. Только один заголовок и больше ничего`
        })

        return result.text
    }

}


export const aiApiService = new AIApiService() 
