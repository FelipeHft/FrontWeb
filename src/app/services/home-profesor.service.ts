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
        localStorage.setItem('teacher', JSON.stringify(resp));
      }
    )
  }

  getData(){
    var item=JSON.parse(localStorage.getItem('currentUser'));
    const headers=new HttpHeaders({
      "Content-Type":"*/*",
      "X-API-KEY": item.apiKey
    })
    return this.http.get<any[]>(`https://api.sebastian.cl/academia/api/v1/teachers/${item.rut}`,{headers})
    .pipe(map(data=>data));
  }
}
