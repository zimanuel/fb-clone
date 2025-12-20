import { configureStore } from "@reduxjs/toolkit";
import { addPostSlice } from "./slices/addpost";
export const store = configureStore({
  reducer: {
    addPost: addPostSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
