import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})    
export class LoginComponent implements OnInit {

  resp: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  logIn(rut: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(rut, password).subscribe(
      resp => {
          localStorage.setItem('currentUser', JSON.stringify(resp));
          var item=JSON.parse(localStorage.getItem('currentUser'));
          console.log(item.rut);
          console.log(item.apiKey);
          console.log(item.email);
          console.log(item.role);
        
        //console.log(res);
        this.userService.setUserLoggedIn(resp);
      
      },
      error => {
        console.error(error);

      },

      () => this.navigate()
    );
  }


  navigate() {
    var item=JSON.parse(localStorage.getItem('currentUser'));
    if(item.role == "Docente"){
      this.router.navigateByUrl('/home-profesor');
    }
    else{
      this.router.navigateByUrl('/home-estudiante');
    }
    
   
  }
  
  

}
