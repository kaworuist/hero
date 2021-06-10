import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string|null = null;
  constructor() { }
}
