import React, { PropsWithChildren } from 'react';
import { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./HighlightCode.module.scss"


interface HighlightCodeProps {
    language?: string;
    elementProps?: React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps
}


export function HighlightCode({language, elementProps, children}: PropsWithChildren<HighlightCodeProps>) {
    return (
        <div>
            <div className={styles.code_header}>
                <span>{language}</span>

                <button>Скопировать</button>
            </div>

            <SyntaxHighlighter
                {...elementProps as any}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={language}
                style={oneDark}
                customStyle={{fontSize: 14, borderRadius: "0 0 10px 10px", marginTop: 0}}
            />
        </div>
    );
}

export default HighlightCode;
