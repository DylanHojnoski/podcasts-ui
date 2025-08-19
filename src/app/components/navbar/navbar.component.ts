import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { selectUser } from 'src/app/state/user/user.selector';
import { HamburgerIconComponent } from '../icons/hamburger-icon/hamburger-icon.component';
import { selectHidden } from 'src/app/state/nav/nav.selector';
import { setHidden, setUnhidden } from 'src/app/state/nav/nav.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user: User | undefined = undefined;
  @ViewChild(HamburgerIconComponent, {read: ElementRef}) hamburger!: ElementRef<HamburgerIconComponent>
  hidden = false;

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);
    this.store.select(selectHidden).subscribe(hidden => this.hidden = hidden);
  }

  toggleNav() {
    if (this.hidden) {
      setUnhidden();
    }
    else {
      setHidden();
    }
  }

  setHidden() {
    this.store.dispatch(setHidden());
  }

  setUnhidden() {
    this.store.dispatch(setUnhidden());
  }
}
