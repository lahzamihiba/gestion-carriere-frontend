import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../app/services/keycloak/keycloak.service';
import {UsersTableComponent} from './components/user-table/user-table.component'; // Importer le service Keycloak

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    UsersTableComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    this.keycloakService.init(); // Appeler la méthode d'initialisation lors du démarrage
  }
}
