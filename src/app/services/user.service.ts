import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com'

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }

  getPosts(): Observable<any>{
    return this.http.get(`${this.url}/posts`);
  }
}
