import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"list", component: ReservationListComponent},
    {path:"new", component:ReservationFormComponent},
    {path:"edit/:id", component:ReservationFormComponent},
    {path:"**", component:HomeComponent},

];
