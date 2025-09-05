import { ChatType } from '@ai_chat/types';
import { List } from '@mui/material';
import { ChatItem } from './ChatItem';
import { useChatMessages } from 'shared/model/chatMessages';


interface ChatsListProps {
    chats: ChatType[];
}

export function ChatsList({chats}: ChatsListProps) {
    const { chatId } = useChatMessages() 

    return (
        <List>
            {chats.map((chat) => {
                return (
                    <ChatItem 
                        key={chat.id} 
                        active={chatId === chat.id} 
                        text={chat.title} 
                    />
                )
            })}
        </List>
    )
}
