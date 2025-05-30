import { CommonModule } from '@angular/common';
import {Component, inject, OnDestroy} from '@angular/core';
import { IUser } from '../../../lib/interface/users.interface';
import { PostsService } from '../../../lib/services/posts.service';
import Swal from 'sweetalert2';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnDestroy{

private readonly postsService = inject(PostsService)
public users : IUser[] = []

public usersList$ = this.postsService.getUsers$();

private subscription = new Subscription();

  showAlert(id:number) {

    const sub = this.postsService.getCureentUser$(id).subscribe({
      next: (result) => {
        Swal.fire({
          title: '<strong>Company Info:</strong>',
          icon: 'info',
          html: `
            <h1>${result.company.name}</h1><br>
            <h2>${result.company.bs}</h2><br>
            <h3>${result.company.catchPhrase}</h3>
          `,
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
          confirmButtonAriaLabel: 'Thumbs up, great!'
        });

      }

    })
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
