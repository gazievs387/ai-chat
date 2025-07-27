import { Box, Button, FormControl, InputBase, MenuItem, Select, SelectChangeEvent, Typography, useTheme } from '@mui/material';
import React from 'react';


interface ChatHeaderProps {
    model: string;
    handleChange: (event: SelectChangeEvent) => void;
}


export function ChatHeader({model, handleChange}: ChatHeaderProps) {
    const theme = useTheme() 

    
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", p: 2}}>
            <FormControl>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={model}
                    onChange={handleChange}
                    label=""
                    input={<InputBase sx={{fontSize: 18, borderRadius: 2, px: 2, py: 0.5, ":hover": {bgcolor: theme.palette.background.lightGray}}} />}
                >
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"1"}>
                        <Typography>GPT4</Typography> 
                        <Typography color="textSecondary" sx={{fontSize: 13}}>
                            Продвинутая модель от Open AI
                        </Typography>
                    </MenuItem>
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"2"}>
                        <Typography>Meta LLama</Typography>
                        <Typography color="textSecondary" sx={{fontSize: 13}}>
                            Модель от Meta AI
                        </Typography>
                    </MenuItem>
                    <MenuItem sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} value={"3"}>
                        <Typography>AI Model</Typography>
                        <Typography color="textSecondary" sx={{fontSize: 13}}>
                            AI модель
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>

            <Box sx={{mr: 5}}>
                <Button variant="outlined" size="medium">
                    Войти
                </Button>
            </Box>
        </Box>
    )
}
