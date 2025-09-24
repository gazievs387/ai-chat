import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAuth } from 'shared/hooks/useAuth';


interface ILoginData {
    accessToken: string;
    refreshToken: string;
}


export function useGoogleOAuth(params?: {onSuccess?: Function, onError?: Function}): () => void {
    const { login } = useAuth() 


    const googleLogin = useGoogleLogin({
        redirect_uri: "https://aichat.ideasocial.ru",
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const data = {code: codeResponse.code}

            axios.post<ILoginData>("http://localhost:3001/auth", data)
            
            .then((response) => {
                const {accessToken, refreshToken} = response.data

                login({accessToken, refreshToken})

                params?.onSuccess?.()
            })

            .catch((error) => {
                params?.onError?.()
            })
        },
        onError: () => {
            params?.onError?.()
        },
    })


    return googleLogin
}
