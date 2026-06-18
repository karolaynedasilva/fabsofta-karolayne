import { Paciente } from './paciente';

export class Medicamento {
  id?: number;
  nome: string = '';
  dosagem: string = '';
  horario: string = '';
  observacao: string = '';
  ativo: boolean = true;
  paciente?: Paciente;
}
