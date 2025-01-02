import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PlayingState } from "./playing.reducer";

export const playingState  = (state: AppState) => state.playing;

export const selectPlaying = createSelector(
  playingState,
  (state: PlayingState) => state.playing
);

export const selectQueue = createSelector(
  playingState,
  (state: PlayingState) => state.queue
)
