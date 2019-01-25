import { Component, OnInit } from '@angular/core';
import { HomeProfesorService } from '../../services/home-profesor.service';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.css']
})
export class HomeProfesorComponent implements OnInit {

  constructor(private homeProfesor: HomeProfesorService) { }

  ngOnInit() {
    this.homeProfesor.getDataInicial();
  }

}
