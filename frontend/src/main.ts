import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from '../src/app/app.routes'; // Chemin vers ton fichier de routes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
