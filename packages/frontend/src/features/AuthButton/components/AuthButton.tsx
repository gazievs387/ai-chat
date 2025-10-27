import { Button } from '@mui/material';
import { AuthModal } from './AuthModal';
import { useState } from 'react';
import { useChatMessages } from 'shared/hooks/useChatMessages';
import { useIsLogin } from 'shared/hooks/useIsLogin';
import { useAppDispatch } from 'shared/model';
import { logout } from 'shared/model/slices/auth';


export function AuthButton() {
    const isLogin = useIsLogin()
    const [openAuthModal, setOpenAuthModal] = useState(false)
    const { startNewChat } = useChatMessages()
    const dispatch = useAppDispatch()
    
        
    return (
        <>
            {isLogin 
                    ?
                <Button 
                    variant="text" 
                    size="medium"
                    sx={{minWidth: 0, px: 0}}
                    onClick={() => {dispatch(logout()); startNewChat()}}
                >
                    Выйти
                </Button>
                    :
                <Button 
                    variant="outlined" 
                    size="medium"
                    onClick={() => {setOpenAuthModal(true)}}
                >
                    Войти
                </Button>}

                <AuthModal 
                    open={openAuthModal} 
                    handleClose={() => setOpenAuthModal(false)} 
                />
        </>
    )
}
