import { createReducer, on } from "@ngrx/store";
import { setHidden, setUnhidden } from "./nav.action";

export interface NavState {
  hidden: boolean;
}

export const initialState: NavState = {
  hidden: false,
}

export const navReducer = createReducer(
  initialState,

  on(setHidden, () => {
    return ({
      hidden: window.innerWidth < 640
    })
  }),

  on(setUnhidden, () => {
    return ({
      hidden: false
    })
  }),
)
