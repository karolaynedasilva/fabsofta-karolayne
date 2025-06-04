import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { CuidadorComponent } from './cuidador/cuidador.component';
export const routes: Routes = [
    { path: 'pacientes', component: PacienteComponent },
    { path: 'cuidadores', component: CuidadorComponent },
];