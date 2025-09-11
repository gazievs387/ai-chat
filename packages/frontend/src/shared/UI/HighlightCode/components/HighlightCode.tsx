import React, { PropsWithChildren } from 'react';
import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./HighlightCode.module.scss"
import { IconButton, Typography } from '@mui/material';
import { LuCopy } from 'react-icons/lu';


interface HighlightCodeProps {
    language?: string;
    elementProps?: React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps
}


export function HighlightCode({language, elementProps, children}: PropsWithChildren<HighlightCodeProps>) {
    const code = String(children)


    return (
        <div className={styles.code}>
            <div className={styles.code_header}>
                <Typography sx={(t) => ({color: t.palette.background.default, lineHeight: 1})}>{language}</Typography>

                <IconButton 
                    sx={(t) => ({
                        width: 40, 
                        height: 40, 
                        p: 0.2, 
                        borderRadius: 25,  
                        ":hover": {
                            bgcolor: t.palette.grey.A700
                        }
                    })}
                    onClick={() => {navigator.clipboard.writeText(code)}}
                >
                    <LuCopy size={15} />
                </IconButton>
            </div>

            <SyntaxHighlighter
                {...elementProps as any}
                PreTag="div"
                children={code.replace(/\n$/, '')}
                language={language}
                style={oneDark}
                customStyle={{fontSize: 14, borderRadius: "0 0 10px 10px", marginTop: 0}}
            />
        </div>
    );
}

export default HighlightCode;
