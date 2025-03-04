import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { KeycloakService } from '../src/app/services/keycloak/keycloak.service'; // Importer le service Keycloak
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { importProvidersFrom } from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    HttpClient,
    provideHttpClient(),
    KeycloakService, // Ajouter le service Keycloak
    importProvidersFrom(NgxChartsModule), // Ajoute NgxChartsModule si nécessaire
  ]
}).catch((err) => console.error(err));
