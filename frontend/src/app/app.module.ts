// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ← IMPORT IMPORTANT
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AppRoutingModule } from './app-routing.module';
import { ChambreComponent } from './components/chambre/chambre.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent } from './components/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ReservationComponent,
    ChambreComponent,
    PaiementComponent,
    UtilisateurComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,         // ✅ Obligatoire pour utiliser [(ngModel)]
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
