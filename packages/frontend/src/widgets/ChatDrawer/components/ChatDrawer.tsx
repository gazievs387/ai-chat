import { Box, IconButton, List, styled } from '@mui/material';
import { LuChevronLeft } from 'react-icons/lu';
import { Drawer } from 'shared/UI/Drawer';
import { Item } from './Item';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { blueMain } from 'shared/static/styles/base';
import { RiChatAiFill } from 'react-icons/ri';
import { ChatsSection } from 'features/ChatsSection';
import { useChatMessages } from 'shared/hooks/useChatMessages';
import { useIsMobile } from 'shared/hooks/useIsMobile';
import { AuthButton } from 'features/AuthButton';
import { useDrawer } from 'shared/hooks/useDrawer';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from 'shared/model/slices/drawer';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: "space-between",
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
}));


export function ChatDrawer() {
    const { startNewChat } = useChatMessages()
    const isMobile = useIsMobile()
    const {open, setOpen} = useDrawer()
    const dispatch = useDispatch()


    const startNewChatOnClick = useCallback(() => {
        if (isMobile) {
            dispatch(toggleDrawer({value: false}))
        }

        startNewChat()
    }, [isMobile, startNewChat])
     
    const handleDrawerOpen = useCallback(() => {
        setOpen(true);
    }, [])
    
    const handleDrawerClose = useCallback(() => {
        setOpen(false);
    }, [])

    
    return (
        <Drawer sx={{position: "relative"}} onClose={() => {setOpen(false)}} mobile={isMobile} open={open}>
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
                <Item onClick={startNewChatOnClick} text="Новый чат" Icon={HiOutlinePencilAlt} open={open} />
            </List>

            <ChatsSection open={open} />

            {isMobile && 
            <Box 
                sx={(t) => ({
                    position: "fixed", 
                    width: "100%",
                    maxWidth: "300px",
                    bottom: 0, 
                    boxSizing: "border-box",
                    bgcolor: t.palette.background.default, 
                    borderTopWidth: "2px", 
                    borderTopStyle: "solid", 
                    borderTopColor: t.palette.divider, 
                    px: 2.5, 
                    py: 1,
                    mt: 2
                })}
            >
                <AuthButton />
            </Box>}
        </Drawer>
    )
}
