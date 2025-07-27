import { Box, Card, CardContent, SxProps, Theme, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';
import { blueMain } from 'shared/static/styles/base';


type Card1Props = PropsWithChildren<{
    Icon: IconType;
    head: string;
    text: string; 
    sx?: SxProps<Theme>
}>

export function Card1({ Icon, head, text, sx } : Card1Props) {
    return (
        <Card variant="outlined" sx={[{pt: 1}, ...(Array.isArray(sx) ? sx : [sx])]}>
            <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Box sx={{display: "flex", bgcolor: "rgba(0, 0, 255, 0.07)", p: 1.5, borderRadius: "50%"}}>
                    <Icon size={25} color={blueMain} />
                </Box>

                <Typography variant="h6" sx={{fontWeight: 700, textAlign: "center", mt: 2}}>
                    {head}
                </Typography>

                <Typography color="textSecondary" sx={{textAlign: "center", mt: 2}}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}
