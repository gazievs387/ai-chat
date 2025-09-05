import { useCallback, useContext } from "react"
import { ChatMessages } from "./chatMessages"
import { isAxiosError } from "axios"
import { MessageType } from "@ai_chat/types"
import { useAuth } from "../authContext/hooks"
import { api } from "shared/api/api"


export function useChatMessages() {
    const {model, setModel, chatId, setChatId, messages, setMessages, loading, setLoading, error, setError} = useContext(ChatMessages)
    const { access } = useAuth()


    function startNewChat() {
        setMessages([])

        setChatId(undefined)
    }

    const changeModel = (modeValue: string) => {
        setModel(modeValue);

        startNewChat()
    };

    const sendMessageRequest = useCallback(async (newMessageText: string, prevMessages: MessageType[]) => {
        setLoading(true) 

        try {
            const response = await api.post("send-message", {message: newMessageText, prevMessages, model, chatId}, {headers: {Authorization: access}})

            const responseMessage = response.data.message

            const responseChatId = response.data.chatId

            if (!chatId) {
                setChatId(responseChatId)
            }
        
            setMessages(prevMessages => [...prevMessages, responseMessage]) 
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error)
            }
            
        } finally {
            setLoading(false)
        }
    }, [model, chatId])

    const sendMessage = useCallback(async (message: string) => {
        setMessages(prevMessages => [...prevMessages, {id: Math.random() * 1000000, text: message, role: "user"}]) 

        sendMessageRequest(message, messages)
    }, [messages, error])


    const resend = useCallback(async () => {
        setError(undefined)

        const lastMessage = messages[messages.length - 1]

        sendMessageRequest(lastMessage.text, messages)
    }, [messages])



    return {model, changeModel, startNewChat, messages, sendMessage, resend, loading, error}
}
