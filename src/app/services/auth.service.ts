import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string ) {
    return email === 'example@gmail.com' && password === 'example';
  }

}
