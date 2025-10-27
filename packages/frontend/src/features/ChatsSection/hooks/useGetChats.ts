import { ChatType } from "@ai_chat/types";
import { AxiosError, isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { api } from "shared/api/api";
import { useIsLogin } from "shared/hooks/useIsLogin";
import { useAppDispatch, useAppSelector } from "shared/model";
import { setChats } from "shared/model/slices/chatsList";


export function useGetChats() {
    const isLogin = useIsLogin()
    const chats = useAppSelector(state => state.chatsList.chats)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AxiosError | undefined>(undefined)
    const dispatch = useAppDispatch()


    async function getChats() {
        if (!isLogin) return 

        if (chats.length && !error) return


        setError(undefined)

        setLoading(true)

        try {
            const response = await api.get<ChatType[]>("chats")

            dispatch(setChats(response.data))
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error)
            }
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        getChats()
    }, [isLogin])
    

    return { chats, loading, error, retry: getChats}
}
