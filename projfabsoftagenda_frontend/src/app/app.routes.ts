import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { FormLembreteComponent } from './form-lembrete/form-lembrete.component';
import { HomecuidadorComponent } from './homecuidador/homecuidador.component';
import { Homepaciente } from './model/homepaciente';
import { HomePacienteComponent } from './homepaciente/homepaciente.component';

export const routes: Routes = [
  { path: 'pacientes', component: PacienteComponent,},
  { path: 'cuidadores', component: CuidadorComponent,},
  { path: 'pacientes/novo', component: FormPacienteComponent,},
  { path: 'lembretes/novo', component: FormLembreteComponent,},
  { path: 'lembretes', component: LembreteComponent,},
  { path: 'homecuidador', component: HomecuidadorComponent, },
  { path: 'homepaciente',  component: HomePacienteComponent, },
  { path: 'homepaciente/:id',  component: HomePacienteComponent, },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent,}
];
