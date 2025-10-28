import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { baseURL } from 'shared/api/api';
import { useAppDispatch } from 'shared/model';
import { login } from 'shared/model/slices/auth';


interface ILoginData {
    accessToken: string;
    refreshToken: string;
}


export function useGoogleOAuth(params?: {onSuccess?: Function, onError?: Function}): () => void {
    const dispatch = useAppDispatch()


    const googleLogin = useGoogleLogin({
        redirect_uri: "https://aichat.gaziev-s.ru",
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const data = {code: codeResponse.code}

            axios.post<ILoginData>(baseURL + "auth", data)
            
            .then((response) => {
                const {accessToken, refreshToken} = response.data

                dispatch(login({accessToken, refreshToken}))

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
