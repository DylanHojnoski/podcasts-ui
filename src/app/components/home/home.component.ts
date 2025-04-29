import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { AppState } from 'src/app/state/app.state';
import { loadFeedCategories } from 'src/app/state/feed/feed.action';
import { selectCategoryFeeds } from 'src/app/state/feed/feed.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: Category[] = [];

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFeedCategories());
    this.store.select(selectCategoryFeeds).subscribe(categories => this.categories = categories);
  }

}
