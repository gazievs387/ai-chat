import { PropsWithChildren } from "react";
import { AppThemeProvider } from "./ThemeProvider";
import { ChatMessagesProvider } from "./ChatMessagesProvider";
import AuthProvider from "./AuthProvider";


export function Providers({children}: PropsWithChildren) {
    return (
        <AuthProvider>
            <AppThemeProvider>
                <ChatMessagesProvider>
                    {children}
                </ChatMessagesProvider>
            </AppThemeProvider>
        </AuthProvider>
    )

}
