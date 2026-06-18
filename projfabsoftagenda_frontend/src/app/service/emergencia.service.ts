import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emergencia } from '../model/emergencia';

@Injectable({
  providedIn: 'root'
})
export class EmergenciaService {
  apiUrl = 'http://localhost:8080/api/v1/emergencias';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<Emergencia[]> {
    return this.http.get<Emergencia[]>(this.apiUrl);
  }

  listarPorPaciente(pacienteId: number): Observable<Emergencia[]> {
    return this.http.get<Emergencia[]>(`${this.apiUrl}/paciente/${pacienteId}`);
  }

  acionarSos(pacienteId: number): Observable<Emergencia> {
    return this.http.post<Emergencia>(`${this.apiUrl}/paciente/${pacienteId}`, {});
  }

  atender(id: number): Observable<Emergencia> {
    return this.http.put<Emergencia>(`${this.apiUrl}/${id}/atender`, {});
  }
}