import { PropsWithChildren } from "react";
import { AppThemeProvider } from "./ThemeProvider";
import { ChatMessagesProvider } from "./ChatMessagesProvider";
import AuthProvider from "./AuthProvider";
import { ChatsListProvider } from "./ChatsListProvider";
import { DrawerProvider } from "./DrawerProvider";


export function Providers({children}: PropsWithChildren) {
    return (
        <AppThemeProvider>
            <DrawerProvider>
                <AuthProvider>
                        <ChatsListProvider>
                            <ChatMessagesProvider>
                                {children}
                            </ChatMessagesProvider>
                        </ChatsListProvider>
                </AuthProvider>
            </DrawerProvider>
        </AppThemeProvider>
    )

}
