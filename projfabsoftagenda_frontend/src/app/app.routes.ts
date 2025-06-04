import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';

export const routes: Routes = [
    { path: 'pacientes', component: PacienteComponent },
    { path: 'cuidadores', component: CuidadorComponent },
    { path: 'pacientes/novo', component: FormPacienteComponent}
];