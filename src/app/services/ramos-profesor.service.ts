import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RamosProfesorService {

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
      "X-API-KEY":"7b3eb6d1-2d86-4161-86a2-4be460efa182"
    })
    return this.http.get<any[]>('https://api.sebastian.cl/academia/api/v1/rankings/8.693.477-9',{headers})
    .pipe(map(data=>data));
  }
}
