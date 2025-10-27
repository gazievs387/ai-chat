import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "shared/model";
import { changeTheme } from "shared/model/slices/theme";


export function useThemeValue() {
    const theme = useAppSelector(state => state.theme.theme)
    const isDark = theme === "dark"
    const dispatch = useAppDispatch()
    

    const toggleTheme = useCallback(() => {
        if (isDark) {
            dispatch(changeTheme("light"))
        } else {
            dispatch(changeTheme("dark"))
        }
    }, [isDark])


    return { theme, isDark, toggleTheme }
}