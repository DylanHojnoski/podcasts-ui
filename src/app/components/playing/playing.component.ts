import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { selectPlaying } from 'src/app/state/playing/playing.selector';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.css'
})

export class PlayingComponent implements OnInit {
  playing: Post | undefined = undefined;

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectPlaying).subscribe((playing) => {
      this.playing = playing;
    })
  }

  clear() {
    this.playing = undefined;
  }

}
