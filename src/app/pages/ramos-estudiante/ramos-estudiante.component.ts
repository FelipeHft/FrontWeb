import { Component, OnInit } from '@angular/core';
import { RamosEstudianteService } from '../../services/ramos-estudiante.service';

@Component({
  selector: 'app-ramos-estudiante',
  templateUrl: './ramos-estudiante.component.html',
  styleUrls: ['./ramos-estudiante.component.css']
})
export class RamosEstudianteComponent implements OnInit {

  constructor(private ramosEstudiante: RamosEstudianteService) { }

  ngOnInit() {

    var item=JSON.parse(localStorage.getItem('currentUser'));
    var itemFull=JSON.parse(localStorage.getItem('cursos'));
    console.log(item)
    console.log(itemFull);
    this.ramosEstudiante.getDataInicial();
  }

}
