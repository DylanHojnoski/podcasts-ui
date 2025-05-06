import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Feed } from 'src/app/models/feed';
import { Order, Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { addFeedFollow, removeFeedFollow } from 'src/app/state/feed/feed.action';
import { selectFollowedFeeds } from 'src/app/state/feed/feed.selector';
import { loadPosts, loadPostsDate } from 'src/app/state/posts/posts.action';
import { selectPosts } from 'src/app/state/posts/posts.selector';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.css'
})
export class FeedPageComponent {

  feedId = this.route.snapshot.paramMap.get('id');
  feed: Feed | undefined = undefined;
  posts: Post[] = [];
  followed: boolean = false;
  order: Order = Order.desc;
  OrderEnum = Order;
  unviewed: boolean = false;
  user: User | undefined = undefined;

  public constructor(private store: Store<AppState>, private route: ActivatedRoute, private feedService: FeedService) { }

  ngOnInit(): void {
    if (this.feedId != null) {
      this.feedService.getFeedForID(this.feedId).subscribe((feed) => {
        this.feed = feed;
      });
      this.loadPosts();
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

      this.store.select(selectUser).subscribe(user => this.user = user);
    }
  }

  loadPosts() {
    if (this.feedId != null) {
      this.store.dispatch(loadPosts({ feedId: this.feedId, order: this.order, unviewed: this.unviewed}));
    }
  }

  loadMore(id: string) {
    if (this.posts.length > 0) {
      const date = this.posts[this.posts.length-1].published_at;
      if (date != undefined) {
        this.store.dispatch(loadPostsDate({ feedId: id, date: date, order: this.order, unviewed: this.unviewed}))
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
