import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-pw',
  templateUrl: './restablecer-pw.component.html',
  styleUrls: ['./restablecer-pw.component.css']
})
export class RestablecerPwComponent implements OnInit {

  enviado(){
    alert("Correo enviado");
  }

  constructor() { }

  ngOnInit() {
  }

}
