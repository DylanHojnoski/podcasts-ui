import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { setPlaying } from 'src/app/state/playing/playing.action';

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

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    let audio = new Audio(this.post.audio);

    audio.addEventListener('loadedmetadata', () => {
      this.hours = Math.floor(audio.duration / 3600).toString();
      const minutes = Math.floor((audio.duration % 3600) / 60);
      if (minutes < 10) {
        this.minutes = "0" + minutes;
      }
      else {
        this.minutes = minutes.toString();
      }
    })
  }

  toggleDescription() {
    this.descriptionActive = !this.descriptionActive;
  }

  play(post: Post) {
    this.store.dispatch(setPlaying({playing: post}));
  }

}
