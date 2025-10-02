import { createContext, Dispatch, SetStateAction } from "react";
import { QueryError } from "shared/types/api";
import { MessageType } from "@ai_chat/types";


interface ChatMessagesContext {
    model: string,
    setModel: Dispatch<SetStateAction<string>>,
    chatId?: number;
    setChatId: Dispatch<SetStateAction<number | undefined>>,
    messages: MessageType[],
    setMessages: Dispatch<SetStateAction<MessageType[]>>,
    loading: boolean, 
    setLoading: Dispatch<SetStateAction<boolean>>,
    chatLoading: boolean, 
    setChatLoading: Dispatch<SetStateAction<boolean>>,
    error: QueryError, 
    setError: Dispatch<SetStateAction<QueryError>>,
}

export const ChatMessages = createContext<ChatMessagesContext>({
    model: "gemini-2.5-flash",
    setModel: () => {},
    chatId: undefined,
    setChatId: () => {},
    messages: [], 
    setMessages: () => {},
    loading: false,
    setLoading: () => {},
    chatLoading: false,
    setChatLoading: () => {},
    error: undefined,
    setError: () => {}
})
