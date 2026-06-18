import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AjudaService {
  private apiUrl = 'http://localhost:8080/api/v1/ajuda';

  constructor(private http: HttpClient) {}

  pedirAjuda(pacienteId: number) {
    return this.http.post<any>(`${this.apiUrl}/${pacienteId}`, {});
  }

  listarPendentes() {
    return this.http.get<any[]>(`${this.apiUrl}/pendentes`);
  }

  atender(id: number) {
    return this.http.put<void>(`${this.apiUrl}/${id}/atender`, {});
  }
}
