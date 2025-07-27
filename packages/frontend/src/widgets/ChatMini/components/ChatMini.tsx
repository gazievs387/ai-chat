import { Box, Paper, Typography } from '@mui/material';
import { Logo } from 'shared/UI/Logo';
import { useState } from 'react';
import { MiniChatForm } from 'features/MiniChatForm';


interface MessageProps {
    text: string;
}

function Message({text}: MessageProps) {
    return (
        <Typography sx={(t) => ({bgcolor: t.palette.background.lightGray, m: 2, p: 1, pl: 2, borderRadius: 2, width: "80%"})} color="textPrimary">
            {text}
        </Typography>
    )
}


export function ChatMini() {
    const [messages, setMessages] = useState(["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, asperiores?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, asperiores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, asperiores?"])


    return (
        <Paper elevation={5} sx={{display: "flex", flexDirection: "column", width: "100%", height: 450, borderRadius: 2, overflow: "hidden"}}>
            <Box 
                sx={(theme) => ({
                    display: "flex",
                    height: 37,
                    alignItems: "center",
                    backgroundColor: theme.palette.primary.main,
                    pl: 2
                })}
            >
                <Logo color="white" size={22} /> <Typography sx={{pl: 1}} color="white">AI Chat</Typography>
            </Box>

            <Box sx={(t) => ({flex: 1, overflow: "auto", backgroundColor: t.palette.background.default})}>
                {messages.map((item, index) => (
                    <Message key={index} text={item} />
                ))}
            </Box>

            <MiniChatForm onNewMessage={(text) => setMessages([...messages, text])} />
        </Paper>
    )
}
