import { Injectable } from '@angular/core';
import { Paiement } from '../models/paiement.model';

@Injectable({ providedIn: 'root' })
export class PaiementService {
  paiements: Paiement[] = [];
  getAll(): Paiement[] {
    return this.paiements;
  }
}
