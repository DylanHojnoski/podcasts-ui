import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Store } from '@ngrx/store';
import { addFeed, loadFeeds } from 'src/app/state/feed/feed.action';
import { selectAllFeeds } from 'src/app/state/feed/feed.selector';
import { Feed } from 'src/app/models/feed';
import { AppState } from 'src/app/state/app.state';
import { selectPosts } from 'src/app/state/posts/posts.selector';
import { loadPosts, loadPostsAfterDate } from 'src/app/state/posts/posts.action';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  allFeeds: Feed[] = [];
  posts: Post[] = [];
  newFeed: string = "";

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFeeds());

    this.store.select(selectAllFeeds).subscribe((feeds) => {
      console.log(feeds);
      this.allFeeds = feeds;
    })

    this.store.select(selectPosts).subscribe((posts) => {
      this.posts = posts;
    });
  }

  selectFeed(id: string) {
    if (this.posts.length > 0 && this.posts[0].feed_id == id) {
      this.posts = [];
    }
    else {
      this.store.dispatch(loadPosts({ feedId: id }));
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

  addFeed() {
    console.log("Click " + this.newFeed);
    if (this.newFeed.length > 0) {
      this.store.dispatch(addFeed({ url: this.newFeed }));
    }
  }
}

