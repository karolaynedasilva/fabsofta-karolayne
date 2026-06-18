import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MedicamentoService } from '../service/medicamento.service';
import { Medicamento } from '../model/medicamento';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css',
  imports: [CommonModule, RouterLink, HeaderComponent]
})
export class MedicamentosComponent implements OnInit {
  medicamentos: Medicamento[] = [];
  carregando = true;
  mensagem = '';

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.carregando = true;
    this.medicamentoService.listarTodos().subscribe({
      next: lista => { this.medicamentos = lista; this.carregando = false; },
      error: () => this.carregando = false
    });
  }

  excluir(id: number) {
    if (!confirm('Excluir este medicamento?')) return;
    this.medicamentoService.excluir(id).subscribe({
      next: () => {
        this.medicamentos = this.medicamentos.filter(m => m.id !== id);
        this.mensagem = 'Medicamento excluído com sucesso.';
        setTimeout(() => this.mensagem = '', 3000);
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['/medicamentos/alterar', id]);
  }
}
