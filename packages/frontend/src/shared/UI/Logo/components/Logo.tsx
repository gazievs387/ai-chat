import { CSSProperties } from 'react';
import { RiChatAiFill } from 'react-icons/ri';
import { blueMain } from 'shared/static/styles/base';


interface LogoProps {
    color?: CSSProperties["color"];
    size?: number;
}


export function Logo({color=blueMain, size}: LogoProps) {
    return (
        <RiChatAiFill color={color} size={size}/>
    )
}
