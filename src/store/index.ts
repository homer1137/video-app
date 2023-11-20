import { configureStore } from "@reduxjs/toolkit";
import videoStampSlice from "./slices/videoStampSlice";


export const store = configureStore({
    reducer: {
      videoStamps: videoStampSlice
    },
  })


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store