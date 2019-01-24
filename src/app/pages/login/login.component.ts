import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, NgForm} from '@angular/forms';
//modelo creado
import { LoginForm } from '../../models/login';
//services en angular
import { DataService } from 'src/app/services/data.service';
//libreria rxjs
import { Observable } from 'rxjs';
import { of } from 'rxjs';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LoginForm();

  getInfo(){
    
  }

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  //

  onSubmit(){ 
    console.log(this.loginModel); 
  }

}
