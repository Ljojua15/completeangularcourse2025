import { Injectable } from '@angular/core';
import {IReservations} from '../interface/ireservations';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: IReservations[] = []

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

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
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  public deleteReservation(id:string) : void {
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  public updateReservation(update: IReservations) {
    let index = this.reservations.findIndex(reservation => reservation.id === update.id);
    this.reservations[index] = update;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
