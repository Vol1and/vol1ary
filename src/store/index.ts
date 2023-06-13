'use client';
import {configureStore} from "@reduxjs/toolkit";
import layoutReducer from "@/store/slices/layoutSlice";

const makeStore = () => {
    return configureStore(
        {
            reducer: {
                layout: layoutReducer
            }
        }
    )
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
