import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { useChatMessages } from 'shared/hooks/useChatMessages';
import { useIsMobile } from 'shared/hooks/useIsMobile';
import { LoadIcon } from 'shared/UI/LoadIcon';


export function ChatLoadModal() {
    const { chatLoading } = useChatMessages() 
    const isMobile = useIsMobile()

    const modalSize = isMobile ? 70 : 80

    
    return (
        <Modal 
            open={chatLoading}
            onClose={() => {}}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                }
            }}
        >
            <Fade in={chatLoading}>
                <Box 
                    sx={{
                        position: 'absolute',
                        display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                        width: modalSize,
                        height: modalSize,
                        borderRadius: 40,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        // width: 400,
                        boxShadow: "0px 4px 20px rgba(255,255,255,0.7)", 
                        bgcolor: "rgba(255,255,255,0.7)",
                        p: isMobile ? 2 : 4,
                    }}
                >
                    <LoadIcon size={modalSize - 30}/>
                </Box>
            </Fade>
        </Modal>
    )
}
