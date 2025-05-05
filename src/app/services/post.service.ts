import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Order, Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "posts"
  constructor(private http: HttpClient) {}

  public getFeedPosts(id: string, order: Order) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}`, { params: params, withCredentials: true })
  }

  public getFeedPostsDate(id: string, date: string, order: Order) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}/${date}`, { params: params, withCredentials: true })
   }

  public viewPost(postID: string) : Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/views`, { id: postID }, { withCredentials: true });
  }

}
