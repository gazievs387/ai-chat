import { createContext, Dispatch, SetStateAction } from "react";
import { MessageType } from "shared/types/messages";



export const ChatMessages = createContext<{messages: MessageType[], setMessages: Dispatch<SetStateAction<MessageType[]>>}>({messages: [], setMessages: () => undefined})
