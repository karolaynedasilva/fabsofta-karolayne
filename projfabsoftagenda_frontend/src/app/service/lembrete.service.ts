import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../model/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  private apiUrl = 'http://localhost:8080/api/v1/lembretes';

  constructor(private http: HttpClient) {}

  salvar(lembrete: Lembrete): Observable<Lembrete> {
    return this.http.post<Lembrete>(this.apiUrl, lembrete);
  }

  listar(): Observable<Lembrete[]> {
    return this.http.get<Lembrete[]>(this.apiUrl);
  }

  listarPorPaciente(pacienteId: number): Observable<Lembrete[]> {
    return this.http.get<Lembrete[]>(`${this.apiUrl}/paciente/${pacienteId}`);
  }
  saveLembrete(lembrete:Lembrete){
      if(lembrete.id){
        return this.http.put(this.apiUrl + '/' + lembrete.id, lembrete);
      }
      return this.http.post(this.apiUrl,lembrete);
    }
  
}
