import { Injectable } from '@angular/core';
import { Chambre } from '../models/chambre.model';

@Injectable({ providedIn: 'root' })
export class ChambreService {
  chambres: Chambre[] = [];
  getAll(): Chambre[] {
    return this.chambres;
  }
}
