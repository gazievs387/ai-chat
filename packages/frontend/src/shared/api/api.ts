import axios from "axios"
import { updateLoginContext } from "shared/model/utils/updateAuthContext"


const baseURL = "http://localhost:3001/"

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
            const response = await axios.post(baseURL + "token/refresh", {refresh: localStorage.getItem('refresh')});
            
            const tokens = response.data

            localStorage.setItem("access", tokens.access)
            localStorage.setItem("refresh", tokens.refresh)

            updateLoginContext(true, tokens)
            
            return api.request(originalRequest)    
        } catch (error1) { 
            if (error?.response?.status === 401 && error.config && error.config._isRetry) {
                localStorage.removeItem("login")
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")

                updateLoginContext(false, {access: undefined, refresh: undefined})
            }
        }
    } 


    throw error 
})


export { api } 
