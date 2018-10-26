import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {
  private usersApi = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private http : HttpClient) { }

  //call http
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersApi);
  }


}
