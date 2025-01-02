import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { setPlaying } from "./playing.action";

export interface PlayingState {
  playing: Post | undefined;
  error: string | null;
}

export const initialState: PlayingState = {
  playing: undefined,
  error: null,
}

export const playingReducer = createReducer(
  initialState,

  on(setPlaying, (state, { playing }) => ({
    ...state,
    playing: playing
  })),
)
