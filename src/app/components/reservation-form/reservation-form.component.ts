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
  public reservationId: string | null = null;

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.reservationId = params.get('id');

      if (this.reservationId) {
        // const reservation = this.reservationService.getReservationApi(this.reservationId);

        // if (reservation) {
        //   this.reservationForm.patchValue(reservation);
        // }
        this.reservationService.getReservationApi(this.reservationId).subscribe(reservation => {
          if(reservation){
            this.reservationForm.patchValue(reservation)
          }
        })
      }
    });
  }

  public onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: IReservations = this.reservationForm.value;

      if (this.reservationId) {
        this.reservationService.updateReservationApi(this.reservationId, reservation).subscribe(() => {
          console.log('processing');
          
        });
      } else {
        this.reservationService.addReservationApi(reservation).subscribe(() => {
          console.log('adding');
          
        });
      }

      this.router.navigate(['/list']);
    } else {
      console.error('❌ Form invalid');
    }
  }
}