import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule ,FormsModule, HttpClientModule],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    phone: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:3000/api/register', this.user).subscribe(
      res => {
        alert('Inscription réussie ✅');
        this.router.navigate(['/login']);
      },
      err => {
        console.error('Erreur complète :', err);
        alert("Erreur lors de l'inscription ❌");
      }
    );
  }
}
