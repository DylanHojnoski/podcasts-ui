import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { NavState } from "./nav.reducer";

export const navState  = (state: AppState) => state.nav;

export const selectHidden = createSelector(
  navState,
  (state: NavState) => state.hidden
);
