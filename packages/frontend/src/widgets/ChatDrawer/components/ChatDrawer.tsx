import { IconButton, List, styled } from '@mui/material';
import React, { useState } from 'react';
import { LuChevronLeft, LuSearch } from 'react-icons/lu';
import { Drawer } from 'shared/UI/Drawer';
import { Item } from './Item';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { blueMain } from 'shared/static/styles/base';
import { RiChatAiFill } from 'react-icons/ri';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
}));


export function ChatDrawer() {
    const [open, setOpen] = useState(true);

     
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    
    return (
        <Drawer open={open}>
            <DrawerHeader>
                <IconButton 
                    onClick={handleDrawerOpen}
                    sx={{cursor: !open ? "e-resize" : "pointer"}} 
                >
                    <RiChatAiFill 
                        color={blueMain} 
                        size={25} 
                    />
                </IconButton>

                <IconButton style={{display: !open ? "none" : undefined, cursor: "e-resize"}} onClick={handleDrawerClose}>
                    <LuChevronLeft />
                </IconButton>
            </DrawerHeader>

            <List>
                <Item text="Новый чат" Icon={HiOutlinePencilAlt} open={open} />

                <Item text="Поиск в чатах" Icon={LuSearch} open={open} />
            </List>

            {/* <List sx={{px: 2.5, mt: 5}}>
                <Box sx={{opacity: open ? 1 : 0}}>
                    <Typography color="textSecondary" sx={{fontSize: 14, userSelect: "none"}}>Чаты</Typography>
                </Box>
            </List> */}
        </Drawer>
    )
}
