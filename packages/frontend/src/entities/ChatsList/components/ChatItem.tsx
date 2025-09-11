import { ListItem, ListItemButton, ListItemText, Typography, useTheme } from '@mui/material';
import { useChatMessages } from 'shared/hooks/useChatMessages';


interface ChatItemProps {
    id: number;
    text: string;
    active?: boolean;
}

export function ChatItem({id, text, active=false}: ChatItemProps) {
    const t = useTheme() 

    const { getChat } = useChatMessages()

    
    return (
        <ListItem key={text} disablePadding sx={{ display: 'block', maxWidth: 300}}>
            <ListItemButton
                onClick={() => {getChat(id)}}
                sx={{
                    minHeight: 36,
                    bgcolor: active ? t.palette.background.default : "initial",
                    px: 2.5,
                    py: 1,
                    display: "flex",
                    justifyContent: 'center',
                    ":hover": {
                        bgcolor: t.palette.background.default
                    }
                }}
            >
                <ListItemText
                    primary={text}
                    slotProps={{
                        primary: {
                            noWrap: true, 
                            sx: {
                                fontSize: 14,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }
                        }
                    }}
                />
            </ListItemButton>
        </ListItem>
    )
}
