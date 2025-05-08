import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Feed } from '../models/feed'
import { Category } from '../models/category'
import { AppState } from '../state/app.state'
import { Store, select } from '@ngrx/store'
import { User } from '../models/user'
import { selectUser } from '../state/user/user.selector'

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  private url = "feeds"
  private user: User | undefined = undefined

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(selectUser).subscribe(u => this.user = u);
  }


  public getFeed() : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getFeedForID(feedID: string) : Observable<Feed> {
    return this.http.get<Feed>(`${environment.apiUrl}/${this.url}/${feedID}`);
  }

  public getFeedForCategory(categoryID: string, limit: number) : Observable<Feed[]> {
    let params = new HttpParams();
    params = params.set("limit", limit);

    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}/category/${categoryID}`, { params: params });
  }

  public getFeedCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/${this.url}/category`);
  }

  public getSearchFeeds(name: string) : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}/search/${name}`);
  }

  public addFeed(url: string) : Observable<Feed> {
    return this.http.post<Feed>(`${environment.apiUrl}/${this.url}`, {url: url});
  }

  public getOPML() : Observable<string> {
  const headers = new HttpHeaders().set('Accept', 'application/xml');
    return this.http.get(`${environment.apiUrl}/${this.url}/opml`, { headers, responseType: 'text' });
  }

  public importOPML(data: FormData) : Observable<Object> {
    return this.http.post(`${environment.apiUrl}/${this.url}/opml`, data);
  }

  public getFollowedFeeds() : Observable<Feed[]> {
    return this.http.get<Feed[]>(`${environment.apiUrl}/${this.url}/follows`, { withCredentials: this.user != undefined });
  }

  public followFeed(feedID: string) : Observable<Feed> {
    return this.http.post<Feed>(`${environment.apiUrl}/${this.url}/follows`, { id: feedID }, { withCredentials: this.user != undefined});
  }

  public deleteFollowFeed(feedID: string) : Observable<Object> {
    return this.http.delete(`${environment.apiUrl}/${this.url}/follows/${feedID}`, { withCredentials: this.user != undefined });
  }

}
