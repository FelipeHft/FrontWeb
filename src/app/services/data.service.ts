import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { students } from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  estudiantes: any[] = [];

  constructor(private http: HttpClient) { 
    //console.log("servicio funciona");
    this.getStudents();
  }

  getStudents(){
    this.http.get('https://proyecto-paralela.firebaseio.com/students.json')
    .subscribe((resp: students[]) => {

      this.estudiantes = resp;
      console.log(resp);

    });
  }
}
