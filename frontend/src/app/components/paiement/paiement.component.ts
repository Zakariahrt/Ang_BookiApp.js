import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PaiementComponent {
  modePaiement: string = '';
  paiement = {
    numeroCarte: '',
    dateExpiration: '',
    cvv: ''
  };

  payer() {
    if (this.modePaiement === 'carte') {
      if (!this.paiement.numeroCarte || !this.paiement.dateExpiration || !this.paiement.cvv) {
        alert('Veuillez remplir tous les champs de la carte bancaire.');
        return;
      }
      alert('Paiement par carte bancaire validé.');
      this.genererRecu('Carte Bancaire');
    } else if (this.modePaiement === 'especes') {
      alert('Paiement en espèces sélectionné.');
      this.genererRecu('Espèces');
    } else if (this.modePaiement === 'cheque') {
      alert('Paiement par chèque sélectionné.');
      this.genererRecu('Chèque');
    } else {
      alert('Veuillez sélectionner un mode de paiement.');
    }
  }

  genererRecu(methode: string) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Reçu de Paiement', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Mode de paiement : ${methode}`, 20, 40);

    if (methode === 'Carte Bancaire') {
      const maskedNum = this.paiement.numeroCarte.replace(/\d{12}(\d{4})/, '************$1');
      doc.text(`Numéro de carte : ${maskedNum}`, 20, 50);
      doc.text(`Expiration : ${this.paiement.dateExpiration}`, 20, 60);
    }

    doc.text(`Date : ${new Date().toLocaleString()}`, 20, 80);
    doc.text('Merci pour votre paiement.', 105, 110, { align: 'center' });

    doc.save('recu-paiement.pdf');
  }
}
