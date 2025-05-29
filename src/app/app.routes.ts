import { Routes } from '@angular/router';
import { HomeComponent } from './components/course3/home/home.component';
import { ReservationListComponent } from './components/course3/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './components/course3/reservation-form/reservation-form.component';
import { MainContentComponent } from './components/json/main-content/main-content.component';
import { PostsComponent } from './components/json/posts/posts.component';
import { CommentsComponent } from './components/json/comments/comments.component';
import { AlbumsComponent } from './components/json/albums/albums.component';
import { PhotosComponent } from './components/json/photos/photos.component';
import { TodosComponent } from './components/json/todos/todos.component';
import { UsersComponent } from './components/json/users/users.component';

export const routes: Routes = [
    // {path:"", component:HomeComponent},
    // {path:"list", component: ReservationListComponent},
    // {path:"new", component:ReservationFormComponent},
    // {path:"edit/:id", component:ReservationFormComponent},
    // {path:"**", component:HomeComponent},

    
    {path:"", component:MainContentComponent},
    {path:"posts", component: PostsComponent},
    {path:"comments", component:CommentsComponent},
    {path:"albums", component:AlbumsComponent},
    {path:"photos", component: PhotosComponent},
    {path:"todos", component:TodosComponent},
    {path:"users", component:UsersComponent},
    {path:"**", component:MainContentComponent},

];
