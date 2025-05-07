import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  name: string | null = "";
  feeds: Feed[] = [];

  public constructor(private route: ActivatedRoute, private feedService: FeedService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      if (this.name != null) {
        this.feedService.getSearchFeeds(this.name).subscribe(f => this.feeds = f);
      }
    })
  }


}
