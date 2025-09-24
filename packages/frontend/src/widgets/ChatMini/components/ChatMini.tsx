import { Box, Button, Paper, Typography } from '@mui/material';
import { Logo } from 'shared/UI/Logo';
import { useState } from 'react';
import { MiniChatForm } from 'features/MiniChatForm';
import { MessageType } from '@ai_chat/types';
import { useNavigate } from 'react-router';


interface MessageProps {
    message: MessageType
}

function Message({message}: MessageProps) { 
    const navigate = useNavigate()


    if (message.role === "model" && message.id !== 0) {
        return (
            <Box
                sx={{
                    m: 2, 
                    p: 1, 
                }}
            >
                <Typography>
                    Перейдите на страницу чата, чтобы продолжить
                </Typography>

                <Button onClick={() => {navigate("/chat")}} variant="outlined" sx={{mt: 1}}>
                    Начать чат
                </Button>
            </Box>
        )
    }

    
    return (
        <Typography 
            sx={(t) => ({
                bgcolor: message.id !== 0 ? t.palette.background.lightGray : t.palette.background.default, 
                width: "60%",
                borderRadius: 2,
                m: 2, 
                mt: message.id === 0 ? 2 : 4,
                ml: message.id !== 0 ? "20%" : 0,
                p: 1, 
                pl: 2, 
            })} 
            color="textPrimary"
        >
            {message.text}
        </Typography>
    )
}


export function ChatMini() {
    const [messages, setMessages] = useState<MessageType[]>([{id: 0, text: "Чем могу вам помочь?", role: "model"}])


    function onNewMessage(newMessage: MessageType) {
        const modelMessage: MessageType = {id: Math.random(), text: "", role: "model"}

        setMessages([...messages, newMessage, modelMessage])
    }


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
                    <Message key={index} message={item} />
                ))}
            </Box>

            <MiniChatForm onNewMessage={onNewMessage} />
        </Paper>
    )
}
