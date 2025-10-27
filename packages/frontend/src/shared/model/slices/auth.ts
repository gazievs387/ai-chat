import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


function getTokensFromLocalStorage() {
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")

    if (access && refresh) {
        return { access, refresh }
    }

    return {}
}

const tokens = getTokensFromLocalStorage()


export interface AuthState {
    isLogin: boolean;
    access?: string;
    refresh?: string;
}

const initialState: AuthState = {
   isLogin: Boolean(localStorage.getItem("login")),
   access: tokens.access,
   refresh: tokens.refresh
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{accessToken: string, refreshToken: string}>) {
            const { accessToken, refreshToken } = action.payload
            localStorage.setItem("login", "true")
            localStorage.setItem("access", accessToken)
            localStorage.setItem("refresh", refreshToken)
    
            state.isLogin = true
            state.access = accessToken
            state.refresh = refreshToken
        },

        logout(state) {
            localStorage.removeItem("login")
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
    
            state.isLogin = false
            state.access = undefined
            state.refresh = undefined
        },

        updateTokens(state, action: PayloadAction<{access: string, refresh: string}>) {
            const { access, refresh } = action.payload

            localStorage.setItem("access", access)
            localStorage.setItem("refresh", refresh)
    
            state.access = access
            state.refresh = refresh
        }
    },
})

export const { login, logout, updateTokens } = authSlice.actions

export default authSlice.reducer
