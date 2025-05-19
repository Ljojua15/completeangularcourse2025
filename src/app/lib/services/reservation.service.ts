import { Injectable } from '@angular/core';
import {IReservations} from '../interface/ireservations';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: IReservations[] = []

  //crud

  public getReservations() :IReservations[] {
    return this.reservations;
  }

  public getReservation(id:string) : IReservations | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  public addReservation(reservation: IReservations) {
    this.reservations.push(reservation);
    console.log(this.reservations, 'test');
  }

  public deleteReservation(id:string) : void {
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations.splice(index, 1);
  }

  public updateReservation(update: IReservations) {
    let index = this.reservations.findIndex(reservation => reservation.id === update.id);
    this.reservations[index] = update;
  }
}
