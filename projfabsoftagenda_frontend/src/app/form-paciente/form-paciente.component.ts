import { Component, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [PacienteService, Router, provideNgxMask()]
})
export class FormPacienteComponent {
    paciente: Paciente = new Paciente();
    @ViewChild('formPaciente') formPaciente!: NgForm;
    constructor(
      private pacienteService: PacienteService,
      private router: Router,
      private activeRouter: ActivatedRoute
    ) {
        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        if (id) {
          this.pacienteService.getPacienteById(id).subscribe(paciente => {
            this.paciente = paciente;
        });
      }
    }

    salvar() {
    if (this.formPaciente.valid) {
      this.pacienteService.savePaciente(this.paciente)
        .subscribe(res => {
          this.router.navigate(['pacientes']);
        });
    } else {
      // marca todos os campos como tocados para exibir mensagens de erro
      this.formPaciente.form.markAllAsTouched();
    }
  }
}
