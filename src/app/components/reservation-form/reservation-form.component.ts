import { Component } from '@angular/core';
import {FormsModule, FormGroup,  ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone:true
})
export class ReservationFormComponent {
 public reservationForm: FormGroup = new FormGroup({});



 public onSubmit(){

 }
}
