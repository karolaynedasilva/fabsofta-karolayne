import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paciente',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
  providers: [PacienteService]
})
export class PacienteComponent {

  public listaPacientes: Paciente[] = [];
  constructor(
    private pacienteService: PacienteService
  ){}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(resposta =>{
      this.listaPacientes = resposta;
    });
  }
}
