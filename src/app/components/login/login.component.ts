import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { login, loginSuccess } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  public constructor(private store: Store<AppState>) { }

  login() {
    this.store.dispatch(login({username: this.username, password: this.password}));
  }
}
