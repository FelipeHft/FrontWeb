import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeEstudianteComponent } from './pages/home-estudiante/home-estudiante.component';
import { RamosEstudianteComponent } from './pages/ramos-estudiante/ramos-estudiante.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeProfesorComponent } from './pages/home-profesor/home-profesor.component';
import { RamosProfesorComponent } from './pages/ramos-profesor/ramos-profesor.component';
import { LoginComponent } from './pages/login/login.component';
import { RestablecerPwComponent } from './pages/restablecer-pw/restablecer-pw.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeEstudianteComponent,
    RamosEstudianteComponent,
    MenuComponent,
    HomeProfesorComponent,
    RamosProfesorComponent,
    LoginComponent,
    RestablecerPwComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
