import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IUser } from '../../../lib/interface/users.interface';
import { PostsService } from '../../../lib/services/posts.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

private readonly postsService = inject(PostsService)
public users : IUser[] = []

public usersList$ = this.postsService.getUsers$()

}
