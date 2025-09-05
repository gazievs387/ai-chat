import { Box, Button, Typography } from '@mui/material';
import { ChatsList } from 'entities/ChatsList';
import { useAuth } from 'shared/model/authContext/hooks';
import { useGetChats } from '../hooks/useGetChats';
import { LoadIcon } from 'shared/UI/LoadIcon';
import { ChatType } from '@ai_chat/types';
import { AxiosError } from 'axios';


interface ChatsProps {
    chats: ChatType[];
    loading: boolean;
    error?: AxiosError;
    retry: () => void;
}

function Chats({chats, loading, error, retry}: ChatsProps) {
    if (error) {
        return (
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{fontSize: 13, mt: 2}}>Произошла ошибка</Typography>

                <Button onClick={retry} variant="text">Повторить</Button>
            </Box>
        )
    }

    if (loading) {
        return (
            <LoadIcon size={25} sx={{display: "flex", justifyContent: "center", mt: 2}} />
        )
    }

    return (
        <ChatsList chats={chats} />
    )

}

interface ChatsSectionProps {
    open: boolean;
}

export function ChatsSection({open}: ChatsSectionProps) {
    const { isLogin } = useAuth()
    const { chats, loading, error, retry } = useGetChats() 


    return (
        <Box sx={{display: open ? "initial" : "none",  mt: 5}}>
            <Box sx={{px: 2.5}}>
                <Typography color="textSecondary" sx={{fontSize: 14, userSelect: "none"}}>Чаты</Typography>
            </Box>

            {isLogin
                ?
            <Chats 
                chats={chats} 
                loading={loading} 
                error={error} 
                retry={retry} 
            />
                :
            <>
                <Typography color="textPrimary" sx={{fontSize: 13, textWrap: "wrap", px: 2.5, mt: 1}}>
                    Войдите, чтобы сохранить историю чатов
                </Typography>
            </>}
        </Box>
    )
}
