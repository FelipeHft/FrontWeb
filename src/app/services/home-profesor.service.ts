import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeProfesorService {

  restItems: any;

  constructor(private http: HttpClient) {
    this.getData();
   }

  getDataInicial(){
    this.getData().subscribe(
      (resp: any) => {
        this.restItems = resp;
        console.log(this.restItems);
      }
    )
  }

  getData(){
    const headers=new HttpHeaders({
      "Content-Type":"*/*",
      "X-API-KEY":"c45d2f8d-4e6b-4d01-8607-25b316d06c12"
    })
    return this.http.get<any[]>('https://api.sebastian.cl/academia/api/v1/rankings/10.471.648-2',{headers})
    .pipe(map(data=>data));
  }
}
