import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { FormLembreteComponent } from './form-lembrete/form-lembrete.component';
import { HomecuidadorComponent } from './homecuidador/homecuidador.component';
import { Homepaciente } from './model/homepaciente';
import { HomePacienteComponent } from './homepaciente/homepaciente.component';
import { AuthGuard } from './guards/auto.guards';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'pacientes', component: PacienteComponent, canActivate: [AuthGuard]},
  { path: 'cuidadores', component: CuidadorComponent, canActivate: [AuthGuard]},
  { path: 'pacientes/novo', component: FormPacienteComponent, canActivate: [AuthGuard]},
  { path: 'lembretes/novo', component: FormLembreteComponent, canActivate: [AuthGuard]},
  { path: 'lembretes', component: LembreteComponent, canActivate: [AuthGuard]},
  { path: 'homecuidador', component: HomecuidadorComponent, canActivate: [AuthGuard]},
  { path: 'homepaciente/:id',  component: HomePacienteComponent,canActivate: [AuthGuard] },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
