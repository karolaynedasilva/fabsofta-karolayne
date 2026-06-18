import { Paciente } from './paciente';

export class ContatoEmergencia {
  id?: number;
  nome: string = '';
  telefone: string = '';
  relacao: string = '';
  paciente?: Paciente;
}
