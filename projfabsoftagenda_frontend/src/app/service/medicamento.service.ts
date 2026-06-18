import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../model/medicamento';

@Injectable({ providedIn: 'root' })
export class MedicamentoService {
  private apiUrl = 'http://localhost:8080/api/v1/medicamentos';
  constructor(private http: HttpClient) {}

  listarTodos() { return this.http.get<Medicamento[]>(this.apiUrl); }
  listarPorPaciente(pacienteId: number) { return this.http.get<Medicamento[]>(`${this.apiUrl}/paciente/${pacienteId}`); }
  buscarPorId(id: number) { return this.http.get<Medicamento>(`${this.apiUrl}/${id}`); }
  salvar(m: Medicamento) {
    return m.id ? this.http.put<Medicamento>(`${this.apiUrl}/${m.id}`, m) : this.http.post<Medicamento>(this.apiUrl, m);
  }
  excluir(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
