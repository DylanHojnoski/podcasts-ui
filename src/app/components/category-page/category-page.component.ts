import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { selectCategoryFeeds } from 'src/app/state/feed/feed.selector';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

  public constructor(private store: Store<AppState>,private route: ActivatedRoute, private feedService: FeedService) { }
  categoryId = this.route.snapshot.paramMap.get('id');
  feeds: Feed[] = [];
  title = "";

  ngOnInit(): void {
    if (this.categoryId != null) {
      this.feedService.getFeedForCategory(this.categoryId, 100).subscribe((feeds) => {
        this.feeds = feeds;
      });

      this.store.select(selectCategoryFeeds).subscribe((categories) => {
        const category = categories.filter(c => c.id == this.categoryId)
        if (category.length > 0 && category[0].title != undefined) {
          this.title = category[0].title;
        }
    });
    }
  }
}
