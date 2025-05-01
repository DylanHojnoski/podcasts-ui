import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { loginFailure, createAccount, createAccountFailure, createAccountSuccess, login, loginSuccess, logout, logoutSuccess, logoutFailure, getUser, getUserSuccess, getUserFailure} from "./user.action";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private router: Router
  ) {}

  createAccount = createEffect(() =>
                           this.actions.pipe(
                             ofType(createAccount),
                             switchMap((props) =>
                                       from(this.userService.createUser(props.username, props.password)).pipe(
                                         map((user) => {
                                           this.router.navigate(['/home']);
                                           return createAccountSuccess({user: user});
                                         }
                                            ),
                                           catchError((error) => of(createAccountFailure({ error })))
                                       )
                                      )
                           )
                          );

  getUser = createEffect(() =>
                           this.actions.pipe(
                             ofType(getUser),
                             switchMap(() =>
                                       from(this.userService.getUser()).pipe(
                                         map((user) => {
                                           return getUserSuccess({user: user});
                                         }
                                            ),
                                           catchError((error) => of(getUserFailure({ error })))
                                       )
                                      )
                           )
                          );

  login = createEffect(() =>
                           this.actions.pipe(
                             ofType(login),
                             switchMap((props) =>
                                       from(this.userService.login(props.username, props.password)).pipe(
                                         map((user) => {
                                           this.router.navigate(['/home']);
                                           return loginSuccess({user: user});
                                         }
                                            ),
                                           catchError((error) => of(loginFailure({ error })))
                                       )
                                      )
                           )
                          );

  logout = createEffect(() =>
                           this.actions.pipe(
                             ofType(logout),
                             switchMap(() =>
                                       from(this.userService.logout()).pipe(
                                         map(() => {
                                           this.router.navigate(['/home']);
                                           return logoutSuccess();
                                         }
                                            ),
                                           catchError((error) => of(logoutFailure({ error })))
                                       )
                                      )
                           )
                          );

}
