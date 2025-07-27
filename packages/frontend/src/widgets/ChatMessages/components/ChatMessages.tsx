import { Box, Typography } from '@mui/material';
import { Message } from 'entities/Message';
import { useChatMessages } from 'shared/model/chatMessages';
import { Alert } from "shared/UI/Alert"


export function ChatMessages() {
    const { messages } = useChatMessages() 


    return (
        <Box sx={{display: "flex", flex: 1, minHeight: 0}}>
            {messages.length 
                ? 
            <div style={{display: "flex", overflowY: "scroll", flexDirection: "column", flex: 1}}>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
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
