import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RamosEstudianteService {

  restItems: any;

  constructor(private http: HttpClient) {
    this.getData();
   }

  getDataInicial(){
    this.getData().subscribe(
      (resp: any) => {
        this.restItems = resp;
        //console.log(this.restItems);

        localStorage.setItem('cursos', JSON.stringify(resp));
        var itemFull=JSON.parse(localStorage.getItem('cursos'));
        //console.log(itemFull);
      }
    )
  }

  getData(){
    var item=JSON.parse(localStorage.getItem('currentUser'));
    const headers=new HttpHeaders({
      "Content-Type":"*/*",
      "X-API-KEY": item.apiKey
    })
    return this.http.get<any[]>(`http://138.68.23.14/api/v1/courses/students/${item.rut}`,{headers})
    .pipe(map(data=>data));
  }
}
