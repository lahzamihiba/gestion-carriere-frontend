import { Injectable } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private keycloakService: KeycloakService) {}

  /**
   * Récupère le token JWT actuel
   */
  getToken() {
    return localStorage.getItem('token')as String;
  }

  /**
   * Vérifie si le token est expiré ou non
   */
  isTokenValid(): boolean {
    if (!this.keycloakService.keycloak?.token) {
      return false;
    }
   // const jwtHeler: JwtH
    return !this.keycloakService.keycloak?.isTokenExpired();
  }

  /**
   * Rafraîchit le token s'il est sur le point d'expirer
   */
  async refreshToken(): Promise<boolean> {
    try {
      if (this.keycloakService.keycloak) {
        await this.keycloakService.keycloak.updateToken(30); // Rafraîchir si expiration dans moins de 30 secondes
        console.log('Token rafraîchi avec succès.');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du token :', error);
      return false;
    }
  }

  /**
   * Stocke manuellement le token dans le localStorage (optionnel)
   */
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Supprime le token du localStorage (optionnel)
   */
  clearToken() {
    localStorage.removeItem('token');
  }
}
