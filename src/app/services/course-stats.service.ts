import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseStatsService {


  constructor(private http: HttpClient) {
   }

   preguntarStats(ordinal:number, subjectCode:string, year:number){
    var item=JSON.parse(localStorage.getItem('currentUser'));
    const headers=new HttpHeaders({
      "Content-Type":"application/json;charset=UTF-8",
      "X-API-KEY": item.apiKey
    })  
    return this.http.post<any[]>( 'http://138.68.23.14/api/v1/courses/subject/stats',{
      ordinal: ordinal,
      subjectCode: subjectCode,
      year: year
    }, {headers}).pipe(map(data=>data));
  }
  

}
