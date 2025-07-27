import { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/NavBar.module.scss"
import ThemeBtn from './ThemeBtn';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { Logo } from 'shared/UI/Logo';
import { LuMenu, LuX } from "react-icons/lu";
import { useIsDark } from "shared/model/themeContext";
import { darkBgMain, lightBgWhite } from "shared/static/styles/base";


function NavItems({isMobile, open}: {isMobile?: boolean, open?: boolean}) {
    const show = (open && isMobile) || !isMobile


    return (
        <div style={{display: show ? "flex" : "none"}} className={`${styles.navbar_items} ${styles["navbar_items" + (isMobile ? "--mobile" : "")]}`}>
            <Typography color="textPrimary" className={styles.el}>Функции</Typography>
            <Typography color="textPrimary" className={styles.el}>Варианты использования</Typography>
            <Typography color="textPrimary" className={styles.el}>Есть вопросы?</Typography>

            <ThemeBtn />

            <Button 
                fullWidth={isMobile} 
                variant="contained" 
                sx={(t) => ({
                    maxWidth: "600px", 
                    textTransform: "none", 
                    paddingInline: 4, 
                    [t.breakpoints.up("lg")]: {
                        ml: "20px"
                    }
                })}
            >
                Начать
            </Button>
        </div>
    )
}


function OpenMenuBtn({open, setIsOpen}: {open: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) {
    const isDark = useIsDark() 
    const color = isDark ? lightBgWhite : darkBgMain

    if (open) {
        return (
            <LuX color={color} size={25} onClick={() => setIsOpen(!open)} />
        )
    } 

    return (
        <LuMenu color={color} size={25} onClick={() => setIsOpen(!open)} />
    )
}


export function NavBar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const isDesktop = useMediaQuery((t) => t.breakpoints.up("lg")) 


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo_wrap}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Logo size={35} /> <Typography color="textPrimary" sx={{fontSize: 20, fontWeight: 700, ml: 1}}>AI Chat</Typography>
                </div>

                {!isDesktop && <OpenMenuBtn open={isMobileOpen} setIsOpen={setIsMobileOpen} />}
            </div>

            {isDesktop ? <NavItems /> : <NavItems open={isMobileOpen} isMobile />}
        </nav>
    )
}
