import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../app/services/keycloak/keycloak.service';
import {LeadsTableComponent} from './components/leads-table-component/leads-table-component.component'; // Importer le service Keycloak

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    LeadsTableComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.keycloakService.init(); // Appeler la méthode d'initialisation lors du démarrage
  }
}
