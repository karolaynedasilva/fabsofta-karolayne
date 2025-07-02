import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { AtividadeInterativa } from '../model/atividadeinterativa';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';

@Component({
  selector: 'app-atividade-interativa',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './atividadeinterativa.component.html',
  styleUrl: './atividadeinterativa.component.css',
  providers: [AtividadeInterativaService, Router]
})
export class AtividadeInterativaComponent {
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  listaAtividades: AtividadeInterativa[] = [];
  atividadeSelecionada!: AtividadeInterativa;

  constructor(
    private atividadeService: AtividadeInterativaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarAtividades();
  }

  carregarAtividades() {
    this.atividadeService.listarTodas().subscribe(res => {
      this.listaAtividades = res;
    });
  }

  novo() {
    this.router.navigate(['/atividades/novo']);
  }

  alterar(atividade: AtividadeInterativa) {
    this.router.navigate(['/atividades/alterar', atividade.id]);
  }

  abrirConfirmacao(atividade: AtividadeInterativa) {
    this.atividadeSelecionada = atividade;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.atividadeService.excluir(this.atividadeSelecionada.id).subscribe(() => {
      this.fecharConfirmacao();
      this.carregarAtividades();
    });
  }
}
