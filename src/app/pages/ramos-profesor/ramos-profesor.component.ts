import { Component, OnInit } from '@angular/core';
import { RamosProfesorService } from 'src/app/services/ramos-profesor.service';

@Component({
  selector: 'app-ramos-profesor',
  templateUrl: './ramos-profesor.component.html',
  styleUrls: ['./ramos-profesor.component.css']
})
export class RamosProfesorComponent implements OnInit {

  ramosProfe: any;

  constructor(private ramosProfesor: RamosProfesorService) { }

  ngOnInit() {

    var cursosTeacher=JSON.parse(localStorage.getItem('ramosProfe'));
    this.ramosProfe = cursosTeacher;
    console.log(this.ramosProfe);
  }

}
