import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { clearQueue, moveBackwardInQueue, moveForwardInQueue, removeFromQueue } from 'src/app/state/playing/playing.action';
import { selectQueue } from 'src/app/state/playing/playing.selector';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {

  queue: Post[] = []

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectQueue).subscribe(queue => this.queue = queue);
  }

  remove(index: number) {
    this.store.dispatch(removeFromQueue({ index: index }));
  }

  moveForward(index: number) {
    this.store.dispatch(moveForwardInQueue({ index: index }));
  }

  moveBackward(index: number) {
    this.store.dispatch(moveBackwardInQueue({ index: index }));
  }

  clear() {
    this.store.dispatch(clearQueue());
  }

}
