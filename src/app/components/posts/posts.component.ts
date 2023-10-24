import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() posts: Post[] = new Array;

  toggleDescription(post: Post) {
    post.description_active = !post.description_active;
  }

}
