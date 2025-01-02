import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { addToQueue, removeFromQueue, setPlaying } from "./playing.action";

export interface PlayingState {
  playing: Post | undefined;
  queue: Post[];
  error: string | null;
}

export const initialState: PlayingState = {
  playing: undefined,
  queue: [],
  error: null,
}

export const playingReducer = createReducer(
  initialState,

  on(setPlaying, (state, { playing }) => ({
    ...state,
    playing: playing
  })),

  on(addToQueue, (state, { post }) => ({
    ...state,
    queue: state.queue.concat(post)
  })),

  on(removeFromQueue, (state) => ({
    ...state,
    queue: state.queue.slice(1)
  }))
)
