import { Paciente } from "./paciente";

export class FotoFamiliar {
    id: number;
    foto: string; 
    arquivoFoto: string;
    mimeType: string; 
    paciente: Paciente;
}
