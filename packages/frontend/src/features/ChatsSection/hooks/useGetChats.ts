import { ChatType } from "@ai_chat/types";
import { AxiosError, isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "shared/api/api";
import { ChatsListContext } from "shared/model/chatsListContext";


export function useGetChats() {
    const { chats, setChats } = useContext(ChatsListContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AxiosError | undefined>(undefined)


    async function getChats() {
        setError(undefined)

        setLoading(true)

        try {
            const response = await api.get<ChatType[]>("chats")

            setChats(response.data)
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
    }, [])
    

    return { chats, loading, error, retry: getChats}
}
