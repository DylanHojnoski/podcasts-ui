import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent {
  @Input() feed: Feed | undefined = undefined;

}

