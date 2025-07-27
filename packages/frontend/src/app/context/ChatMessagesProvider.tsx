import React, { PropsWithChildren, useState } from 'react';
import { ChatMessages } from "shared/model/chatMessages"
import { MessageType } from 'shared/types/messages';


export function ChatMessagesProvider({children}: PropsWithChildren) {
    const [messages, setMessages] = useState<MessageType[]>([])


    return (
        <ChatMessages.Provider value={{messages, setMessages}}>
            {children}
        </ChatMessages.Provider>
    )
}
