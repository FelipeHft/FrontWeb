import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(rut:string, password:string ) {
    return this.http.post('https://api.sebastian.cl/academia/api/v1/authentication/authenticate', {
      rut: rut,
      password: password,     
    });     
  }
  
}
