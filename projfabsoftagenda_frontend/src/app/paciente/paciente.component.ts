import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-paciente',
  imports: [],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
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
