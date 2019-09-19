import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService
  ) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
