import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lembrete } from '../model/lembrete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/lembretes';

  constructor(private http: HttpClient) {}

  getLembretes(): Observable<Lembrete[]> {
    return this.http.get<Lembrete[]>(this.apiUrl);
  }

  getLembretesPorPaciente(pacienteId: number): Observable<Lembrete[]> {
    return this.http.get<Lembrete[]>(`${this.apiUrl}/paciente/${pacienteId}`);
  }

  salvar(lembrete: Lembrete): Observable<Lembrete> {
    return this.http.post<Lembrete>(this.apiUrl, lembrete);
  }

  deleteLembrete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
