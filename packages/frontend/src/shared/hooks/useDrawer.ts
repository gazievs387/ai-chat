import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/model';
import { toggleDrawer } from 'shared/model/slices/drawer';


export function useDrawer() {
    const open = useAppSelector(state => state.drawer.isOpen)
    const dispatch = useAppDispatch()


    const setOpen = useCallback((value: boolean) => {
        dispatch(toggleDrawer({value}))
    }, [])


    return { open, setOpen }
}
