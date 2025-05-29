import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IUser } from '../../../lib/interface/users.interface';
import { PostsService } from '../../../lib/services/posts.service';
import Swal from 'sweetalert2';

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

  showAlert() {
    Swal.fire({
      title: "<strong> <u>test</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#" autofocus>links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

}
