import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PostsState } from "./posts.reducer";

export const postsState  = (state: AppState) => state.posts;

export const selectPosts = createSelector(
  postsState,
  (state: PostsState) => state.posts
);
