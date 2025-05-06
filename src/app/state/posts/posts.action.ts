import { createAction, props } from "@ngrx/store";
import { Order, Post } from "src/app/models/post";

export const loadPosts = createAction(
  'Load Posts',
  props<{ feedId: string, order: Order, unviewed: boolean}>()
);

export const loadPostsSuccess = createAction(
  'Posts Load Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  'Posts Load Failure',
  props<{ error: string }>()
)

export const loadPostsDate = createAction(
  'Load Posts Date',
  props<{ feedId: string, date: string, order: Order, unviewed: boolean }>()
);

export const loadPostsDateSuccess = createAction(
  'Posts Load Date Success',
  props<{ posts: Post[] }>()
);

export const loadPostsDateFailure = createAction(
  'Posts Load Date Failure',
  props<{ error: string }>()
)

export const addPostView = createAction(
  'Add Post View',
  props<{ id: string }>()
);

export const addPostViewSuccess = createAction(
  'Add Post View Success',
  props<{ id: String }>()
);

export const addPostViewFailure = createAction(
  'Add Post View Failure',
  props<{ error: string }>()
);

