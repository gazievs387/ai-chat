import { ChatType, MessageType } from "@ai_chat/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryError } from "shared/types/api";


export interface ChatMessagesState {
    model: string;
    chatId?: number;
    messages: MessageType[];
    msgResponseLoading: boolean;
    chatLoading: boolean;
    error: QueryError;
}

const initialState: ChatMessagesState = {
   model: "gemini-2.5-flash",
   messages: [],
   msgResponseLoading: false,
   chatLoading: false,
   error: undefined
}


export const chatMessages = createSlice({
    name: 'chatMessages',
    initialState,
    reducers: {
        startNewChatAction(state) {
            state.messages = []

            state.chatId = undefined
        },

        changeModelAction(state, action: PayloadAction<string>) {
            state.model = action.payload
        },

        setChat(state, action: PayloadAction<{chat: ChatType, messages: MessageType[]}>) {
            const { chat, messages } = action.payload

            state.chatId = chat.id
            state.model = chat.model

            state.messages = messages
        },

        setChatLoading(state, action: PayloadAction<boolean>) {
            state.chatLoading = action.payload
        },

        setMsgResponseLoading(state, action: PayloadAction<boolean>) {
            state.msgResponseLoading = action.payload
        },

        addNewMessage(state, action: PayloadAction<{message: MessageType, newChat?: ChatType}>) {
            const { newChat, message } = action.payload

            if (newChat) {
                state.chatId = newChat.id
            }
        
            state.messages.push(message)
        },

        setMsgResponseError(state, action: PayloadAction<QueryError>) {
            state.error = action.payload
        }
    },
})

export const { 
    startNewChatAction, 
    changeModelAction, 
    setChat, 
    setChatLoading,
    setMsgResponseLoading,
    addNewMessage,
    setMsgResponseError
} = chatMessages.actions

export default chatMessages.reducer
