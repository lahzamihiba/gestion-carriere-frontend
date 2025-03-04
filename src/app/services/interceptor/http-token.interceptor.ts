import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import {Observable} from 'rxjs';
import {KeycloakService} from '../keycloak/keycloak.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {
    const token = this.keycloakService.keycloak.token;

    if (token) {
      // Ajouter le token à l'en-tête Authorization
      const clonedRequest = req.clone({
        headers:new HttpHeaders( {
          Authorization: `Bearer ${token}`
        })
      });
      return next.handle(clonedRequest);
    }

    return next.handle(req); // Continuer sans modification si pas de token
  }
}
