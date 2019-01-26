import { Component, OnInit } from '@angular/core';
import { RamosEstudianteService } from '../../services/ramos-estudiante.service';
import { CourseObject } from '../../interfaces/course-object';
import { CourseStatsService } from '../../services/course-stats.service';

@Component({
  selector: 'app-ramos-estudiante',
  templateUrl: './ramos-estudiante.component.html',
  styleUrls: ['./ramos-estudiante.component.css']
})
export class RamosEstudianteComponent implements OnInit {

  cursos: CourseObject[];
  selectedCourse: CourseObject;
  tabla = false;
  resp: any;
  stats: any;

  constructor(
    private ramosEstudiante: RamosEstudianteService,
    private courseStats: CourseStatsService
    ) { }
   

  ngOnInit() {

    var itemFull=JSON.parse(localStorage.getItem('cursos'));
    this.cursos = itemFull;
    this.ramosEstudiante.getDataInicial();
  }

  onSelect(curso){
    this.selectedCourse = curso;
    this.tabla = true;
  }

  statCurso(ordinal: number, subjectCode: string, year: number, event: Event){
    event.preventDefault();

    this.courseStats.stat(ordinal, subjectCode, year).subscribe(
      resp => {
        localStorage.setItem('cursoStat', JSON.stringify(resp));
        var itemStat=JSON.parse(localStorage.getItem('cursoStat'));
        console.log(itemStat);

      },
      error => {
        console.error(error);

      }
    );
    
  }


}
