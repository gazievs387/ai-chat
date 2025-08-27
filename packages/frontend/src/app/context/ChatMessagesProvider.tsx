import React, { PropsWithChildren, useState } from 'react';
import { ChatMessages } from "shared/model/chatMessages"
import { QueryError } from 'shared/types/api';
import { MessageType } from 'shared/types/messages';


export function ChatMessagesProvider({children}: PropsWithChildren) {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<QueryError>(undefined)
    
 
    return (
        <ChatMessages.Provider value={{messages, setMessages, loading, setLoading, error, setError}}>
            {children}
        </ChatMessages.Provider>
    )
}
