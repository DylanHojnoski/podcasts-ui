import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Order, Post } from '../models/post'
import { Store } from '@ngrx/store'
import { AppState } from '../state/app.state'
import { selectUser } from '../state/user/user.selector'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "posts"
  private user: User | undefined = undefined

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(selectUser).subscribe(u => this.user = u);
  }

  public getNewPostsForUser(limit: number) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("limit", limit);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}`, { params: params, withCredentials: this.user != undefined })
  }

  public getFeedPosts(id: string, order: Order, unviewed: boolean) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    params = params.set("unviewed", unviewed);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}`, { params: params, withCredentials: this.user != undefined })
  }

  public getFeedPostsDate(id: string, date: string, order: Order, unviewed: boolean) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    params = params.set("unviewed", unviewed);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}/${date}`, { params: params, withCredentials: this.user != undefined })
   }

  public viewPost(postID: string) : Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/views`, { id: postID }, { withCredentials: this.user != undefined });
  }

}
