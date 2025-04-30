import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { clearPlaying, loadPlaying, loadQueue, setPlaying } from 'src/app/state/playing/playing.action';
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
    this.store.dispatch(loadPlaying());
    this.store.dispatch(loadQueue());
    this.store.select(selectPlaying).subscribe((playing) => {
      this.playing = playing;
    })

    this.store.select(selectQueue).subscribe((queue) => {
      this.queue = queue;
    })
  }

  ngAfterViewInit(): void {
    const audio = document.querySelector("audio");
    const startString = localStorage.getItem("playingTime");
    if (startString != null && audio != null) {
      const startTime = Number.parseInt(startString);
      audio.currentTime = startTime;
    }

    audio?.addEventListener("timeupdate", () => {
      localStorage.setItem("playingTime", audio.currentTime.toString());
    })

    audio?.addEventListener("ended", () => {
      this.next();
    })
  }

  clear() {
    this.store.dispatch(clearPlaying());
  }

  next() {
    this.store.dispatch(setPlaying({ playing: this.queue[0]}));
  }
}
