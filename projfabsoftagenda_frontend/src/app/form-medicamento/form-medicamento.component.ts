import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentoService } from '../service/medicamento.service';
import { PacienteService } from '../service/paciente.service';
import { Medicamento } from '../model/medicamento';
import { Paciente } from '../model/paciente';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-form-medicamento',
  standalone: true,
  templateUrl: './form-medicamento.component.html',
  styleUrl: './form-medicamento.component.css',
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class FormMedicamentoComponent implements OnInit {
  medicamento: Medicamento = new Medicamento();
  pacientes: Paciente[] = [];
  editando = false;

  @ViewChild('formMed') formMed!: NgForm;

  constructor(
    private medicamentoService: MedicamentoService,
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pacienteService.getPacientes().subscribe(lista => {
      this.pacientes = lista;
      if (id) {
        this.editando = true;
        this.medicamentoService.buscarPorId(Number(id)).subscribe(m => {
          this.medicamento = {
            ...m,
            paciente: lista.find(p => p.id === m.paciente?.id)
          };
        });
      }
    });
  }

  salvar() {
    if (this.formMed.invalid) {
      this.formMed.form.markAllAsTouched();
      return;
    }
    this.medicamentoService.salvar(this.medicamento).subscribe({
      next: () => this.router.navigate(['/medicamentos']),
      error: err => alert('Erro ao salvar: ' + (err?.message || JSON.stringify(err)))
    });
  }

  voltar() {
    this.router.navigate(['/medicamentos']);
  }
}
