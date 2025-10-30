import { ChatType } from '@ai_chat/types';
import { List, Typography } from '@mui/material';
import { ChatItem } from './ChatItem';
import { useChatMessages } from 'shared/hooks/useChatMessages';
import { useIsMobile } from 'shared/hooks/useIsMobile';
import { useAppDispatch } from 'shared/model';
import { useCallback } from 'react';
import { toggleDrawer } from 'shared/model/slices/drawer';
import { useToast } from 'shared/hooks/useToast';


interface ChatsListProps {
    chats: ChatType[];
}

export function ChatsList({chats}: ChatsListProps) {
    const { getChat, chatId } = useChatMessages()
    const isMobile = useIsMobile()
    const toast = useToast()
    const dispatch = useAppDispatch()


    const getChatOnClick = useCallback((id: number) => {
        if (isMobile) {
            dispatch(toggleDrawer({value: false}))
        }

        getChat(id).catch(() => {
            toast("Не получилось загрузить чат. Попробуйте снова", "error")
        })
    }, [isMobile, getChat])


    if (chats && chats.length === 0) {
        return (
            <Typography color="textPrimary" sx={{fontSize: 13, textWrap: "wrap", px: 2.5, mt: 1}}>
                Нет сохраненных чатов
            </Typography>
        )
    }
    

    return (
        <List>
            {chats.map((chat) => {
                return (
                    <ChatItem 
                        key={chat.id} 
                        id={chat.id}
                        active={chatId === chat.id} 
                        text={chat.title} 
                        onClickItem={getChatOnClick}
                    />
                )
            })}
        </List>
    )
}
