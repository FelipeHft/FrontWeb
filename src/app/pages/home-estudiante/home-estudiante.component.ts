import { Component, OnInit } from '@angular/core';
import { HomeEstudianteService } from '../../services/home-estudiante.service';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css']
})
export class HomeEstudianteComponent implements OnInit { 

  nombres: string;
  apellidos: string;
  promedio: DoubleRange;
  desviacion: DoubleRange;
  ranking: number;


  constructor(private homeEstudiante: HomeEstudianteService) { 
    
  }

  ngOnInit() {

    var item=JSON.parse(localStorage.getItem('currentUser'));
    var itemFull=JSON.parse(localStorage.getItem('ranking'));
    console.log(itemFull);
    this.nombres = itemFull.student.firstName;
    this.apellidos = itemFull.student.lastName;
    this.promedio = itemFull.average;
    this.desviacion = itemFull.stddev;
    this.ranking = itemFull.position;
    this.homeEstudiante.getDataInicial();
  }

}
