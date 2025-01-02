import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post";

export const setPlaying = createAction(
  'Set Playing',
  props<{playing: Post}>()
);
