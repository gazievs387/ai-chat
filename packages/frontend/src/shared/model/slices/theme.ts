import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeType } from "shared/types/theme";


export interface ThemeState {
    theme: themeType;
}

const initialState: ThemeState = {
   theme: localStorage.getItem("theme") === "dark" ? "dark" : "light"
}


export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<themeType>) {
            state.theme = action.payload
        }
    },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
