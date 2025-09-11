import { PropsWithChildren, useState } from 'react';
import { useIsMobile } from 'shared/hooks/useIsMobile';
import { DrawerContext } from 'shared/model/drawerContext';


export function DrawerProvider({children}: PropsWithChildren) {
    const isMobile = useIsMobile()
    const [open, setOpen] = useState(!isMobile)


    return (
        <DrawerContext.Provider value={{open, setOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}
