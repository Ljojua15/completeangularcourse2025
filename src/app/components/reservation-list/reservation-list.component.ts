import { Component,inject,OnInit } from '@angular/core';
import { ReservationService } from '../../lib/services/reservation.service';
import {IReservations} from '../../lib/interface/ireservations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit  {

  private reservationService = inject(ReservationService)
  private router = inject(Router)

  public reservation: IReservations[] = []

  ngOnInit(): void {
    // this.reservationService.getReservationsApi().subscribe(res => {
    //   console.log(res, 'test');
      
    //   this.reservation = res
    // })
    this.reservationService.getReservationsApi().subscribe((res) => {
      this.reservation = res
      console.log(res);
      
    })
  }

  public backToForm(){
    this.router.navigate(['/new'])
  }

  public deleteReservation(id: string){
    console.log(id)
    this.reservationService.deleteReservation(id)
  }
    public editReservation(id: string){
      console.log('tteesstt');
      
    this.reservationService.deleteReservation(id)
  }
}
