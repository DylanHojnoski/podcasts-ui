import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { loadPosts, loadPostsDate, loadPostsDateFailure, loadPostsDateSuccess, loadPostsFailure, loadPostsSuccess } from "./posts.action";

export interface PostsState {
  posts: Post[],
  error: string | null;
}

export const initialState: PostsState = {
  posts: [],
  error: null,
}

export const postsReducer = createReducer(
  initialState,

  on(loadPosts, (state) => ({...state})),

  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
    error: null,
  })),

  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(loadPostsDate, (state) => ({...state})),

  on(loadPostsDateSuccess, (state, { posts }) => ({
    ...state,
    posts: state.posts.concat(posts),
    error: null,
  })),

  on(loadPostsDateFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
