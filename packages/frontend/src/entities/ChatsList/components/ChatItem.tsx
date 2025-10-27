import { ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { memo } from 'react';


interface ChatItemProps {
    id: number;
    text: string;
    active?: boolean;
    onClickItem: (id: number) => void;
}

function ChatItemComponent({id, text, active=false, onClickItem}: ChatItemProps) {
    const t = useTheme() 


    return (
        <ListItem key={text} disablePadding sx={{ display: 'block', maxWidth: 300}}>
            <ListItemButton
                onClick={() => {onClickItem(id)}}
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


export const ChatItem = memo(ChatItemComponent)
