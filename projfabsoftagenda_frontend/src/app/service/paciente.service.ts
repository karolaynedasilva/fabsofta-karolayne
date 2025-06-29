import { Injectable } from '@angular/core';
import {Paciente} from '../model/paciente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  apiUrl = 'http://localhost:8080/api/v1/pacientes';
  constructor(private http:HttpClient) { }

  getPacientes() {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  // savePaciente(paciente:Paciente){
  //   if(paciente.id){
  //     return this.http.put(this.apiUrl + '/' + paciente.id, paciente);
  //   }
  //   return this.http.post(this.apiUrl,paciente);
  // }


  savePaciente(paciente: Paciente): Observable<Paciente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (paciente.id) {
      // PUT (atualizar)
      return this.http.put<Paciente>(`${this.apiUrl}/${paciente.id}`, paciente, { headers });
    } else {
      // POST (criar novo)
      return this.http.post<Paciente>(this.apiUrl, paciente, { headers });
    }
  }


  getPacienteById(id: any) {
    return this.http.get<Paciente>(this.apiUrl + '/' + id);
  }

  excluirPaciente(id: any){
    return this.http.delete<Paciente>(this.apiUrl + '/' + id);
  }
  
}
