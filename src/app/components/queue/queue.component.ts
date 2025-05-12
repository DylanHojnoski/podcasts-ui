import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { clearQueue, moveToIndexInQueue, removeFromQueue } from 'src/app/state/playing/playing.action';
import { selectQueue } from 'src/app/state/playing/playing.selector';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {

  queue: Post[] = []
  @ViewChildren("queueItem") items!: QueryList<ElementRef<HTMLDivElement>>
  @ViewChild("container") container!: ElementRef<HTMLDivElement>
  currentDragged: number = 0;
  draggedOver: number = -1

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectQueue).subscribe(queue => this.queue = queue);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(moveToIndexInQueue({ start: event.previousIndex, end: event.currentIndex }))
  }

  remove(index: number) {
    this.store.dispatch(removeFromQueue({ index: index }));
  }

  clear() {
    this.store.dispatch(clearQueue());
  }

}
