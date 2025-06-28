import { Paciente } from "./paciente";

export class Lembrete {
    id: number;
    titulo: string;
    descricao: string;
    data: Date;
    hora: Date;
    paciente: Paciente;
}
