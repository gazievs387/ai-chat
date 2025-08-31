import React, { PropsWithChildren, useState } from 'react';
import { ChatMessages } from "shared/model/chatMessages"
import { QueryError } from 'shared/types/api';
import { MessageType } from '@ai_chat/types';


export function ChatMessagesProvider({children}: PropsWithChildren) {
    const [model, setModel] = useState('gemini-2.5-flash');
    const [messages, setMessages] = useState<MessageType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<QueryError>(undefined)

 
    return (
        <ChatMessages.Provider value={{model, setModel, messages, setMessages, loading, setLoading, error, setError}}>
            {children}
        </ChatMessages.Provider>
    )
}
