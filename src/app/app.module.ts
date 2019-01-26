import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { ChartDonutComponent } from './shared/chart-donut/chart-donut.component';

import { HomeEstudianteService } from './services/home-estudiante.service';
import { ChartsModule } from 'ng2-charts';
import { ChartLineComponent } from './shared/chart-line/chart-line.component';




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
    ChartDonutComponent,
    ChartLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [HomeEstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
