import { Component, OnInit } from '@angular/core';
import { HomeEstudianteService } from '../../services/home-estudiante.service';
import { CourseStatsService } from '../../services/course-stats.service';
import { CourseObject } from '../../interfaces/course-object';


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
  cursos: CourseObject[];
  largo: number;
  aprobados: number = 0;
  reprobados: number = 0;
  total: number;


  constructor(
    private homeEstudiante: HomeEstudianteService,
    private courseStats: CourseStatsService
    ) { 
    
  }

  ngOnInit() {
    this.homeEstudiante.getDataInicial();
    var cursosFull=JSON.parse(localStorage.getItem('cursos'));
    var itemFull=JSON.parse(localStorage.getItem('ranking'));
    this.cursos = cursosFull;
    this.nombres = itemFull.student.firstName;
    this.apellidos = itemFull.student.lastName;
    this.promedio = itemFull.average;
    this.desviacion = itemFull.stddev;
    this.ranking = itemFull.position;
    this.largo = this.cursos.length;
    var i;
    for(i=0; i<this.largo; i++){
      if(this.cursos[i].status == "APROBADO"){
        this.aprobados += 1;
      }
      else{
        this.reprobados += 1;
      }
    }
    this.total = this.reprobados + this.aprobados;
  }


}
