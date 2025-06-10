import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { FormLembreteComponent } from './form-lembrete/form-lembrete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auto.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'pacientes', component: PacienteComponent, canActivate: [AuthGuard] },
  { path: 'cuidadores', component: CuidadorComponent, canActivate: [AuthGuard] },
  { path: 'pacientes/novo', component: FormPacienteComponent, canActivate: [AuthGuard] },
  { path: 'lembretes/novo', component: LembreteComponent, canActivate: [AuthGuard] },
  { path: 'lembretes/form', component: FormLembreteComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
