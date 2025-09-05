import { PropsWithChildren } from "react";
import { AppThemeProvider } from "./ThemeProvider";
import { ChatMessagesProvider } from "./ChatMessagesProvider";
import AuthProvider from "./AuthProvider";
import { ChatsListProvider } from "./ChatsListProvider";


export function Providers({children}: PropsWithChildren) {
    return (
        <AuthProvider>
            <AppThemeProvider>
                <ChatsListProvider>
                    <ChatMessagesProvider>
                        {children}
                    </ChatMessagesProvider>
                </ChatsListProvider>
            </AppThemeProvider>
        </AuthProvider>
    )

}
