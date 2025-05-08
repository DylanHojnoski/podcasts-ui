import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { selectUser } from 'src/app/state/user/user.selector';
import { HamburgerIconComponent } from '../icons/hamburger-icon/hamburger-icon.component';

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
  }

  //ngAfterViewInit(): void {
    //const element = this.hamburger.nativeElement as HTMLElement;
    //this.hidden = getComputedStyle(element).display == "none";
  //}

  toggleNav() {
    this.hidden = !this.hidden;
  }
}
