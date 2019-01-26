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
  resStats: any;
  ordinal: number;
  subjectCode: string;
  year: number;
  nota: any;
  code: any;

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
    this.ordinal = curso.course.ordinal;
    this.subjectCode = curso.course.subject.code;
    this.year = curso.course.year;
    this.nota = curso.grade;
    this.code = curso.course.code;
    this.courseStats.preguntarStats(this.ordinal, this.subjectCode, this.year).subscribe(
      resultadoStats => {
        localStorage.setItem('cursoStat', JSON.stringify(resultadoStats));
        this.resStats = resultadoStats;
      });
  }


}
