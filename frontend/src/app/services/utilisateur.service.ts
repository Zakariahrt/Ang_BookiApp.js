import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({ providedIn: 'root' })
export class UtilisateurService {
  utilisateurs: Utilisateur[] = [];
  getAll(): Utilisateur[] {
    return this.utilisateurs;
  }
}
