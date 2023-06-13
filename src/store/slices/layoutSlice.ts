import { createSlice } from "@reduxjs/toolkit"


export interface BurgerState {
    isCollapsed: boolean
}

const initialState: BurgerState = {
    isCollapsed: true
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.isCollapsed = !state.isCollapsed;
        }
    }
})

export const { toggleSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
