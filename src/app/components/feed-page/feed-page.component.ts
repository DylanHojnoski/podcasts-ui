import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { Post } from 'src/app/models/post';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { addFeedFollow, removeFeedFollow } from 'src/app/state/feed/feed.action';
import { selectFollowedFeeds } from 'src/app/state/feed/feed.selector';
import { loadPosts, loadPostsAfterDate } from 'src/app/state/posts/posts.action';
import { selectPosts } from 'src/app/state/posts/posts.selector';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.css'
})
export class FeedPageComponent {

  feedId = this.route.snapshot.paramMap.get('id');
  feed: Feed | undefined = undefined;
  posts: Post[] = [];
  followed: boolean = false

  public constructor(private store: Store<AppState>, private route: ActivatedRoute, private feedService: FeedService) { }

  ngOnInit(): void {
    if (this.feedId != null) {
      this.feedService.getFeedForID(this.feedId).subscribe((feed) => {
        this.feed = feed;
      });
      this.store.dispatch(loadPosts({ feedId: this.feedId }));
      this.store.select(selectPosts).subscribe((posts) => {
        this.posts = posts;
      });

      this.store.select(selectFollowedFeeds).subscribe(feeds => {
        if (feeds.filter((f) => f.id == this.feedId).length > 0) {
          this.followed = true;
        }
        else {
          this.followed = false;
        }
      });
    }
  }

  loadMore(id: string) {
    if (this.posts.length > 0) {
      const date = this.posts[this.posts.length-1].published_at;
      if (date != undefined) {
        this.store.dispatch(loadPostsAfterDate({ feedId: id, date: date}))
      }
    }
  }

  follow() {
    if (this.feedId != undefined) {
      this.store.dispatch(addFeedFollow({ id: this.feedId }))
    }
  }

  unfollow() {
    if (this.feedId != undefined) {
      this.store.dispatch(removeFeedFollow({ id: this.feedId }))
    }
  }

}
