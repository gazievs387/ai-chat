import { memo } from 'react';
import { Box, Typography} from '@mui/material';
import { MessageType } from 'shared/types/messages';
import styles from "./styles.module.scss"
import { MessageMarkdown } from './MessageMarkdown';


interface MessageProps {
    message: MessageType
}


function MessageComponent({message} : MessageProps) {
    const isUserMessage = message.type === "user"


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
                my: 1.5
            })}
        >
            <Typography 
                sx={{wordSpacing: 2, lineHeight: 1.8}} 
                className={styles.markdown} 
                component="div" 
                color="textPrimary"
            >
                <MessageMarkdown text={message.text} />
            </Typography>
        </Box>
    )
}


export const Message = memo(MessageComponent) 
