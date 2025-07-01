import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  registerClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  loginClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  getChambres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/chambre`);
  }

  reserve(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation`, data);
  }

  pay(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/paiement`, data);
  }
}
