import { Injectable } from '@angular/core';
import {Paciente} from '../model/paciente';
import { HttpClient } from '@angular/common/http';
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

  savePaciente(paciente:Paciente){
    if(paciente.id){
      return this.http.put(this.apiUrl + '/' + paciente.id, paciente);
    }
    return this.http.post(this.apiUrl,paciente);
  }

  getPacientePorId(id: any) {
    return this.http.get<Paciente>(this.apiUrl + '/' + id);
  }
  
  excluirPaciente(id: any){
    return this.http.delete<Paciente>(this.apiUrl + '/' + id);
  }
  
}
