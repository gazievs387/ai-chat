import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "../styles/NavBar.module.scss"
import { Typography } from '@mui/material';
import { useThemeValue } from "shared/hooks/useThemeValue";


function ThemeBtn() {
    const { theme, isDark, toggleTheme } = useThemeValue()
    const size = 18


    return (
        <div 
            className={`${styles.theme_btn} ${styles["theme_btn--" + theme]}`} 
            onClick={toggleTheme}
        >
            {isDark ? <MdOutlineLightMode color='white' size={size} /> : <MdOutlineDarkMode size={size} />}
            <Typography component="span">Поменять тему</Typography>
        </div>
    )
    
}


export default ThemeBtn;