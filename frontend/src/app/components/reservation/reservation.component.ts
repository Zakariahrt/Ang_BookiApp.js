// src/app/components/reservation/reservation.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class ReservationComponent {
  reservation = {
    ville: '',
    hotel: '',
    chambre: '',
    dateDebut: '',
    dateFin: '',
    personnes: 1
  };

  hotels = ['Hotel Atlas', 'Hotel Sofitel', 'Hotel Ibis'];
  villes = ['Casablanca', 'Rabat', 'Marrakech'];
  chambres = ['Simple', 'Double', 'Suite'];

  constructor(private http: HttpClient, private router: Router) {}

  
  reserver() {
    console.log('Réservation enregistrée ✅');
    this.router.navigate(['/paiement']);

     const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Reçu de Réservation', 70, 20);

    autoTable(doc, {
      startY: 30,
      head: [['Champ', 'Détail']],
      body: [
        ['Ville', this.reservation.ville],
        ['Hôtel', this.reservation.hotel],
        ['Chambre', this.reservation.chambre],
        ['Date début', this.reservation.dateDebut],
        ['Date fin', this.reservation.dateFin],
        ['Nombre de personnes', this.reservation.personnes.toString()]
      ]
    });

    doc.save('reservation.pdf'); // 📥 Télécharger le fichier PDF
  }
  

  
}


