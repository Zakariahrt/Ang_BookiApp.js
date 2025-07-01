import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent } from './components/auth/register/register.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'client', component: ClientComponent },
  { path: 'chambre', component: ChambreComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'utilisateur', component: UtilisateurComponent }
];
