import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addFeed } from 'src/app/state/feed/feed.action';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrl: './add-feed.component.css'
})
export class AddFeedComponent {
  newFeed: string = "";

  public constructor(private store: Store<AppState>) { }

  addFeed() {
    if (this.newFeed.length > 0) {
      this.store.dispatch(addFeed({ url: this.newFeed }));
    }
  }

}
