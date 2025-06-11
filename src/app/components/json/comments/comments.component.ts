import {Component, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsService} from '../../../lib/services/posts.service';
import {Observable} from 'rxjs';
import {IComment} from '../../../lib/interface/comments.interface';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-comments',
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  public comments: Comment[] = [];

  private postService = inject(PostsService)

  public $postId$ = computed(() => {
    return this.postService.$postId$();
    }
  );

  public getAllComments$: Observable<IComment[]> = this.postService.getTargetComments$(this.$postId$())


}
