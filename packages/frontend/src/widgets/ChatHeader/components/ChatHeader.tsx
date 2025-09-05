import { Box, Button, FormControl, InputBase, MenuItem, Select, SelectChangeEvent, styled, Typography, useTheme } from '@mui/material';
import { AuthModal } from 'features/AuthModal';
import { useState } from 'react';
import { useAuth } from 'shared/hooks/useAuth';
import { useChatMessages } from 'shared/hooks/useChatMessages';


const MenuItemHead = styled(Typography)({
    fontSize: 15, 
    '.select-btn &': {
        lineHeight: "27px"
    }
})

const MenuItemText = styled(Typography, { })(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: 12, 
    maxWidth: 200, 
    wordBreak: "break-word", 
    whiteSpace: "pre-wrap",
    '.select-btn &': {
        display: "none",
    }
}))


export function ChatHeader() {
    const { model, changeModel } = useChatMessages() 
    const theme = useTheme() 
    const { isLogin, logout } = useAuth()
    const [openAuthModal, setOpenAuthModal] = useState(false)

    
    const handleChange = (event: SelectChangeEvent) => {
        changeModel(event.target.value as string);
    };
    
    
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 2}}>
            <FormControl>
                <Select
                    labelId="mode-select"
                    id="ai-model-select"
                    value={model}
                    onChange={handleChange}
                    className="select-btn"
                    label=""
                    input={<InputBase sx={{fontSize: 18, borderRadius: 2, px: 2, py: 0.5, ":hover": {bgcolor: theme.palette.background.lightGray}}} />}
                >
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"gemini-2.5-pro"}>
                        <MenuItemHead>Gemini 2.5 Pro</MenuItemHead> 

                        <MenuItemText>
                            Мощная модель для сложнейших задач
                        </MenuItemText>
                    </MenuItem>
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"gemini-2.5-flash"}>
                        <MenuItemHead sx={{fontSize: 15}}>Gemini 2.5 Flash</MenuItemHead>

                        <MenuItemText>
                            Быстрая и универсальная модель для частого использования
                        </MenuItemText>
                    </MenuItem>
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"gemini-2.5-flash-lite"}>
                        <MenuItemHead>Gemini 2.5 Flash-Lite</MenuItemHead>

                        <MenuItemText>
                            Быстрая и дешевая модель для простых операций
                        </MenuItemText>
                    </MenuItem>
                </Select>
            </FormControl>

            <Box sx={{mr: 5}}>
                {isLogin 
                    ?
                <Button 
                    variant="text" 
                    onClick={logout}
                >
                    Logout
                </Button>
                    :
                <Button 
                    variant="outlined" 
                    size="medium"
                    onClick={() => {setOpenAuthModal(true)}}
                >
                    Войти
                </Button>}
            </Box>

            <AuthModal 
                open={openAuthModal} 
                handleClose={() => setOpenAuthModal(false)} 
            />
        </Box>
    )
}
