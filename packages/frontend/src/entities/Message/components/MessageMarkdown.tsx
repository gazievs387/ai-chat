import { useTheme } from "@mui/material";
import Markdown from "react-markdown";
import { HighlightCode } from "shared/UI/HighlightCode";


interface MessageMarkdownProps {
    text: string;
}

export function MessageMarkdown({text}: MessageMarkdownProps) {
    const theme = useTheme() 


    return (
        <Markdown 
            components={{
                code(props) {
                    const {children, className} = props
                    const match = /language-(\w+)/.exec(className || '')

                    const language = match ? match[1] : undefined

                    if (!language) {
                        return (
                            <code 
                                {...props} 
                                style={{
                                    backgroundColor: theme.palette.background.lightGray, 
                                    fontSize: 14, 
                                    paddingInline: 5, 
                                    borderRadius: 5
                                }} 
                                className={className}
                            >
                                {children}
                            </code>
                        )
                    }

                    return (
                        <HighlightCode
                            elementProps={props}
                            language={language}
                        >
                            {children}
                        </HighlightCode>
                    )
                }
            }}
        >
            {text}
        </Markdown>
    )
}
