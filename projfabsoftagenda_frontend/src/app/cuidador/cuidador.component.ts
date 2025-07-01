import { Component, ElementRef, ViewChild } from '@angular/core';
import { CuidadorService } from '../service/cuidador.service';
import { Cuidador } from '../model/cuidador';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cuidador',
  standalone: true,
  templateUrl: './cuidador.component.html',
  styleUrl: './cuidador.component.css',
  imports: [CommonModule, HttpClientModule, RouterLink]
})
export class CuidadorComponent {
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
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.cuidadorService.excluirCuidador(this.cuidadorSelecionado.id).subscribe(() => {
      this.fecharConfirmacao();
      this.carregarLista();
    });
  }
}
