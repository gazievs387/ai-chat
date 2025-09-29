import React, { PropsWithChildren, useState } from 'react';
import { ChatMessages } from "shared/model/chatMessages"
import { QueryError } from 'shared/types/api';
import { MessageType } from '@ai_chat/types';


export function ChatMessagesProvider({children}: PropsWithChildren) {
    const [model, setModel] = useState('standard');
    const [chatId, setChatId] = useState<number | undefined>(undefined)
    const [messages, setMessages] = useState<MessageType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [chatLoading, setChatLoading] = useState(false)
    const [error, setError] = useState<QueryError>(undefined)

 
    return (
        <ChatMessages.Provider value={{model, setModel, chatId, setChatId, messages, setMessages, loading, setLoading, chatLoading, setChatLoading, error, setError}}>
            {children}
        </ChatMessages.Provider>
    )
}
