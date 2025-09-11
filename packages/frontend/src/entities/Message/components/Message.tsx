import { memo } from 'react';
import { Box, Typography} from '@mui/material';
import { MessageType } from '@ai_chat/types';
import { MessageMarkdown } from './MessageMarkdown';
import { useIsMobile } from 'shared/hooks/useIsMobile';


interface MessageProps {
    message: MessageType
}


function MessageComponent({message} : MessageProps) {
    const isMobile = useIsMobile()
    const isUserMessage = message.role === "user"


    return (
        <Box 
            sx={(t) => ({
                bgcolor: isUserMessage ? t.palette.background.lightGray : undefined,  
                width: (isUserMessage || isMobile) ? "unset" : "60%", 
                boxSizing: "border-box",
                alignSelf: isUserMessage ? "flex-end" : (isMobile ? "initial" : "center"), 
                whiteSpace: "pre-wrap", 
                wordBreak: "break-word", 
                borderRadius: 5,
                borderStartEndRadius: 5,
                py: 0.5,
                px: 2,
                mr: isUserMessage ? (isMobile ? 2.5 : "20%") : "unset",
                ml: isUserMessage ? (isMobile ? "15%" : "30%") : "unset",
                my: 1.5
            })}
        >
            {isUserMessage 
                ? 
            <Typography 
                sx={{fontSize: isMobile ? 15 : "initial", wordSpacing: 2, lineHeight: 1.8}}
                color="textPrimary"
            >
                {message.text}
            </Typography>
                :
            <MessageMarkdown 
                text={message.text} 
                textSx={isMobile ? {fontSize: 15} : undefined}
            />}
        </Box>
    )
}


export const Message = memo(MessageComponent) 
