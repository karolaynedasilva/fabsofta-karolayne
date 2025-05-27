import { Injectable } from '@angular/core';
import {Paciente} from '../model/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  apiUrl = 'http://localhost:8080/api/v1/pacientes';
  constructor(private http:HttpClient) { }

  getPacientes() {
    return this.http.get<Paciente[]>(this.apiUrl);
  }
}
