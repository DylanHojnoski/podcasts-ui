import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export const loadPosts = createAction(
  'Load Posts',
  props<{ feedId: string }>()
);

export const loadPostsSuccess = createAction(
  'Posts Load Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  'Posts Load Failure',
  props<{ error: string }>()
)

export const loadPostsAfterDate = createAction(
  'Load Posts After Date',
  props<{ feedId: string, date: string }>()
);

export const loadPostsAfterDateSuccess = createAction(
  'Posts Load After Date Success',
  props<{ posts: Post[] }>()
);

export const loadPostsAfterDateFailure = createAction(
  'Posts Load After Date Failure',
  props<{ error: string }>()
)
