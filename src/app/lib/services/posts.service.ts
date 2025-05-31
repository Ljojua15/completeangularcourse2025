import {inject, Injectable, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/users.interface';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interface/posts.interface';
import {IComment} from '../interface/comments.interface';
import {IAlbum} from '../interface/albums.interface';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postApi = 'https://jsonplaceholder.typicode.com';
    private http = inject(HttpClient)

  public $postId$ = signal(0)
  public $albumId$ = signal(0)

  public getUsers$() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.postApi + "/users")
  }
  public getCurrentUser$(id:number) : Observable<IUser> {
    return this.http.get<IUser>(this.postApi + "/users/" + id)
  }

  public getPosts$() : Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postApi + "/posts")
  }

  public getTargetComments$(postId:number) : Observable<IComment[]> {
    return this.http.get<IComment[]>(this.postApi + "/comments?postId=" + postId)
  }

  public getUserAlbums$(albumId:number) : Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.postApi + "/albums?userId=" + albumId)
  }

}
