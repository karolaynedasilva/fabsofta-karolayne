import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvolucaoPaciente } from '../model/evolucao-paciente';

@Injectable({
  providedIn: 'root'
})
export class EvolucaoService {
  private api = 'http://localhost:8080/api/v1/evolucao';

  constructor(private http: HttpClient) {}

  salvar(evolucao: EvolucaoPaciente): Observable<EvolucaoPaciente> {
    return this.http.post<EvolucaoPaciente>(this.api, evolucao);
  }

  listarPorPaciente(pacienteId: number): Observable<EvolucaoPaciente[]> {
    return this.http.get<EvolucaoPaciente[]>(`${this.api}/paciente/${pacienteId}`);
  }
}
