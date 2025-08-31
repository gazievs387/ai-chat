import { Box } from '@mui/material';
import { ChatForm } from 'features/ChatForm';
import { ChatDrawer } from 'widgets/ChatDrawer';
import { ChatHeader } from 'widgets/ChatHeader';
import { ChatMessages } from 'widgets/ChatMessages';


export function Chat() {
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
                <ChatHeader />
            
                <ChatMessages />

                <ChatForm />
            </Box>
        </main>
    )
}
