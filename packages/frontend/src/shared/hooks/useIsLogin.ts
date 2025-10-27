import { useAppSelector } from "shared/model";


export function useIsLogin() {
    const isLogin = useAppSelector(state => state.auth.isLogin)
    
    return isLogin
}
