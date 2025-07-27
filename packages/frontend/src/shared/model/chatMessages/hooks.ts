import { useContext } from "react"
import { ChatMessages } from "./chatMessages"


export function useChatMessages() {
    const {messages, setMessages} = useContext(ChatMessages)


    return {messages, setMessages}
}
