import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { FormLembreteComponent } from './form-lembrete/form-lembrete.component';
import { AuthGuard } from './guards/auto.guard';
import { HomecuidadorComponent } from './homecuidador/homecuidador.component';

export const routes: Routes = [
  { path: 'pacientes', component: PacienteComponent,},
  { path: 'cuidadores', component: CuidadorComponent,},
  { path: 'pacientes/novo', component: FormPacienteComponent,},
  { path: 'lembretes/novo', component: LembreteComponent,},
  { path: 'homecuidador', component: HomecuidadorComponent, },
  { path: 'form-lembrete', component: FormLembreteComponent, },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent,},
];
