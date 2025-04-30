import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { addFeed } from 'src/app/state/feed/feed.action';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrl: './add-feed.component.css'
})
export class AddFeedComponent {
  newFeed: string = "";

  public constructor(private store: Store<AppState>, private feedService: FeedService) { }

  addFeed() {
    if (this.newFeed.length > 0) {
      this.store.dispatch(addFeed({ url: this.newFeed }));
    }
  }

  getOPML() {
    this.feedService.getOPML().subscribe((data) => {
      console.log(data)
      const blob = new Blob([data]);
      var downloadURL = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "podcast.opml";
      link.click();
    });
  }

  importOPML(event: Event) {
    console.log(event)
    // @ts-ignore
    const file: File = event?.target?.files[0];
    console.log(file.text)

    const formData = new FormData();
    formData.append("opml", file)
    this.feedService.importOPML(formData).subscribe()

  }

}
