import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: "popUp",
    initialState: {
        isVisible: false,
        formData: {},
    },
    reducers: {
        togglePopUp(state) {
            state.isVisible = !state.isVisible;
        },
    },
},);

export const { togglePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;