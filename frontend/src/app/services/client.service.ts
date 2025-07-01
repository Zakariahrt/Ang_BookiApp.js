import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class ClientService {
  clients: Client[] = [];
  getAll(): Client[] {
    return this.clients;
  }
}
