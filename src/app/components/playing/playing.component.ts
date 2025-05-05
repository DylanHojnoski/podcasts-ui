import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { clearPlaying, loadPlaying, loadQueue, setPlaying } from 'src/app/state/playing/playing.action';
import { selectPlaying, selectQueue } from 'src/app/state/playing/playing.selector';
import { addPostView } from 'src/app/state/posts/posts.action';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.css'
})

export class PlayingComponent implements OnInit {
  playing: Post | undefined = undefined;
  queue: Post[] = [];
  viewed: boolean = false;
  lastUpdate: number = 0;

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
      const now = Date.now();

      if (now - this.lastUpdate >= 30000) {
        localStorage.setItem("playingTime", audio.currentTime.toString());
        this.lastUpdate = now;
      }

      if (this.playing?.id != undefined && !this.viewed && audio.currentTime / audio.duration >= 0.8) {
        this.store.dispatch(addPostView({ id: this.playing?.id }));
        this.viewed = true;
      }
    })

    audio?.addEventListener("ended", () => {
      this.next();
    })
  }

  clear() {
    this.store.dispatch(clearPlaying());
  }

  next() {
    if (this.queue.length > 0) {
      this.store.dispatch(setPlaying({ playing: this.queue[0]}));
      this.viewed = false;
    }
  }
}
