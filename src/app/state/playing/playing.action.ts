import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export const setPlaying = createAction(
  'Set Playing',
  props<{playing: Post}>()
);

export const addToQueue = createAction(
  'Add To Queue',
  props<{post: Post}>()
);

export const removeFromQueue = createAction(
  'Remove From Queue'
)
