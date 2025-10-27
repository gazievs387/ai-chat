import { ChatType } from "@ai_chat/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface ChatsListState {
    chats: ChatType[];
}

const initialState: ChatsListState = {
   chats: []
}


export const chatsList = createSlice({
    name: 'chatsList',
    initialState,
    reducers: {
        setChats(state, action: PayloadAction<ChatType[]>) {
            state.chats = action.payload
        },

        addChat(state, action: PayloadAction<ChatType>) {
            state.chats.unshift(action.payload)
        }
    },
})

export const { setChats, addChat } = chatsList.actions

export default chatsList.reducer
