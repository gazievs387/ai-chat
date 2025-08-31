import { createContext, Dispatch, SetStateAction } from "react";
import { QueryError } from "shared/types/api";
import { MessageType } from "@ai_chat/types";


interface ChatMessagesContext {
    model: string,
    setModel: Dispatch<SetStateAction<string>>,
    messages: MessageType[], 
    setMessages: Dispatch<SetStateAction<MessageType[]>>,
    loading: boolean, 
    setLoading: Dispatch<SetStateAction<boolean>>,
    error: QueryError, 
    setError: Dispatch<SetStateAction<QueryError>>,
}

export const ChatMessages = createContext<ChatMessagesContext>({
    model: "gemini-2.5-flash",
    setModel: () => {},
    messages: [], 
    setMessages: () => {},
    loading: false,
    setLoading: () => {},
    error: undefined,
    setError: () => {}
})
