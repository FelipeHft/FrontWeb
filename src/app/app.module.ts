import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeEstudianteComponent } from './pages/home-estudiante/home-estudiante.component';
import { RamosEstudianteComponent } from './pages/ramos-estudiante/ramos-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeEstudianteComponent,
    RamosEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
