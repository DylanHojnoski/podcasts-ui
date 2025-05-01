import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { FeedService } from 'src/app/services/feed.service';
import { AppState } from 'src/app/state/app.state';
import { logout } from 'src/app/state/user/user.action';
import { selectUser } from 'src/app/state/user/user.selector';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  user: User | undefined = undefined;

  public constructor(private store: Store<AppState>, private feedService: FeedService) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);
  }

  logout() {
    this.store.dispatch(logout());
  }

  getOPML() {
    this.feedService.getOPML().subscribe((data) => {
      const blob = new Blob([data]);FeedService
      var downloadURL = window.URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "podcast.opml";
      link.click();
    });
  }

  importOPML(event: Event) {
    // @ts-ignore
    const file: File = event?.target?.files[0];

    const formData = new FormData();
    formData.append("opml", file)
    this.feedService.importOPML(formData).subscribe()

  }
}
