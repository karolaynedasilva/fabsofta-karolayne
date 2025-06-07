import { Component, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [PacienteService, Router, provideNgxMask()]
})
export class FormPacienteComponent {
   paciente: Paciente = new Paciente();

   @ViewChild('formPaciente') formPaciente!: NgForm;

   constructor(
      private pacienteService: PacienteService,
      private router: Router
   ){}

   salvar() {
    if (this.formPaciente.invalid) {
      // Marca todos os campos como tocados
      Object.values(this.formPaciente.controls).forEach(control => {
        control?.markAsTouched();
      });
      return;
    }

    this.pacienteService.savePaciente(this.paciente).subscribe(res => {
      this.router.navigate(['pacientes']);
    });
   }
}
