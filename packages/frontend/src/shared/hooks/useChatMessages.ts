import { useCallback, useContext } from "react"
import { ChatMessages } from "../model/chatMessages"
import { isAxiosError } from "axios"
import { MessageType } from "@ai_chat/types"
import { useAuth } from "./useAuth"
import { api } from "shared/api/api"
import { ChatsListContext } from "../model/chatsListContext"
import { useDrawer } from "./useDrawer"
import { useIsMobile } from "./useIsMobile"
import { useToast } from "./useToast"


export function useChatMessages() {
    const {model, setModel, chatId, setChatId, messages, setMessages, loading, setLoading, chatLoading, setChatLoading, error, setError} = useContext(ChatMessages)
    const { setChats } = useContext(ChatsListContext)
    const { access } = useAuth()
    const isMobile = useIsMobile()
    const { setOpen } = useDrawer()
    const toast = useToast()
    

    function startNewChat() {
        if (isMobile) {
            setOpen(false)
        }

        setMessages([])

        setChatId(undefined)
    }

    function changeModel(modeValue: string) {
        setModel(modeValue);

        startNewChat()
    };

    async function getChat(chatId: number) {
        setChatLoading(true)

        if (isMobile) {
            setOpen(false)
        }
        
        const timeout =  setTimeout(() => {
            setChatLoading(false)
        }, 10000)

        try {
            const response = await api.get("chat/" + chatId)

            const { chat, messages } = response.data
                    
            setChatId(chat.id)
            setModel(chat.model)
            setMessages(messages)
        } catch (error) {
            toast("Не получилось загрузить чат. Попробуйте снова", "error")
        } finally {
            clearTimeout(timeout)
            
            setChatLoading(false)
        }

    }

    const sendMessageRequest = useCallback(async (newMessageText: string, prevMessages: MessageType[]) => {
        setLoading(true)

        try {
            const response = await api.post("send-message", {message: newMessageText, prevMessages, model, chatId}, {headers: {Authorization: access}})

            const responseMessage = response.data.message

            const responseChat = response.data.newChat

            if (!chatId && responseChat) {
                setChatId(responseChat.id)

                setChats(chats => [responseChat, ...chats])
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



    return {model, changeModel, setChatLoading, chatId, startNewChat, getChat, messages, sendMessage, resend, loading, chatLoading, error}
}
