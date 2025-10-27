import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface DrawerState {
    isOpen: boolean;
}

const initialState: DrawerState = {
   isOpen: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer(state, action: PayloadAction<{value: boolean} | undefined>) {
            const value = action.payload

            if (value) {
                state.isOpen = value.value
            } else {
                state.isOpen = !state.isOpen
            }
        }
    },
})

export const { toggleDrawer } = drawerSlice.actions

export default drawerSlice.reducer
