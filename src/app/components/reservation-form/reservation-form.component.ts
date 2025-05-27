import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {ReservationService} from '../../lib/services/reservation.service';
import {IReservations} from '../../lib/interface/ireservations';
import {Router, ActivatedRoute } from '@angular/router';

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
  public readonly router = inject(Router)
    public readonly activatedRoute = inject(ActivatedRoute)
  public reservationForm: FormGroup = new FormGroup({});



//  constructor(private formBuilder: FormBuilder) {
 
//  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required,Validators.email]],
      roomNumber: ['', Validators.required],
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      let reservation = this.reservationService.getReservation(id);
      if(reservation)
        this.reservationForm.patchValue(reservation)
    }
  }

 public onSubmit(){
    if(this.reservationForm.valid){
      let reservation: IReservations = this.reservationForm.value;
           let id = this.activatedRoute.snapshot.paramMap.get('id')
           if(id){
            this.reservationService.updateReservation(id, reservation)
           }else{
            this.reservationService.addReservation(reservation);
            
           }
      this.router.navigate(['/list'])
    }else{
      // test
      console.error('error');
    }
 }

}
