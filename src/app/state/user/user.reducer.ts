import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user";
import { loginFailure, createAccount, createAccountFailure, createAccountSuccess, login, loginSuccess, logout, logoutSuccess, getUser, getUserSuccess, getUserFailure } from "./user.action";

export interface UserState {
  user: User | undefined,
  error: string | null;
}

export const initialState: UserState = {
  user: undefined,
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

  on(getUser, (state) => ({...state})),

    on(getUserSuccess, (state, { user }) => ({
    ...state,
    user: user,
    error: null,
  })),

  on(getUserFailure, (state, { error }) => ({
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

    on(logoutSuccess, (state) => {
    localStorage.clear();

    return ({
      ...state,
      user: undefined,
      error: null,
    });
  }),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
