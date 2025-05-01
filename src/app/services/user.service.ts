import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = "users"
  constructor(private http: HttpClient) {}

  public createUser(username: string, password: string) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}`, {username: username, password: password}, { withCredentials: true });
  }

  public login(username: string, password: string) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/${this.url}/login`, {username: username, password: password}, { withCredentials: true });
  }

  public logout() : Observable<null> {
    return this.http.post<null>(`${environment.apiUrl}/${this.url}/logout`, {}, { withCredentials: true });
  }

}
