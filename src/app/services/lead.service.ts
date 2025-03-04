import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from '../services/keycloak/keycloak.service';

export interface Lead {
  name: string;
  company: string;
  phone: string;
  email: string;
  addedBy: string;
  list: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private apiUrl = 'http://localhost:9999/api/leads'; // URL du backend sécurisé

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  getLeads(): Observable<Lead[]> {
    const token = this.keycloakService.keycloak.token; // Récupérer le token
    return this.http.get<Lead[]>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}` // Ajouter le token dans la requête
      }
    });
  }
}
