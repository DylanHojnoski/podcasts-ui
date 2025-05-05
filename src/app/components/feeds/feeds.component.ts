import { Component, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css'
})
export class FeedsComponent {
  @Input() feeds: Feed[] = [];
}
