import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CuidadorService } from '../service/cuidador.service';
import { Cuidador } from '../model/cuidador';
import { Router, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cuidador',
  standalone: true,
  templateUrl: './cuidador.component.html',
  styleUrl: './cuidador.component.css',
  imports: [CommonModule, HttpClientModule]
})
export class CuidadorComponent implements OnDestroy {
  cuidadorSelecionado!: Cuidador;
  @ViewChild('modalExcluir') modalElement!: ElementRef;
  modal!: bootstrap.Modal;
  listaCuidadores: Cuidador[] = [];

  constructor(
    private cuidadorService: CuidadorService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.cuidadorService.getCuidadores().subscribe(resposta => {
      this.listaCuidadores = resposta;
    });
  }

  novo() {
    this.router.navigate(['/cuidadores/novo']);
  }

  alterar(c: Cuidador) {
    this.router.navigate(['/cuidadores/alterar', c.id]);
  }

  abrirConfirmacao(c: Cuidador) {
    this.cuidadorSelecionado = c;
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
    this.cuidadorService.excluirCuidador(this.cuidadorSelecionado.id).subscribe(() => {
      this.fecharConfirmacao();
      this.carregarLista();
    });
  }
}