import { ChatType, MessageType } from "@ai_chat/types";
import { db } from "../model";
import { PrismaClient } from "../model/prisma";
import { MessageData } from "../types/chat";


interface ChatData {
    title: string;
    userId: number;
    model: string;
}


class ChatService {
    db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db
    }

    public async createChat(chatData: ChatData, messages: MessageData[] = []): Promise<ChatType> {
        const {userId, ...newChat} = await db.chat.create({
            data: {
                title: chatData.title,
                userId: chatData.userId,
                model: chatData.model,
                messages: {
                    create: messages
                }
            }
        })

        return newChat
    }

    public async addMessages(messages: (MessageData<{chatId: number}>)[]) {
        const msgs = messages.map((msg) => db.message.create({data: msg}));

        await db.$transaction(msgs)
    }

    public async getChats(userId?: number): Promise<ChatType[]> {
        const chats = await this.db.chat.findMany({where: {userId: userId}, omit: {userId: true}, orderBy: {id: "desc"}})

        return chats
    }

}


export const chatService = new ChatService(db) 
