import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  private apiUrl = 'http://localhost:8080/api/v1/humor';

  constructor(private http: HttpClient) {}

  salvar(humor: any): Observable<any> {
    return this.http.post(this.apiUrl, humor);
  }

  listarPorPaciente(pacienteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paciente/${pacienteId}`);
  }
}
