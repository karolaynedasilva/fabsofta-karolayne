import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContatoEmergencia } from '../model/contato-emergencia';

@Injectable({ providedIn: 'root' })
export class ContatoEmergenciaService {
  private apiUrl = 'http://localhost:8080/api/v1/contatos-emergencia';
  constructor(private http: HttpClient) {}

  listarPorPaciente(pacienteId: number) { return this.http.get<ContatoEmergencia[]>(`${this.apiUrl}/paciente/${pacienteId}`); }
  salvar(c: ContatoEmergencia) {
    return c.id ? this.http.put<ContatoEmergencia>(`${this.apiUrl}/${c.id}`, c) : this.http.post<ContatoEmergencia>(this.apiUrl, c);
  }
  excluir(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
