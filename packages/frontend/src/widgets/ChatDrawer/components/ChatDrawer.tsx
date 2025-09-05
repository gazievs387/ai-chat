import { IconButton, List, styled } from '@mui/material';
import { useState } from 'react';
import { LuChevronLeft, LuSearch } from 'react-icons/lu';
import { Drawer } from 'shared/UI/Drawer';
import { Item } from './Item';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { blueMain } from 'shared/static/styles/base';
import { RiChatAiFill } from 'react-icons/ri';
import { ChatsSection } from 'features/ChatsSection';
import { useChatMessages } from 'shared/hooks/useChatMessages';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
}));


export function ChatDrawer() {
    const { startNewChat } = useChatMessages()
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
                <Item onClick={startNewChat} text="Новый чат" Icon={HiOutlinePencilAlt} open={open} />

                <Item text="Поиск в чатах" Icon={LuSearch} open={open} />
            </List>

            <ChatsSection open={open} />
        </Drawer>
    )
}
