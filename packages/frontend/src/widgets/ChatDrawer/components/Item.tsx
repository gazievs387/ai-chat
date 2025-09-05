import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { IconType } from 'react-icons';


interface ItemProps {
    open: boolean;
    text: string;
    Icon: IconType;
    onClick?: () => void;
}


export function Item({open, text, Icon, onClick}: ItemProps) {
    const t = useTheme() 


    return (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                onClick={onClick}
                sx={[
                {
                    minHeight: 48,
                    px: 2.5,
                    display: "flex",
                    ":hover": {
                        bgcolor: t.palette.background.default
                    }
                },
                open
                    ? {
                        justifyContent: 'initial',
                    }
                    : {
                        justifyContent: 'center',
                    },
                ]}
            >
                <ListItemIcon
                    sx={[
                        {
                            minWidth: 0,
                            justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: 'auto',
                        },
                    ]}
                >
                    <Icon strokeWidth={1.5} color={t.palette.text.primary} size={20} />
                </ListItemIcon>
                <ListItemText
                    primary={text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                        }
                        : {
                            opacity: 0,
                        },
                        {
                            "& .MuiTypography-root": {
                                fontSize: 14
                            }
                        }
                    ]}
                />
            </ListItemButton>
        </ListItem>
    )
}
