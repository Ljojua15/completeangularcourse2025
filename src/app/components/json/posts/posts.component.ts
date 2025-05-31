import {Component, inject} from '@angular/core';
import {PostsService} from '../../../lib/services/posts.service';
import {CommonModule} from '@angular/common';
import {combineLatest, map, shareReplay, switchMap} from 'rxjs';
import {Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-posts',
  imports: [CommonModule,RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private postService = inject(PostsService);
  private router = inject(Router);
  public allPosts$ = this.postService.getPosts$()
  public allUsers$ = this.postService.getUsers$();

  public postsPerPage = 12;
  public currentPage = 1;
  public totalPages = 0;

  // public usersWithName$ = combineLatest([this.allPosts$, this.allUsers$]).pipe(
  //   map(([posts,users]) => {
  //     return posts.map(post => {
  //       const user = users.find(user => user.id === post.userId);
  //       return {
  //         ...post,
  //         userName: user ? user.name : 'Unknown User' ,
  //         nickName: user ? user.username : 'Unknown NickName' ,
  //       };
  //     })
  //   })
  // )
  public usersWithName$ = this.postService.getPosts$().pipe(
    switchMap(posts =>
      this.postService.getUsers$().pipe(
        map(users =>
          posts.map(post => {
            const user = users.find(u => u.id === post.userId);
            return {
              ...post,
              userName: user ? user.name : 'Unknown User',
              nickName: user ? user.username : 'Unknown NickName',
            };
          })
        )
      )
    )
  );

  public takePostId(postId:number){
    console.log('postId:',postId)
    this.postService.$postId$.set(postId)
    this.router.navigate(['/comments']);

  }
  // public usersWithName$ = combineLatest([this.allPosts$, this.allUsers$]).pipe(
  //   map(([posts, users]) => {
  //     const postsWithUser = posts.map(post => {
  //       const user = users.find(u => u.id === post.userId);
  //       return {
  //         ...post,
  //         userName: user ? user.name : 'Unknown User',
  //         nickName: user ? user.username : 'Unknown NickName',
  //       };
  //     });
  //     // Calculate total pages
  //     this.totalPages = Math.ceil(postsWithUser.length / this.postsPerPage);
  //     // Return only posts for current page
  //     return postsWithUser.slice(
  //       (this.currentPage - 1) * this.postsPerPage,
  //       this.currentPage * this.postsPerPage
  //     );
  //   }),
  // );
  //
  // changePage(page: number) {
  //   if (page < 1 || page > this.totalPages) return;
  //   this.currentPage = page;
  //   // Re-trigger usersWithName$ by manually calling a subject or just refetch.
  //   // Here we do a trick by re-assigning to trigger the pipe again:
  //   // But better to use BehaviorSubject for currentPage, but for simplicity:
  //   this.usersWithName$ = combineLatest([this.allPosts$, this.allUsers$]).pipe(
  //     map(([posts, users]) => {
  //       const postsWithUser = posts.map(post => {
  //         const user = users.find(u => u.id === post.userId);
  //         return {
  //           ...post,
  //           userName: user ? user.name : 'Unknown User',
  //           nickName: user ? user.username : 'Unknown NickName',
  //         };
  //       });
  //       return postsWithUser.slice(
  //         (this.currentPage - 1) * this.postsPerPage,
  //         this.currentPage * this.postsPerPage
  //       );
  //     }),
  //   );
  // }
}
