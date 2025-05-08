import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { environment } from "src/environments/environment";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { selectUser } from "../state/user/user.selector";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = "users"
  private user: User | undefined = undefined

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(selectUser).subscribe(u => this.user = u);
  }

  public createUser(username: string, password: string) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}`, {username: username, password: password});
  }

  public getUser() : Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${this.url}`, { withCredentials: true });
  }

  public login(username: string, password: string) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}/login`, {username: username, password: password}, { withCredentials: true });
  }

  public logout() : Observable<null> {
    return this.http.post<null>(`${environment.apiUrl}/${this.url}/logout`, {}, { withCredentials: true });
  }

}
