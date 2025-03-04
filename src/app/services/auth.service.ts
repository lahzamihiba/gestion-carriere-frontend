import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9999/user/connect';  // L'URL de ton backend

  constructor(private http: HttpClient) {}

  // Vérifier si l'utilisateur est authentifié
  isAuthenticated(): void {
   // return this.keycloakService.isLoggedIn();  // Accès direct à l'API de Keycloak
  }

  // Récupérer les informations utilisateur
  getUserProfile(): void {
   // return this.keycloakService.loadUserProfile();  // Accès direct à l'API de Keycloak
  }

  // Récupérer le token JWT
  // @ts-ignore
  async getToken(): Promise<string> {
  //  return this.keycloakService.getToken();  // Accès direct à l'API de Keycloak
  }

  // Envoyer le token au backend pour récupérer les infos utilisateur
  async getUserInfo(): Promise<Observable<any>> {
    const token = await this.getToken();  // Récupérer le token de Keycloak
    return this.http.get<any>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  // Déconnexion
  logout(): void {
  //  this.keycloakService.logout();  // Déconnexion via Keycloak
  }
}
