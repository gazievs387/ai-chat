import axios from "axios"
import { store } from "shared/model"
import { logout, updateTokens } from "shared/model/slices/auth"


export const baseURL = process.env.API || "http://localhost:3001/"

const api = axios.create({
    baseURL: baseURL
})


api.interceptors.request.use((config) => {
    if (localStorage.getItem('access')) {
        config.headers.Authorization = localStorage.getItem('access')
        
    }

    return config 
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {

    const originalRequest = error.config

    if (error?.response?.status === 401 && error.config && !error.config._isRetry && (error.response?.data?.code !== "user_inactive")) {
        originalRequest._isRetry = 'true'
        try {
            const response = await axios.post<{access: string, refresh: string}>(baseURL + "token/refresh", {refresh: localStorage.getItem('refresh')});
            
            const tokens = response.data

            localStorage.setItem("access", tokens.access)
            localStorage.setItem("refresh", tokens.refresh)

            store.dispatch(updateTokens(tokens))
            
            return api.request(originalRequest)    
        } catch (error1) { 
            if (error?.response?.status === 401 && error.config && error.config._isRetry) {
                store.dispatch(logout())
            }
        }
    } 


    throw error 
})


export { api } 
