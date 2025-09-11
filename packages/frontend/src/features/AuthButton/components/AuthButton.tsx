import { Button } from '@mui/material';
import { AuthModal } from './AuthModal';
import { useAuth } from 'shared/hooks/useAuth';
import { useState } from 'react';
import { useDrawer } from 'shared/hooks/useDrawer';


export function AuthButton() {
    const { isLogin, logout } = useAuth()
    const [openAuthModal, setOpenAuthModal] = useState(false)
    
        
    return (
        <>
            {isLogin 
                    ?
                <Button 
                    variant="text" 
                    size="medium"
                    sx={{minWidth: 0, px: 0}}
                    onClick={logout}
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
