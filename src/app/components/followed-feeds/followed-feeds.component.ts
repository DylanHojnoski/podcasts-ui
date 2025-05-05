import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { AppState } from 'src/app/state/app.state';
import { loadFollowedFeeds } from 'src/app/state/feed/feed.action';
import { selectFollowedFeeds } from 'src/app/state/feed/feed.selector';

@Component({
  selector: 'app-followed-feeds',
  templateUrl: './followed-feeds.component.html',
  styleUrl: './followed-feeds.component.css'
})
export class FollowedFeedsComponent {

  public constructor(private store: Store<AppState>) { }

  feeds: Feed[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadFollowedFeeds());
    this.store.select(selectFollowedFeeds).subscribe(feeds => this.feeds = feeds);
  }

}
