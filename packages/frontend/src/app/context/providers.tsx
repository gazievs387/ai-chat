import { PropsWithChildren } from "react";
import { AppThemeProvider } from "./ThemeProvider";
import { ChatMessagesProvider } from "./ChatMessagesProvider";


export function Providers({children}: PropsWithChildren) {
    return (
        <AppThemeProvider>
            <ChatMessagesProvider>
                {children}
            </ChatMessagesProvider>
        </AppThemeProvider>
    )

}
