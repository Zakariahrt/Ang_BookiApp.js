import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  reservations: Reservation[] = [];
  getAll(): Reservation[] {
    return this.reservations;
  }
}
