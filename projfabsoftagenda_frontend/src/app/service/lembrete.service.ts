import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../model/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  apiUrl = 'http://localhost:8080/api/v1/lembretes';
  constructor(private http:HttpClient) { }

  listarPorPaciente(pacienteId: number): Observable<Lembrete[]> {
    return this.http.get<Lembrete[]>(`${this.apiUrl}/paciente/${pacienteId}`);
  }
  getLembretes() {
    return this.http.get<Lembrete[]>(this.apiUrl);
  }

  saveLembrete(lembrete:Lembrete){
    if(lembrete.id){
      return this.http.put(this.apiUrl + '/' + lembrete.id, lembrete);
    }
    return this.http.post(this.apiUrl,lembrete);
  }

  getLembreteById(id: any) {
    return this.http.get<Lembrete>(this.apiUrl + '/' + id);
  }

  excluirLembrete(id: any){
    return this.http.delete<Lembrete>(this.apiUrl + '/' + id);
  }
  
}