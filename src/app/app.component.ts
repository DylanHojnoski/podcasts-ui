import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadFeedCategories } from './state/feed/feed.action';
import { Category } from './models/category';
import { selectCategoryFeeds } from './state/feed/feed.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'podcasts-ui';
  categories: Category[] = [];

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFeedCategories());
    this.store.select(selectCategoryFeeds).subscribe(categories => this.categories = categories);
  }

}
