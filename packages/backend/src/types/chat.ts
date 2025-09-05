import { ChatType, MessageType } from "@ai_chat/types";


export type MessageData<T = {}> = Omit<MessageType, "id"> & T


export interface SendMessageResponse {
    message: MessageType;
    newChat?: ChatType;
}
