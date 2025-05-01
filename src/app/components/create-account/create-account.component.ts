import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { createAccount } from 'src/app/state/user/user.action';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  username: string = "";
  password: string = "";

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.dispatch(createAccount({username: this.username, password: this.password}))
    this.store.select(selectUser).subscribe(user => console.log(user));
  }

  createAccount() {
    console.log("hello");
    this.store.dispatch(createAccount({username: this.username, password: this.password}));
  }


}
