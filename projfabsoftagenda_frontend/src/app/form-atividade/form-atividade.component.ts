import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AtividadeInterativa } from '../model/atividadeinterativa';
import { Paciente } from '../model/paciente';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-form-atividade',
  standalone: true,
  templateUrl: './form-atividade.component.html',
  styleUrl: './form-atividade.component.css',
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AtividadeInterativaService, PacienteService, Router]
})
export class FormAtividadeComponent {
  @ViewChild('formAtividade') formAtividade!: NgForm;

  atividade: any = {};
  pacientes: Paciente[] = [];

  constructor(
    private atividadeService: AtividadeInterativaService,
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;

      if (id) {
        this.atividadeService.getAtividadeById(id).subscribe(atividade => {
          const pacienteCerto = this.pacientes.find(p => p.id === atividade.paciente?.id);
          this.atividade = { ...atividade, paciente: pacienteCerto ?? null };
        });
      }
    });
  }

  salvar() {
    if (this.formAtividade.valid) {
      const atividadeParaSalvar = {
        ...this.atividade,
        paciente: this.atividade.paciente
      };

      this.atividadeService.salvar(atividadeParaSalvar).subscribe(() => {
        this.router.navigate(['/atividades']);
      });
    } else {
      this.formAtividade.form.markAllAsTouched();
    }
  }
}
