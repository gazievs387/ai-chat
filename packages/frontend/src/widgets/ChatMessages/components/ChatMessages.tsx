import { useEffect, useRef } from "react"
import { Box, Typography } from '@mui/material';
import { Message } from 'entities/Message';
import { useChatMessages } from 'shared/model/chatMessages';
import { Alert } from "shared/UI/Alert"
import { LoadIcon } from "shared/UI/LoadIcon";
import {ErrorHandler} from "shared/UI/ErrorHandler/components/ErrorHandler";


export function ChatMessages() {
    const { messages, loading, error, resend } = useChatMessages() 
    const messagesElement = useRef<HTMLElement>(undefined)


    useEffect(() => {
        if (messagesElement.current) {
            if (messages[messages.length - 1].role === "user") {
                messagesElement.current?.scrollTo({top: messagesElement.current.scrollHeight, behavior: "smooth"})
            }
        }
    }, [messages])


    return (
        <Box sx={(t) => ({
            display: "flex", 
            flex: 1, 
            minHeight: 0
        })}>
            {messages.length 
                ? 
            <Box ref={messagesElement} sx={(t) => ({
                    display: "flex", 
                    overflowY: "auto", 
                    flexDirection: "column", 
                    flex: 1, 
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: t.palette.background.default, 
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: "lightgray",
                    borderRadius: '10px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#555'
                  },
                
            })}>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}

                
                {loading && <LoadIcon sx={{mt: 2, mb: 8}} />}

                <ErrorHandler error={error} retry={resend} />
            </Box> 
                :
            <div style={{display: "flex", flexDirection: "column", gap: 16, flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Typography sx={{fontSize: 28}}>Что вас интересует?</Typography>
                
                <Alert 
                    id="prototype-warn"
                >
                    AI Chat всего лишь прототип, поэтому для ответов используется бесплатный LLM api, который ограничен 10 запросами в час
                </Alert>
            </div>}
        </Box>
    )
}
