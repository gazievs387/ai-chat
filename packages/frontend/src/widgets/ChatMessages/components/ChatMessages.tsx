import { useEffect, useRef } from "react"
import { Box, Typography } from '@mui/material';
import { Message } from 'entities/Message';
import { useChatMessages } from 'shared/hooks/useChatMessages';
import { Alert } from "shared/UI/Alert"
import { LoadIcon } from "shared/UI/LoadIcon";
import {ErrorHandler} from "shared/UI/ErrorHandler/components/ErrorHandler";
import { Link } from "react-router";
import { blueMain } from "shared/static/styles/base";


export function ChatMessages() {
    const { messages, chatId, loading, error, resend } = useChatMessages() 
    const messagesElement = useRef<HTMLElement>(undefined)


    useEffect(() => {
        if (messagesElement.current) {
            if (messages[messages.length - 1].role === "user") {
                messagesElement.current?.scrollTo({top: messagesElement.current.scrollHeight, behavior: "smooth"})
            }
        }
    }, [messages])

    useEffect(() => {
        messagesElement.current?.scrollTo({top: messagesElement.current.scrollHeight, behavior: "instant"})
    }, [chatId])


    return (
        <Box sx={(t) => ({
            display: "flex", 
            flex: 1, 
            minHeight: 0
        })}>
            {messages.length 
                ? 
            <Box ref={messagesElement} key={chatId} sx={(t) => ({
                    display: "flex", 
                    overflowX: "hidden",
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
            <Box 
                sx={(t) => ({
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2, 
                    flex: 1, 
                    alignItems: "center", 
                    justifyContent: "center",
                    [t.breakpoints.down("lg")]: {
                        maxWidth: "90%",
                        mx: "5%"
                    }
                })}
            >
                <Typography 
                    sx={(t) => ({
                        fontSize: 28,
                        [t.breakpoints.down("lg")]: {
                            fontSize: 21
                        } 
                    })}
                >
                    Что вас интересует?
                </Typography>
                
                <Alert 
                    id="prototype-warn"
                >
                    <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                        AI Chat всего лишь прототип, поэтому для ответов используется бесплатный gemini api, который имеет ограничения по скорости и количеству запросов 
                        
                        <Link 
                            style={{color: blueMain, textDecoration: "none"}} 
                            to={"https://ai.google.dev/gemini-api/docs/rate-limits#current-rate-limits"} 
                            target="_blank"
                        >
                            Подробнее
                        </Link>
                    </Box>
                </Alert>
            </Box>}
        </Box>
    )
}
