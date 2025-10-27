import { Box, Button, IconButton, TextField, useTheme } from '@mui/material';
import { useState } from 'react';
import { LuSendHorizontal } from 'react-icons/lu';
import { MdOutlineAttachFile } from 'react-icons/md';
import { useChatMessages } from 'shared/hooks/useChatMessages';


export function ChatForm() {
    const { sendMessage, error, msgResponseLoading } = useChatMessages() 
    const [text, setText] = useState("")
    const theme = useTheme() 


    function handleMessage() {
        if (error || msgResponseLoading) return 

        if (text.trim()) {
            sendMessage(text)

            setText("")
        }

    }


    return (
        <Box 
            component={"form"} 
            sx={{
                display: "flex", 
                alignItems: "flex-end", 
                gap: 2, 
                width: "60%", 
                minWidth: "300px", 
                px: "20%", 
                py: 5, 
                [theme.breakpoints.down("lg")]: {
                    width: "96%", 
                    minWidth: "200px", 
                    gap: 0.5, 
                    px: "2%", 
                    pb: 4
                }
            }}
        >
            <IconButton sx={{height: "40px"}} size="small">
                <MdOutlineAttachFile color={theme.palette.text.secondary} size={25} />
            </IconButton>

            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                multiline 
                sx={{
                    scrollbarColor: "#000", 
                    msScrollbarTrackColor: "black",
                    "& textarea": !text ? {
                        textWrap: "nowrap",
                        textOverflow: "hidden"
                    } : {},
                    [theme.breakpoints.down("lg")]: {
                        "& textarea": {
                            fontSize: 14
                        }
                    }
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();

                        handleMessage()
                    }
                }}
                maxRows={7} 
                placeholder="Спросите о чем-нибудь..." 
                size="small" 
            /> 
            
            <IconButton onClick={handleMessage} sx={{height: "40px"}} size="small">
                <LuSendHorizontal color={theme.palette.text.secondary} size={25} />
            </IconButton>
        </Box>
    )
}
