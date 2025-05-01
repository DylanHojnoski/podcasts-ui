import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { loginFailure, createAccount, createAccountFailure, createAccountSuccess, login, loginSuccess, logout, logoutSuccess } from "./user.action";

export interface UserState {
  user: User | null,
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
}

export const userReducer = createReducer(
  initialState,

  on(createAccount, (state) => ({...state})),

    on(createAccountSuccess, (state, { user }) => ({
    ...state,
    user: user,
    error: null,
  })),

  on(createAccountFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(login, (state) => ({...state})),

    on(loginSuccess, (state, { user }) => ({
    ...state,
    user: user,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(logout, (state) => ({...state})),

    on(logoutSuccess, (state) => ({
    ...state,
    user: null,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
