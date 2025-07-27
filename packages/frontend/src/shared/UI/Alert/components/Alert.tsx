import React, { PropsWithChildren, useState } from 'react';
import { Box, Collapse, IconButton, Alert as MuiAlert, Tooltip } from "@mui/material"
import { LuX } from 'react-icons/lu';


interface AlertProps {
    id: string;
}

export function Alert({id, children}: PropsWithChildren<AlertProps>) {
    const [show, setShow] = useState(!Boolean(localStorage.getItem(id)))
    
    
    return (
        <Collapse in={show} >
            <MuiAlert
                action={
                    <Tooltip enterDelay={0} title="Больше не показывать">
                        <IconButton 
                            onClick={() => {
                                localStorage.setItem("prototype-warn", "true")

                                setShow(false)
                            }} 
                            color="inherit"
                        >
                            <LuX size={20} />
                        </IconButton>
                    </Tooltip>
                } 
                severity="warning" 
                sx={{maxWidth: 500}}
            >
                {children}
            </MuiAlert>
        </Collapse>
    )

}
