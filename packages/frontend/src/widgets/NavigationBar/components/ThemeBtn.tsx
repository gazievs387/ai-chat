import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "../styles/NavBar.module.scss"
import { useThemeContext } from 'shared/model/themeContext';
import { Typography } from '@mui/material';


function ThemeBtn() {
    const {isDark, theme, setTheme} = useThemeContext() 
    const size = 18


    function changeTheme(isDark: boolean) {
        if (isDark) {
            setTheme("light") 
        } else {
            setTheme("dark")
        }
    }


    return (
        <div 
            className={`${styles.theme_btn} ${styles["theme_btn--" + theme]}`} 
            onClick={() => changeTheme(isDark)}
        >
            {isDark ? <MdOutlineLightMode color='white' size={size} /> : <MdOutlineDarkMode size={size} />}
            <Typography component="span">Поменять тему</Typography>
        </div>
    )
    
}


export default ThemeBtn;