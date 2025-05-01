import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { getUser } from './state/user/user.action';
import { loadFollowedFeeds } from './state/feed/feed.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'podcasts-ui';

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getUser());
    this.store.dispatch(loadFollowedFeeds());
  }
}
