
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
 
})
export class ClientComponent {
  client = {
    name: '',
    email: '',
    phone: '',
    hotel: ''
  };

  hotels = ['Hotel Royal', 'Sunset Resort', 'Ocean View', 'Mountain Lodge'];
  clients: any[] = [];

  constructor(private http: HttpClient) {}

  enregistrerClient() {
    this.http.post('http://localhost:3000/api/client', this.client).subscribe(
      res => {
        alert('Client enregistré avec succès ✅');
        this.clients.push({ ...this.client });
        this.client = { name: '', email: '', phone: '', hotel: '' };
      },
      err => {
        console.error(err);
        alert('Erreur lors de l’enregistrement');
      }
    );
  }
}
