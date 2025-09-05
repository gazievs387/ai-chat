import { ChatType } from '@ai_chat/types';
import React, { PropsWithChildren, useState } from 'react';
import { ChatsListContext } from 'shared/model/chatsListContext';


export function ChatsListProvider({children}: PropsWithChildren) {
    const [chats, setChats] = useState<ChatType[]>([])


    return (
        <ChatsListContext.Provider value={{chats, setChats}}>
            {children}
        </ChatsListContext.Provider>
    )
}
