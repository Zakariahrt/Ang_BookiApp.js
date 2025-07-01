export interface Reservation {
  id: number;
  clientId: number;
  chambreId: number;
  dateDebut: Date;
  dateFin: Date;
  statut: string;
}
