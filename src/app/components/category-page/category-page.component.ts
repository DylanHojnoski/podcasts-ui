import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { AppState } from 'src/app/state/app.state';
import { loadFeedsForCategory } from 'src/app/state/feed/feed.action';
import { selectAllFeeds, selectCategoryFeeds } from 'src/app/state/feed/feed.selector';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

  public constructor(private store: Store<AppState>,private route: ActivatedRoute) { }
  categoryId = this.route.snapshot.paramMap.get('id');
  feeds: Feed[] = [];
  title = "";
  page = 0;
  limit = 60;

  ngOnInit(): void {
    if (this.categoryId != null) {
      this.store.dispatch(loadFeedsForCategory({ categoryID: this.categoryId, limit: this.limit, offset: 0 }));

      this.store.select(selectAllFeeds).subscribe(feeds => this.feeds = feeds);

      this.store.select(selectCategoryFeeds).subscribe((categories) => {
        const category = categories.filter(c => c.id == this.categoryId)
        if (category.length > 0 && category[0].title != undefined) {
          this.title = category[0].title;
        }
      });
    }
  }

  nextPage() {
    if (this.categoryId != null && this.feeds.length >= this.limit) {
      this.page++;
      this.store.dispatch(loadFeedsForCategory({ categoryID: this.categoryId, limit: this.limit, offset: this.page*this.limit}));
    }
  }

  prevPage() {
    if (this.categoryId != null && this.page > 0) {
      this.page--;
      this.store.dispatch(loadFeedsForCategory({ categoryID: this.categoryId, limit: this.limit, offset: this.page*this.limit}));
    }
  }
}
