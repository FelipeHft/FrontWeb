import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(rut:string, password:string ) {
    return this.http.post('http://138.68.23.14/api/v1/authentication/authenticate', {
      rut: rut,
      password: password,     
    });     
  }
  
}
