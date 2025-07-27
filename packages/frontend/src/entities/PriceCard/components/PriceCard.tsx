import { Box, Button, Card, CardContent, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { LuCircleCheckBig } from 'react-icons/lu';
import { blueMain } from 'shared/static/styles/base';


interface PriceCardProps {
    heading: string;
    text: string;
    price: number;
    priceLabel?: string;
    features: string[];
    btnText: string;
    btnVariant?: Parameters<typeof Button>[0]["variant"]
    cardSx?: SxProps<Theme>;
}


export function PriceCard({heading, text, price, priceLabel="/месяц", features, btnText, btnVariant="outlined", cardSx, children}: PropsWithChildren<PriceCardProps>) {
    const t = useTheme()

    return (
        <Card 
            variant="outlined" 
            sx={{
                display: "flex", 
                width: "32%", 
                p: 3, 
                boxSizing: "border-box", 
                overflow: "unset", 
                [t.breakpoints.down("lg")]: {
                    width: "100%",
                    my: 2
                },
                ...cardSx
            }}
        >
            <CardContent sx={{width: "100%", position: "relative", p: 0}}>
                {children && 
                
                    <Box 
                        sx={(t) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 130, 
                            height: 25,
                            position: "absolute", 
                            borderRadius: 10,
                            bgcolor: t.palette.primary.main,
                            color: "white",
                            top: -40, 
                            left: 0, 
                            right: 0,
                            marginInline: "auto"
                        })}
                    >
                        <Typography sx={{fontSize: 13}}>{children}</Typography>
                    </Box>
                }
                <Typography variant="h5" sx={{fontWeight: 700, mb: 1}}>
                    {heading}
                </Typography>

                <Typography color="textSecondary" sx={{mb: 2}}>
                    {text}
                </Typography>

                <Typography 
                    sx={{
                        display: "flex", 
                        alignItems: "flex-end", 
                        fontSize: 30, 
                        fontWeight: 700, 
                        lineHeight: 1.1,
                        mb: 4
                    }}
                >
                    ${price}
                    <Typography component="span" color="textSecondary" sx={{ml: 0.5}}>{priceLabel}</Typography>
                </Typography>

                {features.map((text, index) => {
                    return (
                        <div key={index} style={{marginTop: 10, display: "flex", alignItems: "flex-start"}}>
                            <LuCircleCheckBig style={{flexShrink: 0, marginRight: 10}} color={blueMain} size={16} /> 

                            <Typography sx={{fontSize: 16, lineHeight: "14px", mb: 1}} component="span">{text}</Typography>
                        </div>
                    )
                })}

                <Button variant={btnVariant} size="medium" fullWidth sx={{textTransform: "none", mt: 3}}>
                    {btnText}
                </Button>
            </CardContent>
        </Card>
    )
}
