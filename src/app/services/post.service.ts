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

  public getNewPostsForUser(limit: number) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("limit", limit);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}`, { params: params, withCredentials: true })
  }

  public getFeedPosts(id: string, order: Order, unviewed: boolean, limit: number, offset: number) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    params = params.set("unviewed", unviewed);
    params = params.set("limit", limit);
    params = params.set("offset", offset);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}`, { params: params, withCredentials: true })
  }

  public getFeedPostsDate(id: string, date: string, order: Order, unviewed: boolean) : Observable<Post[]> {
    let params = new HttpParams();
    params = params.set("order", order);
    params = params.set("unviewed", unviewed);
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}/${date}`, { params: params, withCredentials: true })
   }

  public viewPost(postID: string) : Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/views`, { id: postID }, { withCredentials: true });
  }

}
