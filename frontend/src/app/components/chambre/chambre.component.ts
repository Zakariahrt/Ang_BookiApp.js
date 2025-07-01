import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-chambre',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './chambre.component.html',
styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent {
chambre = {
numero: '',
type: '',
etat: 'Libre',
prix: 0
};

typesChambre = ['Simple', 'Double', 'Suite', 'Deluxe'];
chambres: any[] = [];

ajouterChambre() {
this.chambres.push({ ...this.chambre });
this.chambre = { numero: '', type: '', etat: 'Libre', prix: 0 };
}
}