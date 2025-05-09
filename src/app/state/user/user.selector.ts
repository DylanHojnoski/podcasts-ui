import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "./user.reducer";

export const userState  = (state: AppState) => state.user;

export const selectUser = createSelector(
  userState,
  (state: UserState) => state.user
);
