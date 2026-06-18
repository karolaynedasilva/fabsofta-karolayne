import { Paciente } from './paciente';

export class RegistroHumor {
  id?: number;
  emoji: string = '';
  valor: number = 3;
  dataHora: string = '';
  paciente?: Paciente;
}
