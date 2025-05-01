import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { createAccount } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  username: string = "";
  password: string = "";

  public constructor(private store: Store<AppState>) { }

  createAccount() {
    if (this.username.length > 0 && this.password.length > 0) {
      this.store.dispatch(createAccount({username: this.username, password: this.password}));
    }
  }


}
