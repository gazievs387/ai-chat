import { ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material';


interface ChatItemProps {
    text: string;
    active?: boolean;
}

export function ChatItem({text, active=false}: ChatItemProps) {
    const t = useTheme() 

    return (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
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
                    slotProps={{primary: {
                        noWrap: true,
                        sx: {
                            fontSize: 14,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }
                    }}}
                />
            </ListItemButton>
        </ListItem>
    )
}
