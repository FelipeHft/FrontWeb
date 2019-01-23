import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeEstudianteComponent } from './pages/home-estudiante/home-estudiante.component';
import { RamosEstudianteComponent } from './pages/ramos-estudiante/ramos-estudiante.component';
import { HomeProfesorComponent } from './pages/home-profesor/home-profesor.component';
import { RamosProfesorComponent } from './pages/ramos-profesor/ramos-profesor.component';
import { RestablecerPwComponent } from './pages/restablecer-pw/restablecer-pw.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home-estudiante', component: HomeEstudianteComponent },
  { path: 'ramos-estudiante', component: RamosEstudianteComponent },
  { path: 'home-profesor', component: HomeProfesorComponent },
  { path: 'ramos-profesor', component: RamosProfesorComponent},
  { path: 'restablecer', component: RestablecerPwComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
