import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {IReservations} from '../interface/ireservations';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3000"

  private http = inject(HttpClient)

  private reservations: IReservations[] = []

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const savedReservations = localStorage.getItem('reservations');
  //     this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  //   } else {
  //     this.reservations = [];
  //   }
  // }


  //crud

  public getReservations() :IReservations[] {
    return this.reservations;
  }
///sdsaadsdasd
  public getReservationsApi() : Observable<IReservations[]> {
    return this.http.get<IReservations[]>(this.apiUrl + "/reservations")
  }

  public getReservation(id:string) : IReservations | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }


    public getReservationApi(id:string) : Observable<IReservations> {
    return this.http.get<IReservations>(this.apiUrl + "/reservation/" + id)
  }

  public addReservation(reservation: IReservations) {
    reservation.id = Date.now().toString()
    this.reservations.push(reservation);
    // if (isPlatformBrowser(this.platformId)) {
    //   localStorage.setItem('reservations', JSON.stringify(this.reservations));
    // }
  }

    public addReservationApi(reservation: IReservations) : Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation/", reservation)
  }

  public deleteReservation(id:string) : void {
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations.splice(index, 1);
  //  if (isPlatformBrowser(this.platformId)) {
  //     localStorage.setItem('reservations', JSON.stringify(this.reservations));
  //   }
  }

    public deleteReservationApi(id:string) : Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id)
  }

  // public updateReservation(id: string, update: IReservations) {
  //   let index = this.reservations.findIndex(reservation => reservation.id === id);
  //   this.reservations[index] = update;
  //   localStorage.setItem('reservations', JSON.stringify(this.reservations));
  // }

  public updateReservation(id: string, update: IReservations) {
  const index = this.reservations.findIndex(reservation => reservation.id === id);
  if (index !== -1) {
    this.reservations[index] = { ...update, id };
  //  if (isPlatformBrowser(this.platformId)) {
  //       localStorage.setItem('reservations', JSON.stringify(this.reservations));
  //     }
  }


}


    public updateReservationApi(id: string, update: IReservations): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, update)
  }
}
