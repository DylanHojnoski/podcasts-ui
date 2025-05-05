import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/state/app.state';
import { loadFeedCategories } from 'src/app/state/feed/feed.action';
import { selectCategoryFeeds } from 'src/app/state/feed/feed.selector';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: Category[] = [];
  user: User | undefined = undefined

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFeedCategories());
    this.store.select(selectCategoryFeeds).subscribe(categories => this.categories = categories);
    this.store.select(selectUser).subscribe(user => this.user = user);
  }

}
