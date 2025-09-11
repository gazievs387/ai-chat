import { createContext, Dispatch, SetStateAction } from "react";


interface DrawerContextParams {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerContext = createContext<DrawerContextParams>({open: false, setOpen: () => {}})

export { DrawerContext }
