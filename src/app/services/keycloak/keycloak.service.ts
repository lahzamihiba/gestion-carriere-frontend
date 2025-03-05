import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Keycloak from 'keycloak-js';
import {UserProfile} from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak |undefined;
  private _profile: UserProfile |undefined;

  get keycloak() {
    if(!this._keycloak) {
      this._keycloak = new Keycloak(
        {
          url: 'http://localhost:8080',  // Adresse de ton serveur Keycloak
          realm: 'gestion-carriere',     // Remplace par ton realm
          clientId: 'bsn',               // Remplace par ton client-id
        });
    }
    return this._keycloak;
  }

  get profile():UserProfile| undefined {
    return this._profile;
  }
//initialisation des doonées
 /* async init() {
    console.log('Authentication');
    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      console.log("Utilisateur authentifié !");
      this._profile = await this.keycloak.loadUserProfile() as UserProfile;
      this._profile.token = this.keycloak?.token;
      console.log("Token Keycloak chargé:", this._profile.token);
    } else {
      console.error("Échec d'authentification !");
    }
  }*/
  async init() {
    console.log('🔄 Initialisation de Keycloak...');
    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      console.log("✅ Utilisateur authentifié !");

      // Charger le profil utilisateur
      this._profile = await this.keycloak.loadUserProfile() as UserProfile;

      // Récupérer le token
      const token = this.keycloak.token;
      if (!token) {
        console.error("⚠️ Aucun token trouvé !");
      } else {
        console.log("🔑 Token Keycloak chargé:", token);
      }
    } else {
      console.error("❌ Échec d'authentification !");
    }
  }



  login() {
    this.keycloak?.login();
  }

  logout() {
    this.keycloak?.logout({redirectUri:"http:localhost:4200"});
  }

  isAuthenticated(): boolean {
    return this.keycloak?.authenticated ?? false;
  }

  async getToken(): Promise<string | undefined> {
    if (!this.keycloak) {
      console.error("⚠️ Keycloak non initialisé !");
      return undefined;
    }

    try {
      await this.keycloak.updateToken(30); // Rafraîchit si le token expire dans moins de 30s
      return this.keycloak.token;
    } catch (error) {
      console.error("❌ Impossible de rafraîchir le token:", error);
      return undefined;
    }
  }


}
