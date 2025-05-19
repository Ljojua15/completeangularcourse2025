import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {ReservationService} from '../../lib/services/reservation.service';
import {IReservations} from '../../lib/interface/ireservations';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone:true
})
export class ReservationFormComponent implements OnInit {

  public readonly reservationService = inject(ReservationService)
  public readonly formBuilder = inject(FormBuilder)
  public reservationForm: FormGroup = new FormGroup({});



 // constructor(private formBuilder: FormBuilder) {
 //
 // }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required,Validators.email]],
      roomNumber: ['', Validators.required],
    })
  }

 public onSubmit(){
    if(this.reservationForm.valid){
      let reservation: IReservations = this.reservationForm.value;
      this.reservationService.addReservation(reservation)
      console.log(this.reservationForm.value);
    }else{
      // test
      console.error('error');
    }
 }

}
