import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log("servicio funciona");
  }


  getData(){
    return this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts')
  }


}
