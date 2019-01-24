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
import { MenuProfeComponent } from './shared/menu-profe/menu-profe.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

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
    MenuProfeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
