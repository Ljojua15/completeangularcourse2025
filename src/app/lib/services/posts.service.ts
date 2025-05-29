import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/users.interface';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postApi = 'https://jsonplaceholder.typicode.com';
    private http = inject(HttpClient)

  public getUsers$() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.postApi + "/users")
  }


}
