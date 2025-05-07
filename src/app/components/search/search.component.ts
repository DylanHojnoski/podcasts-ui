import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  name: string = "";
  feeds: Feed[] = [];

  public constructor(private route: Router) { }

  clear() {
    this.name = "";
    this.feeds = [];
  }

  search() {
    if (this.name != "") {
      this.route.navigate(['/feed/search/' + this.name]);
      this.clear();
    }
  }

}
