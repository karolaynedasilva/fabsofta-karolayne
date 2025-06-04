import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [PacienteService, Router]
})
export class FormPacienteComponent {
   paciente: Paciente = new Paciente();

   constructor(
      private pacienteService: PacienteService,
      private router: Router
   ){}

   salvar(){
    this.pacienteService.savePaciente(this.paciente).subscribe( res =>{
    this.router.navigate(['pacientes']);
    })
   }
}
