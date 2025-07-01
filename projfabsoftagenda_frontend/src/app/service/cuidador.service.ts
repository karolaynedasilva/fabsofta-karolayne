import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuidador } from '../model/cuidador';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  private apiUrl = 'http://localhost:8080/api/v1/cuidadores';

  constructor(private http: HttpClient) {}

  getCuidadores(): Observable<Cuidador[]> {
    return this.http.get<Cuidador[]>(this.apiUrl);
  }

  getCuidadorById(id: number | string): Observable<Cuidador> {
    return this.http.get<Cuidador>(`${this.apiUrl}/${id}`);
  }

  saveCuidador(cuidador: Cuidador): Observable<Cuidador> {
    return this.http.post<Cuidador>(this.apiUrl, cuidador);
  }

  excluirCuidador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
