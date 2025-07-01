import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-home',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent {
searchTerm: string = '';

hotels = [
{
name: 'Hotel Royal',
image: './assets/paris.jpeg',
price: 120,
location: 'Paris'
},
{
name: 'Sunset Resort',
image: './assets/marse.jpg',
price: 150,
location: 'Marseille'
},
{
name: 'Ocean View',
image: './assets/nice.jpeg',
price: 200,
location: 'Nice'
},
{
name: 'Mountain Lodge',
image: './assets/lyon.jpeg',
price: 100,
location: 'Lyon'
},
{
    name: 'Selman Marrakech',
    image: './assets/marra.jpeg',
    price: 200,
    location: 'Marrakech'
    },
    {
    name: 'Hotel Sofitel ',
    image: './assets/rabat.jpg',
    price: 100,
    location: 'Rabat'
    },
    {
        name: 'Hotel Club Almoggar ',
        image: './assets/agadir.avif',
        price: 120,
        location: 'Agadir'
        },
        {
        name: 'Caribbean Village Agador',
        image: './assets/aga.avif',
        price: 150,
        location: '`agadir'
        },
        {
        name: 'Hotel Casselbergh Bruges',
        image: './assets/bel.jpg',
        price: 200,
        location: 'bruges'
        },
        {
        name: 'Monte-carlo',
        image: './assets/monaco.jpeg',
        price: 100,
        location: 'Monaco'
        },
    


];
constructor(private router: Router) {}

get filteredHotels() {
return this.hotels.filter(hotel =>
hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
hotel.location.toLowerCase().includes(this.searchTerm.toLowerCase())
);
}

reserveNow(hotelName: string) {
// Redirige vers la page de réservation
this.router.navigate(['/login']);
}
getImageUrl(path: string): string {
    console.log('Image path:', path);
    return path;
  }
}