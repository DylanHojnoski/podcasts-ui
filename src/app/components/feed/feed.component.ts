import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  feed: Feed[] = new Array;
  posts: Post[] = new Array;

  public constructor(private feedService: FeedService, private postService: PostService) { }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe(results => {this.feed = results})
  }

  selectFeed(id: string) {
    if (this.posts.length > 0 && this.posts[0].feed_id == id) {
      this.posts = new Array;

    }
    else {
      this.postService.getFeedPosts(id).subscribe(results => {this.posts = results})
    }
  }

}
