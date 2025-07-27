import { Box, Typography } from '@mui/material';
import { Logo } from 'shared/UI/Logo';
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu';
import styles from "../styles/Block7.module.scss"


export function Block7() {
    return (
        <Box 
            sx={(t) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                bgcolor: t.palette.background.default,
                py: 5,

                [t.breakpoints.down("lg")]: {
                    flexDirection: "column"
                }
            })}

        >
            <Box sx={(t) => ({display: "flex", [t.breakpoints.down("lg")]: {my: 2}})}>
                <Logo size={20} /> <Typography color="textSecondary" sx={{fontSize: 14, ml: 1}}>© AI Chat. Права защищены</Typography>
            </Box>
            <Box sx={(t) => ({display: "flex", [t.breakpoints.down("lg")]: {flexDirection: "column", justifyContent: "space-between", height: 60, my: 2}})}>
                <Typography className={styles.privacy_and_terms} sx={{fontSize: 14, mx: 1}}>Пользовательские соглашения</Typography>
                <Typography className={styles.privacy_and_terms} sx={{fontSize: 14, mx: 1}}>Политика конфиденциальности</Typography>
            </Box>
            <Box sx={(t) => ({display: "flex", [t.breakpoints.down("lg")]: {my: 2}})}>
                <LuTwitter className={styles.social_icons} size={20} style={{marginInline: 10}} />

                <LuFacebook className={styles.social_icons} size={20} style={{marginInline: 10}} />

                <LuInstagram className={styles.social_icons} size={20} style={{marginInline: 10}} />

                <LuLinkedin className={styles.social_icons} size={20} style={{marginInline: 10}} />
            </Box>
        </Box>
    )
}
