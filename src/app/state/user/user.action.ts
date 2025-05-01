import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export const createAccount = createAction(
  'Create Account',
  props<{ username: string, password: string }>()
);

export const createAccountSuccess = createAction(
  'Create Account Success',
  props<{ user: User }>()
);

export const createAccountFailure = createAction(
  'Create Account Failure',
  props<{ error: string }>()
)


export const login = createAction(
  'Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  'Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  'Login Failure',
  props<{ error: string }>()
)


export const logout = createAction('Logout');

export const logoutSuccess = createAction('Logout Success');

export const logoutFailure = createAction(
  'Logout Failure',
  props<{ error: string }>()
)
