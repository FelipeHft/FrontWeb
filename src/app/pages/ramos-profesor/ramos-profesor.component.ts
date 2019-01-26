import { Component, OnInit } from '@angular/core';
import { RamosProfesorService } from 'src/app/services/ramos-profesor.service';
import { CourseStatsService } from 'src/app/services/course-stats.service';
import { CourseObject } from 'src/app/interfaces/course-object';

@Component({
  selector: 'app-ramos-profesor',
  templateUrl: './ramos-profesor.component.html',
  styleUrls: ['./ramos-profesor.component.css']
})
export class RamosProfesorComponent implements OnInit {

  ramosProfe: any;
  tabla = false;
  selectedCourse: CourseObject;
  ordinal: number;
  subjectCode: string;
  year: number;
  resStats: any;

  constructor(
    private ramosProfesor: RamosProfesorService,
    private courseStats: CourseStatsService
    ) { }

  ngOnInit() {
    var cursosTeacher=JSON.parse(localStorage.getItem('ramosProfe'));
    this.ramosProfe = cursosTeacher;
  }

  onSelect(ramo){
    this.selectedCourse = ramo;
    this.tabla = true;
    this.ordinal = this.selectedCourse.course.ordinal;
    this.subjectCode = this.selectedCourse.course.subject.code;
    this.year = this.selectedCourse.course.year;
    this.courseStats.preguntarStats(this.ordinal, this.subjectCode, this.year).subscribe(
      resultadoStats => {
        localStorage.setItem('cursoStat', JSON.stringify(resultadoStats));
        this.resStats = resultadoStats;
      });
  }

}
