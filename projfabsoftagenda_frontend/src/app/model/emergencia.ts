import { Paciente } from "./paciente";

export class Emergencia {
    id: number;
    paciente: Paciente;
    horario: string;
    status: string;
}