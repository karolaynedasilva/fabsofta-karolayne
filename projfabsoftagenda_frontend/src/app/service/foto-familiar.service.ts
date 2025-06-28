import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoFamiliar } from '../model/foto-familiar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoFamiliarService {
  private apiUrl = 'http://localhost:8080/api/v1/fotos-familiares';

  constructor(private http: HttpClient) {}

  salvar(foto: FotoFamiliar): Observable<FotoFamiliar> {
    return this.http.post<FotoFamiliar>(this.apiUrl, foto);
  }

  listarTodas(): Observable<FotoFamiliar[]> {
    return this.http.get<FotoFamiliar[]>(this.apiUrl);
  }

  listarPorPaciente(idPaciente: number): Observable<FotoFamiliar[]> {
    return this.http.get<FotoFamiliar[]>(`${this.apiUrl}/paciente/${idPaciente}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
