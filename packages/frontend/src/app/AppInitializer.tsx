import { PropsWithChildren, useEffect } from 'react';
import { toggleDrawer } from 'shared/model/slices/drawer';
import { useAppDispatch } from 'shared/model';
import { useIsMobile } from 'shared/hooks/useIsMobile';


function AppInitializer({ children }: PropsWithChildren) {
    const isMobile = useIsMobile()
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(toggleDrawer({value: !isMobile}));
    }, [])
    

    return <>{children}</>
}

export default AppInitializer;