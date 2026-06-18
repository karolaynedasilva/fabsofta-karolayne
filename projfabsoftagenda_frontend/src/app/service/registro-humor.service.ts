import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroHumor } from '../model/registro-humor';

@Injectable({ providedIn: 'root' })
export class RegistroHumorService {
  private apiUrl = 'http://localhost:8080/api/v1/humor';
  constructor(private http: HttpClient) {}

  listarPorPaciente(pacienteId: number) { return this.http.get<RegistroHumor[]>(`${this.apiUrl}/paciente/${pacienteId}`); }
  registrar(pacienteId: number, emoji: string, valor: number) {
    return this.http.post<RegistroHumor>(`${this.apiUrl}/${pacienteId}`, { emoji, valor });
  }
}
