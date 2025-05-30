import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IUser } from '../../../lib/interface/users.interface';
import { PostsService } from '../../../lib/services/posts.service';
import Swal from 'sweetalert2';
import { log } from 'node:console';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

private readonly postsService = inject(PostsService)
public users : IUser[] = []

public usersList$ = this.postsService.getUsers$();

// public userPersData$ = this.postsService.getCureentUser$(2).subscribe((res) => {
//   console.log(res.address)
// })

  showAlert(id:number) {
      this.postsService.getCureentUser$(id).subscribe((res) => {
    console.log(res.company.bs)
    Swal.fire({
      title: "<strong> <u>Company</u></strong>",
      icon: "info",
      html: `<h1></h1>`,
      showCloseButton: true,
      showCancelButton: false,
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
})


  }

}
