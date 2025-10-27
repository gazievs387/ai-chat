import { configureStore } from '@reduxjs/toolkit'
import auth from "./slices/auth"
import drawer from "./slices/drawer"
import theme from "./slices/theme"
import chatMessages from "./slices/chatMessages"
import chatsList from "./slices/chatsList"


export const store = configureStore({
    reducer: {
        auth,
        drawer,
        theme,
        chatMessages,
        chatsList
    }
})
