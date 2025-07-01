export interface EvolucaoPaciente {
  id?: number;
  data?: string;
  descricao: string;
  observacoes?: string;
  nivelEngajamento?: string;
  autor?: string;
  paciente: { id: number };
}
