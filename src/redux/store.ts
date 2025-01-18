"use client"

import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import popUpReducer from "./popUpFormSlice";

const store = configureStore({
    reducer: {
        services: servicesReducer,
        popUp: popUpReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;