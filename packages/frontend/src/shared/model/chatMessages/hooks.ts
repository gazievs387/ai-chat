import { useCallback, useContext } from "react"
import { ChatMessages } from "./chatMessages"
import axios, { isAxiosError } from "axios"
import { MessageType } from "@ai_chat/types"


export function useChatMessages() {
    const {model, setModel, messages, setMessages, loading, setLoading, error, setError} = useContext(ChatMessages)

    
    const changeModel = (modeValue: string) => {
        setMessages([])
        
        setModel(modeValue);
    };

    const sendMessageRequest = useCallback(async (newMessageText: string, prevMessages: MessageType[]) => {
        setLoading(true) 

        try {
            const response = await axios.post("http://localhost:3001/send-message", {message: newMessageText, prevMessages, model})

            const responseMessage = response.data   
        
            setMessages(prevMessages => [...prevMessages, responseMessage]) 
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error)
            }
            
        } finally {
            setLoading(false)
        }
    }, [model])

    const sendMessage = useCallback(async (message: string) => {
        setMessages(prevMessages => [...prevMessages, {id: Math.random() * 1000000, text: message, role: "user"}]) 

        sendMessageRequest(message, messages)
    }, [messages, error])


    const resend = useCallback(async () => {
        setError(undefined)

        const lastMessage = messages[messages.length - 1]

        sendMessageRequest(lastMessage.text, messages)
    }, [messages])



    return {model, changeModel, messages, sendMessage, resend, loading, error}
}
