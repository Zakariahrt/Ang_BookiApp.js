import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // ✅ RouterModule ajouté
import { ReservationComponent } from './components/reservation/reservation.component';
import { ClientComponent } from './components/client/client.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,     // Pour <router-outlet>
    RouterModule,     // ✅ Pour <a routerLink> etc.
    ReservationComponent,
    ClientComponent,
    ChambreComponent,
    PaiementComponent,
    UtilisateurComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion_reservation';
}
