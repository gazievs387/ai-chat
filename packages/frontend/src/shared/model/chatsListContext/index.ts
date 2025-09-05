import { ChatType } from "@ai_chat/types";
import { createContext, Dispatch, SetStateAction } from "react";


interface ChatsListContextParams {
    chats: ChatType[];
    setChats: Dispatch<SetStateAction<ChatType[]>>
}

const ChatsListContext = createContext<ChatsListContextParams>({chats: [], setChats: () => {}})


export { ChatsListContext }
