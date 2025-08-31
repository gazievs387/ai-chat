import { memo } from 'react';
import { Box, Typography} from '@mui/material';
import { MessageType } from '@ai_chat/types';
import { MessageMarkdown } from './MessageMarkdown';


interface MessageProps {
    message: MessageType
}


function MessageComponent({message} : MessageProps) {
    const isUserMessage = message.role === "user"


    return (
        <Box 
            sx={(t) => ({
                bgcolor: isUserMessage ? t.palette.background.lightGray : undefined,  
                width: isUserMessage ? "unset" : "60%", 
                boxSizing: "border-box",
                alignSelf: isUserMessage ? "flex-end" : "center", 
                whiteSpace: "pre-wrap", 
                wordBreak: "break-word", 
                borderRadius: 5,
                borderStartEndRadius: 5,
                py: 0.5,
                px: 2,
                mr: isUserMessage ? "20%" : "unset",
                ml: isUserMessage ? "30%" : "unset",
                my: 1.5
            })}
        >
            {isUserMessage 
                ? 
            <Typography 
                sx={{wordSpacing: 2, lineHeight: 1.8}}
                color="textPrimary"
            >
                {message.text}
            </Typography>
                :
            <MessageMarkdown 
                text={message.text} 
            />}
        </Box>
    )
}


export const Message = memo(MessageComponent) 
