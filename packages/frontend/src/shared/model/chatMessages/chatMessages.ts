import { createContext, Dispatch, SetStateAction } from "react";
import { QueryError } from "shared/types/api";
import { MessageType } from "shared/types/messages";


interface ChatMessagesContext {
    messages: MessageType[], 
    setMessages: Dispatch<SetStateAction<MessageType[]>>,
    loading: boolean, 
    setLoading: Dispatch<SetStateAction<boolean>>,
    error: QueryError, 
    setError: Dispatch<SetStateAction<QueryError>>,
}

export const ChatMessages = createContext<ChatMessagesContext>({
    messages: [], 
    setMessages: () => {},
    loading: false,
    setLoading: () => {},
    error: undefined,
    setError: () => {}
})
