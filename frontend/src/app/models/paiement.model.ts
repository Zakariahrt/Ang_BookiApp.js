export interface Paiement {
  id: number;
  reservationId: number;
  montant: number;
  datePaiement: Date;
  modePaiement: string;
}
