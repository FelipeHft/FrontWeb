import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeEstudianteService {

  restItems: any;

  constructor(private http: HttpClient) {
    this.getData();
   }

  getDataInicial(){
    this.getData().subscribe(
      (resp: any) => {
        this.restItems = resp;
        localStorage.setItem('ranking', JSON.stringify(resp));
      }
    )
  }

  getData(){
    var item=JSON.parse(localStorage.getItem('currentUser'));
    const headers=new HttpHeaders({
      "Content-Type":"*/*",
      "X-API-KEY": item.apiKey
    })
    return this.http.get<any[]>(`http://138.68.23.14/api/v1/rankings/${item.rut}`,{headers})
    .pipe(map(data=>data));
  }
}
