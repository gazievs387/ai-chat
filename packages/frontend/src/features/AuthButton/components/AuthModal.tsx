import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { ReactComponent as GoogleIcon } from "shared/static/svgs/google.svg"
import { useGoogleOAuth } from "../hooks/useGoogleOAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { useChatMessages } from "shared/hooks/useChatMessages";
import { useToast } from "shared/hooks/useToast";


interface AuthModalProps {
    open: boolean;
    handleClose: () => void;
}


function AuthModalComponent({open, handleClose}: AuthModalProps) {
    const { startNewChat } = useChatMessages() 
    const toast = useToast()

    function onLoginSuccess() {
        handleClose() 

        startNewChat()

        toast("Вход выполнен успешно")
    }

    const [error, setError] = useState(false)
    const googleLogin = useGoogleOAuth({onSuccess: onLoginSuccess, onError: () => setError(true)}) 


    return (
        <Dialog maxWidth={false} onClose={() => {setError(false); handleClose()}} open={open}>
            <DialogTitle>Вход</DialogTitle>

            <DialogContent sx={(t) => ({minWidth: 280, maxWidth: 290, [t.breakpoints.down("lg")]: {minWidth: "unset"}})}>
                <Button onClick={() => {setError(false); googleLogin()}} fullWidth variant="outlined" sx={{mb: 2}}>
                    <GoogleIcon width={22} height={22} style={{marginRight: 10}}/> Войти через Google
                </Button>
                
                {error && <Typography sx={{fontSize: 14, mb: 2}} color="error">Произошла ошибка, попробуйте еще раз</Typography>}
                
                <DialogContentText sx={{whiteSpace: "pre-wrap", wordBreak: "break-word"}}>
                    Войдите, чтобы сохранить историю чатов
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}


export function AuthModal(props: AuthModalProps) {
    const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID as string


    return (
        <GoogleOAuthProvider clientId={clientId}>
            <AuthModalComponent {...props} />
        </GoogleOAuthProvider>
    )
}
