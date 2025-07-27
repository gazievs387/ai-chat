import { createContext } from "react";


const ThemeContext = createContext({isDark: false, theme: "light", setTheme: () => {}} as any)


export { ThemeContext }
