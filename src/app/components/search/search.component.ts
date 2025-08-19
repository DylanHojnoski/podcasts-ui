import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { AppState } from 'src/app/state/app.state';
import { setHidden } from 'src/app/state/nav/nav.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  name: string = "";
  feeds: Feed[] = [];

  public constructor(private route: Router, private store: Store<AppState>) { }

  clear() {
    this.name = "";
    this.feeds = [];
  }

  search() {
    if (this.name != "") {
      this.route.navigate(['/feed/search/' + this.name]);
      this.clear();
      this.store.dispatch(setHidden());
    }
  }

}
