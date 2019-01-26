import { Component, OnInit } from '@angular/core';
import { HomeProfesorService } from '../../services/home-profesor.service';
import { RamosProfesorService } from '../../services/ramos-profesor.service';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.css']
})
export class HomeProfesorComponent implements OnInit {

  teacher:any;
  ramosProfe:any;
  nombres: string;
  apellidos: string;
  largo: number;
  promedio = 0;
  aprobados: number = 0;
  reprobados: number = 0;

  constructor(
    private homeProfesor: HomeProfesorService,
    private ramosProfesor: RamosProfesorService
    ) { }

  ngOnInit() {
    this.ramosProfesor.getDataInicial();
    this.homeProfesor.getDataInicial();

    var datosTeacher=JSON.parse(localStorage.getItem('teacher'));
    var cursosTeacher=JSON.parse(localStorage.getItem('ramosProfe'));
    this.teacher = datosTeacher;
    this.ramosProfe = cursosTeacher;
    
    this.nombres = this.teacher.firstName;
    this.apellidos = this.teacher.lastName;
    this.largo = this.ramosProfe.length;

    var i;
    for(i=0; i<this.largo; i++){
      this.promedio += this.ramosProfe[i].average;
      this.aprobados += this.ramosProfe[i].aproved;
      this.reprobados += this.ramosProfe[i].reproved;
    }
    this.promedio = this.promedio/7;
  }



  

}
