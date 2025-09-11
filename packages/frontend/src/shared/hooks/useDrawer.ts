import React, { useContext } from 'react';
import { DrawerContext } from 'shared/model/drawerContext';


export function useDrawer() {
    const { open, setOpen } = useContext(DrawerContext)

    return { open, setOpen }
}
