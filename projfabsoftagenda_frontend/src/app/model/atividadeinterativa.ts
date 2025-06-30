import { Paciente } from './paciente';

export class AtividadeInterativa {
  id: number = 0;
  titulo: string = '';
  descricao: string = '';
  tipo: string = ''; 
  paciente!: Paciente;
}
