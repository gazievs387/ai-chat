import { useContext } from "react";
import { ThemeContext } from "./themeContext";


export function useThemeContext() {
    const context = useContext(ThemeContext)

    return context
}


export function useIsDark() {
    const { theme } = useContext(ThemeContext)
    const isDark = theme === "dark"

    return isDark
}
