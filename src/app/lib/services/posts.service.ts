import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/users.interface';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interface/posts.interface';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postApi = 'https://jsonplaceholder.typicode.com';
    private http = inject(HttpClient)

  public getUsers$() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.postApi + "/users")
  }
  public getCureentUser$(id:number) : Observable<IUser> {
    return this.http.get<IUser>(this.postApi + "/users/" + id)
  }

  public getPosts$() : Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postApi + "/posts")
  }
}
