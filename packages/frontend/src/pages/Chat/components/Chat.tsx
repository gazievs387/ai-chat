import { Box, SelectChangeEvent } from '@mui/material';
import { ChatForm } from 'features/ChatForm';
import React from 'react';
import { ChatDrawer } from 'widgets/ChatDrawer';
import { ChatHeader } from 'widgets/ChatHeader';
import { ChatMessages } from 'widgets/ChatMessages';


export function Chat() {
    const [model, setModel] = React.useState('1');


    const handleChange = (event: SelectChangeEvent) => {
        setModel(event.target.value as string);
    };


    return (
        <main style={{display: "flex"}}>
            <ChatDrawer />

            <Box sx={(t) => ({ 
                display: "flex", 
                flexDirection: "column", 
                flex: 1, 
                bgcolor: t.palette.background.default,
                height: "100vh", 
                minWidth: 0
            })}>
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
