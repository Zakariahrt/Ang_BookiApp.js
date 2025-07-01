import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  login() {
    console.log('Login clicked');
    this.router.navigate(['/reservation']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
