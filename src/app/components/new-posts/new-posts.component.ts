import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrl: './new-posts.component.css'
})
export class NewPostsComponent {

  posts: Post[] = [];

  public constructor(private store: Store<AppState>, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getNewPostsForUser(20).subscribe(posts => this.posts = posts);
  }
}
