import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Feed } from '../models/feed'
import { Category } from '../models/category'

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  private url = "feeds"
  constructor(private http: HttpClient) {}

  public getFeed() : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getFeedForID(feedID: string) : Observable<Feed> {
    return this.http.get<Feed>(`${environment.apiUrl}/${this.url}/${feedID}`);
  }

  public getFeedForCategory(categoryID: string) : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}/category/${categoryID}`);
  }

  public getFeedCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/${this.url}/category`);
  }

  public addFeed(url: string) : Observable<Feed> {

    return this.http.post<Feed>(`${environment.apiUrl}/${this.url}`, {url: url});
  }

}
