import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  mutedVolume: number = 0;
  @ViewChild("audio") audio!: ElementRef<HTMLAudioElement>;

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
    const startString = localStorage.getItem("playingTime");
    if (startString != null && this.audio != undefined) {
      const startTime = Number.parseInt(startString);
      this.audio.nativeElement.currentTime = startTime;
    }

    this.audio.nativeElement.addEventListener("timeupdate", () => {
      if (this.audio != null) {
        const now = Date.now();

        if (now - this.lastUpdate >= 30000) {
          localStorage.setItem("playingTime", this.audio.nativeElement.currentTime.toString());
          this.lastUpdate = now;
        }

        if (this.playing?.id != undefined && !this.viewed && this.audio.nativeElement.currentTime / this.audio.nativeElement.duration >= 0.8) {
          this.store.dispatch(addPostView({ id: this.playing?.id }));
          this.viewed = true;
        }
      }
    })

    this.audio.nativeElement.addEventListener("ended", () => {
      this.next();
    })
  }

  play() {
    this.audio?.nativeElement.play();
  }

  pause() {
    this.audio?.nativeElement.pause();
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

  skipForward() {
    if (this.audio != null) {
      this.audio.nativeElement.currentTime += 15;
    }
  }

  skipBackward() {
    if (this.audio != null) {
      if (this.audio.nativeElement.currentTime - 15 < 0) {
        this.audio.nativeElement.currentTime = 0;
      }
      else {
      this.audio.nativeElement.currentTime -= 15;
      }
    }
  }

  onTimeChange(event: Event) {
    if (this.audio != null) {
      const input = event.target as HTMLInputElement;
      this.audio.nativeElement.currentTime = Number(input.value);
    }
  }

  onVolumeChange(event: Event) {
    if (this.audio != null) {
      const input = event.target as HTMLInputElement;
      this.audio.nativeElement.volume = Number(input.value);
    }
  }

  toggleMute() {
    if (this.audio.nativeElement.volume <= 0) {
      this.audio.nativeElement.volume = this.mutedVolume;
    }
    else {
      this.mutedVolume = this.audio.nativeElement.volume;
      this.audio.nativeElement.volume = 0;
    }

  }
}
