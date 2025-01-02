import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "posts"
  constructor(private http: HttpClient) {}

  public getFeedPosts(id: string) : Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}`)
  }

  public getFeedPostsBeforeDate(id: string, date: string) : Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.url}/${id}/${date}`)
   }

}
