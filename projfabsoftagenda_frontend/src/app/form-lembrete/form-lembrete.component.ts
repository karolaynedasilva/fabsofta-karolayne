import { Component, ViewChild } from '@angular/core';
import { Lembrete } from '../model/lembrete';
import { Paciente } from '../model/paciente';
import { LembreteService } from '../service/lembrete.service';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-lembrete',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './form-lembrete.component.html',
  styleUrl: './form-lembrete.component.css',
  providers: [LembreteService, PacienteService, Router, provideNgxMask()]
})
export class FormLembreteComponent {
  lembrete: any = {};
  pacientes: Paciente[] = [];

  @ViewChild('formLembrete') formLembrete!: NgForm;

  constructor(
    private lembreteService: LembreteService,
    private pacienteService: PacienteService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');

    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;

      if (id) {
        this.lembreteService.getLembreteById(id).subscribe(lembrete => {
          const pacienteCerto = pacientes.find(p => p.id === lembrete.paciente?.id);
          const dataFormatada = lembrete.data
            ? new Date(lembrete.data).toISOString().split('T')[0]
            : null;

          this.lembrete = {
            ...lembrete,
            data: dataFormatada,
            paciente: pacienteCerto ?? null
          };
        });
      }
    });
  }

  salvar() {
    if (this.formLembrete.valid) {
      const lembreteParaSalvar = {
        ...this.lembrete,
        paciente: this.lembrete.paciente // envia o objeto completo
      };

      this.lembreteService.saveLembrete(lembreteParaSalvar).subscribe(() => {
        this.router.navigate(['lembretes']);
      });
    } else {
      this.formLembrete.form.markAllAsTouched();
    }
  }
}
