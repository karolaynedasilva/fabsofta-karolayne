import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EvolucaoPaciente } from '../model/evolucao-paciente';
import { EvolucaoService } from '../service/evolucao-paciente.service';

@Component({
  selector: 'app-form-evolucao',
  standalone: true,
  templateUrl: './form-evolucao.component.html',
  styleUrl: './form-evolucao.component.css',
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class FormEvolucaoComponent implements OnInit {
  @ViewChild('formEvolucao') formEvolucao!: NgForm;

  evolucao: EvolucaoPaciente = {
    descricao: '',
    observacoes: '',
    nivelEngajamento: '',
    autor: '',
    paciente: { id: 0 }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evolucaoService: EvolucaoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.evolucao.paciente = { id: Number(id) };
    }
  }

  salvar() {
    if (this.formEvolucao.valid) {
      console.log('Enviando evolução:', this.evolucao);
      this.evolucaoService.salvar(this.evolucao).subscribe(() => {
        this.router.navigate([`/evolucao/paciente/${this.evolucao.paciente.id}`]);
      });
    } else {
      this.formEvolucao.form.markAllAsTouched();
    }
  }
}
