import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { addToQueue, setPlaying } from 'src/app/state/playing/playing.action';
import { selectQueue } from 'src/app/state/playing/playing.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post: Post = {};
  descriptionActive: boolean = false;
  hours: string = "";
  minutes: string = "";
  inQueue: Boolean = false;
  @Input() hovered: Boolean = false;

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectQueue).subscribe(q => {
      this.inQueue = q.find(p => p.id == this.post.id) != undefined;
    });
  }

  toggleDescription() {
    this.descriptionActive = !this.descriptionActive;
  }

  play(post: Post) {
    this.store.dispatch(setPlaying({playing: post }));
  }

  addToQueue(post: Post) {
    this.store.dispatch(addToQueue({ post: post }));
  }

}
