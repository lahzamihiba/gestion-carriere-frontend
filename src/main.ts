import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideKeycloak } from 'keycloak-angular';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:8080',  // Adresse de ton serveur Keycloak
        realm: 'gestion-carriere',      // Remplace par ton realm
        clientId: 'bsn',     // Remplace par ton client-id
      },
      initOptions: {
        onLoad: 'login-required',       // Redirige automatiquement vers la page de login
        checkLoginIframe: false
      },
    }),
    importProvidersFrom(NgxChartsModule) // Ajoute NgxChartsModule
  ]
}).catch((err) => console.error(err));
