import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {KeycloakService} from '../keycloak/keycloak.service';
import {Lead} from '../lead.service';
import {UserProfile} from '../keycloak/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9999/api/users'; // Backend

  //constructor(private http: HttpClient) {}
  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  getUsers(): Observable<UserProfile[]> {
    const token = this.keycloakService.keycloak.token;

    console.log("Token Keycloak utilisé pour l'API:", token);

    return this.http.get<UserProfile[]>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
