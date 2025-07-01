import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'client', component: ClientComponent },
  { path: 'chambre', component: ChambreComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'utilisateurs', component: UtilisateurComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, // Correction ici (utilisateurs au lieu de utilisateus)
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Assure-toi d'utiliser RouterModule.forRoot ici
  exports: [RouterModule]  // Exporte RouterModule pour qu'il soit utilisé dans le module principal
})
export class AppRoutingModule { }
