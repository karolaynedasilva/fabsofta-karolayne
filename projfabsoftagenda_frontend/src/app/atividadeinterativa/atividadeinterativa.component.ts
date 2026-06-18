import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { AtividadeInterativa } from '../model/atividadeinterativa';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-atividade-interativa',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './atividadeinterativa.component.html',
  styleUrl: './atividadeinterativa.component.css',
  providers: [AtividadeInterativaService]
})
export class AtividadeInterativaComponent implements OnDestroy {
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
    if (!this.modal) {
      this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    }
    this.modal.show();
  }

  fecharConfirmacao() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  ngOnDestroy(): void {
    if (this.modal) {
      this.modal.dispose();
    }
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
  }

  confirmarExclusao() {
    this.atividadeService.excluir(this.atividadeSelecionada.id).subscribe(() => {
      this.fecharConfirmacao();
      this.carregarAtividades();
    });
  }
}
