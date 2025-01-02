import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Feed } from '../models/feed'

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  private url = "feeds"
  constructor(private http: HttpClient) {}

  public getFeed() : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}`);
  }

}
