import { Box, SelectChangeEvent } from '@mui/material';
import { ChatForm } from 'features/ChatForm';
import React, { useState } from 'react';
import { ChatDrawer } from 'widgets/ChatDrawer';
import { ChatHeader } from 'widgets/ChatHeader';
import { ChatMessages } from 'widgets/ChatMessages';


export function Chat() {
    const [messages, setMessages] = useState<string[]>([])
    const [model, setModel] = React.useState('1');


    const handleChange = (event: SelectChangeEvent) => {
        setModel(event.target.value as string);
    };


    return (
        <main style={{display: "flex"}}>
            <ChatDrawer />

            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, height: "100vh"}}>
                <ChatHeader 
                    model={model} 
                    handleChange={handleChange} 
                />
            
                <ChatMessages />

                <ChatForm />
            </Box>
        </main>
    )
}
