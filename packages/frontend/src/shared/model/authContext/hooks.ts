import { useContext } from "react";
import { AuthContext } from ".";


export function useAuth() {
    const { isLogin, setIsLogin, setTokens, access, refresh } = useContext(AuthContext)


    function login({accessToken, refreshToken}: {accessToken: string, refreshToken: string}) {
        localStorage.setItem("login", "true")
        localStorage.setItem("access", accessToken)
        localStorage.setItem("refresh", refreshToken)

        setIsLogin(true)

        setTokens({access: accessToken, refresh: refreshToken})
    }


    function logout() {
        localStorage.removeItem("login")
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")

        setIsLogin(false)

        setTokens({})
    }

    function updateTokens(tokens: {access: string, refresh: string}) {
        localStorage.setItem("access", tokens.access)
        localStorage.setItem("refresh", tokens.refresh)

        setTokens(tokens)
    }


    return { login, logout, updateTokens, isLogin, access, refresh }
}
