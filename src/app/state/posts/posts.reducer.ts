import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { loadPosts, loadPostsAfterDate, loadPostsAfterDateFailure, loadPostsAfterDateSuccess, loadPostsFailure, loadPostsSuccess } from "./posts.action";

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

  on(loadPostsAfterDate, (state) => ({...state})),

  on(loadPostsAfterDateSuccess, (state, { posts }) => ({
    ...state,
    posts: state.posts.concat(posts),
    error: null,
  })),

  on(loadPostsAfterDateFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
