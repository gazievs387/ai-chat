import type { Dispatch, SetStateAction } from 'react';


let updater: {setLogin: Dispatch<SetStateAction<boolean>> | undefined,  setTokens:  Dispatch<SetStateAction<{access?: string, refresh?: string}>> | undefined} = {
    setLogin: undefined,
    setTokens: undefined
};
  
export function updateLoginContext(isLogin: boolean, tokens: {access?: string, refresh?: string} = {}) {
    updater.setLogin?.(isLogin);
    updater.setTokens?.((prevTokens) => ({...prevTokens, ...tokens}))
}

export function registerAuthContextUpdater(setLogin: Dispatch<SetStateAction<boolean>> | undefined, setTokens:  Dispatch<SetStateAction<{access?: string, refresh?: string}>> | undefined) {
    updater.setLogin = setLogin;
    updater.setTokens = setTokens
}
