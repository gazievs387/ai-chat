import { Box, Button, TextField } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';


export function MiniChatForm({onNewMessage}: {onNewMessage: (text: string) => void}) {
    const [text, setText] = useState("")


    function sendMessage() {
        if (text.trim()) {
            onNewMessage(text)

            setText("")
        }
    }
 
    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault() 

        sendMessage()
    }


    return (
        <Box 
            component="form" 
            autoComplete="off" 
            onSubmit={handleSubmit} 
            sx={(t) => ({
                display: "flex", 
                p: 2,
                borderTop: "1px solid",
                borderTopColor: t.palette.divider,
                backgroundColor: t.palette.background.default
            })}
        >
            <TextField
                label="О чем хотите узнать?"
                sx={{
                    mr: 1
                }} 
                variant="outlined" 
                size="small" 
                value={text}
                onChange={(e) => {setText(e.target.value)}}
            />

            <Button 
                onClick={sendMessage}
                variant="contained" 
                size="medium" 
                sx={{textTransform: "none", alignItems: "center", textAlignLast: "center"}}
            >
                Отправить
            </Button>
        </Box>
    )
}
