import { Typography, useTheme } from "@mui/material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HighlightCode } from "shared/UI/HighlightCode";
import styles from "./styles.module.scss"


interface MessageMarkdownProps {
    text: string;
}

export function MessageMarkdown({text}: MessageMarkdownProps) {
    const theme = useTheme() 


    return (
        <Typography
            sx={{wordSpacing: 2, lineHeight: 1.8}} 
            className={styles.markdown} 
            component="div" 
            color="textPrimary"
        >
            <Markdown 
                remarkPlugins={[[remarkGfm, {}]]}
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
        </Typography>
    )
}
