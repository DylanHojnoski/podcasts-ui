import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/state/app.state';
import { clearQueue, moveBackwardInQueue, moveForwardInQueue, moveToIndexInQueue, removeFromQueue } from 'src/app/state/playing/playing.action';
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
  draggedOver: number = 0

  public constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectQueue).subscribe(queue => this.queue = queue);
  }

  ngAfterViewInit(): void {
    this.container.nativeElement.addEventListener("dragenter", () => {
        this.draggedOver = this.currentDragged;
    });

    this.items.forEach((div) => {
      div.nativeElement.addEventListener("dragstart", () => {
        this.currentDragged = Number.parseInt(div.nativeElement.id);
      });

      div.nativeElement.addEventListener("dragover", () => {
        this.draggedOver = Number.parseInt(div.nativeElement.id);
        const element = div.nativeElement.lastChild?.firstChild;
        if (element instanceof HTMLElement) {
        element.classList.remove("border-black");
        element.classList.add("border-sky-600");
        }
      })

      div.nativeElement.addEventListener("dragend", () => {
        this.store.dispatch(moveToIndexInQueue({ start: this.currentDragged, end: this.draggedOver }))
      });

      div.nativeElement.addEventListener("dragleave", () => {
        const element = div.nativeElement.lastChild?.firstChild;
        if (element instanceof HTMLElement) {
        element.classList.remove("border-sky-600");
        element.classList.add("border-black");
        }

      });
    });
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
