import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { loadFeeds, loadFeedsForCategory } from 'src/app/state/feed/feed.action';
import { selectAllFeeds, selectCategoryFeeds } from 'src/app/state/feed/feed.selector';

@Component({
  selector: 'app-explore-category',
  templateUrl: './explore-category.component.html',
  styleUrl: './explore-category.component.css'
})
export class ExploreCategoryComponent {

  public constructor(private store: Store<AppState>, private feedService: FeedService) { }
  @Input() category = "";
  feeds: Feed[] = [];
  categories: Category[] = [];
  title: string = "";

  ngOnInit(): void {
    this.feedService.getFeedForCategory(this.category).subscribe((feeds) => {
      this.feeds = feeds;
    })

    this.store.select(selectCategoryFeeds).subscribe((categories) => {
      this.categories = categories;
      this.title = this.categoryMapping();
    });
    //this.store.dispatch(loadFeedsForCategory({ categoryID: this.category }));
    //
    //this.store.select(selectCategoryFeeds).subscribe((feeds) => {
    //})
  }

  categoryMapping(): string {
    for (let category of this.categories){
      if (category.id == this.category && category.title != undefined) {
        return category.title;
      }
    }
    return "";
  }
}
