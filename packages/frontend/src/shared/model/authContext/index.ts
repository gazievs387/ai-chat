import { createContext, Dispatch, SetStateAction } from "react";


interface AuthContextParams {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    access?: string;
    refresh?: string;
    setTokens: Dispatch<SetStateAction<{access?: string, refresh?: string}>>;
}

const AuthContext = createContext<AuthContextParams>({isLogin: localStorage.getItem("login") ? true : false, setIsLogin: () => {}, setTokens: () => {}})


export { AuthContext }
