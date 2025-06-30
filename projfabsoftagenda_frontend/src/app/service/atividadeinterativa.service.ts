import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AtividadeInterativa } from '../model/atividadeinterativa';

@Injectable({
  providedIn: 'root'
})
export class AtividadeInterativaService {
  private apiUrl = 'http://localhost:8080/api/v1/atividades';

  constructor(private http: HttpClient) {}

  salvar(atividade: AtividadeInterativa): Observable<AtividadeInterativa> {
    return this.http.post<AtividadeInterativa>(this.apiUrl, atividade);
  }

  listarTodas(): Observable<AtividadeInterativa[]> {
    return this.http.get<AtividadeInterativa[]>(this.apiUrl);
  }

  listarPorPaciente(id: number): Observable<AtividadeInterativa[]> {
    return this.http.get<AtividadeInterativa[]>(`${this.apiUrl}/paciente/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getAtividadeById(id: number): Observable<AtividadeInterativa> {
  return this.http.get<AtividadeInterativa>(`${this.apiUrl}/${id}`);
}
}
