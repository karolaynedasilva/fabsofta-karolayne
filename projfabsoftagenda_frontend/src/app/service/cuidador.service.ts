import { Injectable } from '@angular/core';
import { Cuidador } from '../model/cuidador';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  apiURL = "http://localhost:8080/api/v1/cuidadores";
  
  constructor(private http:HttpClient) { }

  getCuidadores(){
    return this.http.get<Cuidador[]>(this.apiURL);
  }

}