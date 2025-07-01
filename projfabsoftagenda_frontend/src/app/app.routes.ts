import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { HomecuidadorComponent } from './homecuidador/homecuidador.component';
import { AuthGuard } from './guards/auto.guards';
import { LoginComponent } from './login/login.component';
import { FotoFamiliarComponent } from './foto/foto-familiar.component';
import { FormLembreteComponent } from './form-lembrete/form-lembrete.component';
import { PacienteHomeComponent } from './paciente-home/paciente-home.component';
import { AtividadeInterativaComponent } from './atividadeinterativa/atividadeinterativa.component';
import { FormAtividadeComponent } from './form-atividade/form-atividade.component';
import { HistoricoPacienteComponent } from './historico-paciente/historico-paciente.component';
import { FormCuidadorComponent } from './form-cuidador/form-cuidador.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'pacientes', component: PacienteComponent, canActivate: [AuthGuard]},
  { path: 'cuidadores', component: CuidadorComponent, canActivate: [AuthGuard] },
  { path: 'cuidadores/novo', component: FormCuidadorComponent, canActivate: [AuthGuard] },
  { path: 'cuidadores/alterar/:id', component: FormCuidadorComponent, canActivate: [AuthGuard] },
  { path: 'pacientes/novo', component: FormPacienteComponent, canActivate: [AuthGuard]},
  { path: 'lembretes', component: LembreteComponent, canActivate: [AuthGuard]},
  { path: 'lembretes/novo', component: FormLembreteComponent, canActivate: [AuthGuard]},
  { path: 'lembretes/alterar/:id', component: FormLembreteComponent, canActivate: [AuthGuard] },
  { path: 'homecuidador', component: HomecuidadorComponent, canActivate: [AuthGuard]},
  { path: 'paciente-home/:id',  component: PacienteHomeComponent,canActivate: [AuthGuard] },
  { path: 'pacientes/alterar/:id', component: FormPacienteComponent, canActivate: [AuthGuard] },
  { path: 'fotos-familiares', component: FotoFamiliarComponent, canActivate: [AuthGuard] },
  { path: 'atividades', component: AtividadeInterativaComponent, canActivate: [AuthGuard]  },
  { path: 'atividades/novo', component: FormAtividadeComponent, canActivate: [AuthGuard]  },
  { path: 'atividades/alterar/:id', component: FormAtividadeComponent, canActivate: [AuthGuard]  },
  { path: 'historico-paciente/:id', component: HistoricoPacienteComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
