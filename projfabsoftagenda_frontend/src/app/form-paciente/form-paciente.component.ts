import { Component, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-form-paciente',
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css',
  providers: [PacienteService, provideNgxMask()]
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
        this.pacienteService.savePaciente(this.paciente).subscribe(() => {
          this.router.navigate(['/pacientes']);
        });
      } else {
        this.formPaciente.form.markAllAsTouched();
      }
    }

    voltar() {
      this.router.navigate(['/pacientes']);
    }
}
