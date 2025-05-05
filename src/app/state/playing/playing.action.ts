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
  'Remove From Queue',
  props<{index: number}>()
)

export const moveForwardInQueue = createAction(
  'Move Forward In Queue',
  props<{index: number}>()
)

export const moveBackwardInQueue = createAction(
  'Move Backward In Queue',
  props<{index: number}>()
)

export const moveToIndexInQueue = createAction(
  'Move Backward In Queue',
  props<{start: number , end: number}>()
)

export const clearQueue = createAction(
  'Clear Queue',
)

export const loadQueue = createAction(
  'Load Queue',
)

export const loadPlaying = createAction(
  'Load Playing',
)

export const clearPlaying = createAction(
  'Clear Playing',
)


