import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { queue } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { removeFromQueue, setPlaying } from 'src/app/state/playing/playing.action';
import { selectPlaying, selectQueue } from 'src/app/state/playing/playing.selector';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.css'
})

export class PlayingComponent implements OnInit {
  playing: Post | undefined = undefined;
  queue: Post[] = [];

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectPlaying).subscribe((playing) => {
      this.playing = playing;
    })

    this.store.select(selectQueue).subscribe((queue) => {
      this.queue = queue;
    })
  }

  clear() {
    this.playing = undefined;
  }

  next() {
    this.store.dispatch(setPlaying({ playing: this.queue[0]}));
    this.store.dispatch(removeFromQueue());
  }
}
