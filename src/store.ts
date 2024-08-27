import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/charactersSlice.ts";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
