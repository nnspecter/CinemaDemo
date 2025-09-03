import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "../features/films/filmsSlice";

export const store = configureStore({
    reducer: {
        films: filmsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;