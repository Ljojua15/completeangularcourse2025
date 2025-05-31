import {Component, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsService} from '../../../lib/services/posts.service';
import {IAlbum} from '../../../lib/interface/albums.interface';
import {map, Observable, switchMap} from 'rxjs';
import {LoaderComponent} from '../../shared/loader/loader.component';
import {IUser} from '../../../lib/interface/users.interface';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {

  private postsService = inject(PostsService);

  public albums: IAlbum[] = []

  private $albumId$ = computed(() => {
    return this.postsService.$albumId$();
  })

  public userAlbums$ : Observable<IAlbum[]> = this.postsService.getUserAlbums$(this.$albumId$()).pipe(
    switchMap(albums =>
      this.postsService.getUsers$().pipe(
        map((users: IUser[]) =>
          albums.map( res => {
            const user = users.find(u => u.id === res.userId)
            console.log(user)

            return {
              ...res,
              email: user?.email,
              userName: user?.name,
            }
            }
          )
        )
      )
    )
  )
}
