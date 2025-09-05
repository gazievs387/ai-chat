import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "shared/model/authContext";
import { registerAuthContextUpdater } from "shared/model/utils/updateAuthContext";


function getTokensFromLocalStorage() {
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")

    if (access && refresh) {
        return { access, refresh }
    }

    return {}
}

function AuthProvider({children}: PropsWithChildren) {
    const [isLogin, setIsLogin] = useState<boolean>(localStorage.getItem("login") ? true : false) 
    const [tokens, setTokens] = useState<{access?: string, refresh?: string}>(getTokensFromLocalStorage())


    useEffect(() => {
        registerAuthContextUpdater(setIsLogin, setTokens)
    
        return () => {
            registerAuthContextUpdater(undefined, undefined)
        }
    }, [])


    return (
        <AuthContext.Provider value={{isLogin, setIsLogin, setTokens, ...tokens}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
