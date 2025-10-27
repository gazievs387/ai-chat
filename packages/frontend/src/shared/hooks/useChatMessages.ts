import { useCallback } from "react"
import { isAxiosError } from "axios"
import { ChatType, MessageType } from "@ai_chat/types"
import { api } from "shared/api/api"
import { useAppDispatch, useAppSelector } from "shared/model"
import { addNewMessage, changeModelAction, setChat, setChatLoading, setMsgResponseError, setMsgResponseLoading, startNewChatAction } from "shared/model/slices/chatMessages"
import { addChat } from "shared/model/slices/chatsList"


export function useChatMessages() {
    const { messages, model, msgResponseLoading, chatLoading, chatId, error } = useAppSelector(state => state.chatMessages)
    const dispatch = useAppDispatch()
    

    const startNewChat = useCallback(() => {
        dispatch(startNewChatAction())
    }, [])

    const changeModel = useCallback((modeValue: string) => {
        dispatch(changeModelAction(modeValue))

        startNewChat()
    }, [startNewChat])

    const getChat = useCallback(async (chatId: number) => {
        dispatch(setChatLoading(true))

        const timeout =  setTimeout(() => {
            dispatch(setChatLoading(false))
        }, 10000)

        try {
            const response = await api.get<{chat: ChatType, messages: MessageType[]}>("chat/" + chatId)

            const data = response.data
            
            dispatch(setChat(data))
        } catch (error) {
            throw error
        } finally {
            clearTimeout(timeout)
            
            dispatch(setChatLoading(false))
        }

    }, [])

    const sendMessageRequest = useCallback(async (newMessageText: string, prevMessages: MessageType[]) => {
        dispatch(setMsgResponseLoading(true))

        try {
            const response = await api.post("send-message", {message: newMessageText, prevMessages, model, chatId})
            const responseMessage = response.data.message
            const responseChat = response.data.newChat

            const isNewChat = !chatId && responseChat

            if (isNewChat) {
                dispatch(addChat(responseChat))
            }

            dispatch(addNewMessage({message: responseMessage, newChat: isNewChat && responseChat}))
        } catch (error) {
            if (isAxiosError(error)) {
                dispatch(setMsgResponseError(error))
            }
            
        } finally {
            dispatch(setMsgResponseLoading(false))
        }
    }, [model, chatId])

    const sendMessage = useCallback(async (messageText: string) => {
        const message: MessageType = {id: Math.random() * 1000000, text: messageText, role: "user"}
        dispatch(addNewMessage({message}))

        sendMessageRequest(messageText, messages)
    }, [messages, sendMessageRequest])


    const resend = useCallback(async () => {
        dispatch(setMsgResponseError(undefined))

        const lastMessage = messages[messages.length - 1]

        sendMessageRequest(lastMessage.text, messages)
    }, [messages, sendMessageRequest])



    return {model, changeModel, setChatLoading, chatId, startNewChat, getChat, messages, sendMessage, resend, msgResponseLoading, chatLoading, error}
}
