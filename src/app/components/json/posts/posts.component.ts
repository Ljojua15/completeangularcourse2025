import {Component, inject} from '@angular/core';
import {PostsService} from '../../../lib/services/posts.service';
import {CommonModule} from '@angular/common';
import {combineLatest, map, tap} from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private postService = inject(PostsService);

  public allPosts$ = this.postService.getPosts$()
  public allUsers$ = this.postService.getUsers$();

  public usersWithName$ = combineLatest([this.allPosts$, this.allUsers$]).pipe(
    map(([posts,users]) => {
      console.log(users);
      return posts.map(post => {
        const user = users.find(user => user.id === post.userId);

        return {
          ...post,
          userName: user ? user.name : 'Unknown User' ,
          nickName: user ? user.username : 'Unknown User' ,
        };
      })
    })
  )
}
