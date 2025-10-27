import { ChatType } from '@ai_chat/types';
import { List } from '@mui/material';
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
