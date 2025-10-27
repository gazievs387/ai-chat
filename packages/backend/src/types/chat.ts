import { ChatType, MessageType } from "@ai_chat/types";


export type UserType = { id: number; name: string }


export type MessageData<T = {}> = Omit<MessageType, "id"> & T


export interface SendMessageResponse {
    message: MessageType;
    newChat?: ChatType;
}
