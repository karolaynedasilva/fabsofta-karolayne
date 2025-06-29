import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Lembrete } from '../model/lembrete';
import { LembreteService } from '../service/lembrete.service';


@Component({
  selector: 'app-lembrete',
  standalone: true,
  imports: [HttpClientModule,RouterLink, CommonModule, FormsModule],
  templateUrl: './lembrete.component.html',
  styleUrl: './lembrete.component.css',
  providers: [LembreteService, Router]
})
export class LembreteComponent {

  lembrete: Lembrete = new Lembrete();

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private lembreteSelecionado!: Lembrete;
  public listaLembretes: Lembrete[] = [];

  constructor(
    private lembreteService: LembreteService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.lembreteService.getLembretes().subscribe(resposta => {
      this.listaLembretes = resposta;
    });
  }

  novo() {
    this.router.navigate(['/lembretes/novo']);
  }

  alterar(lembrete: Lembrete) {
    this.router.navigate(['/lembretes/alterar', lembrete.id]);
  }

  abrirConfirmacao(lembrete: Lembrete) {
    this.lembreteSelecionado = lembrete;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.lembreteService.excluirLembrete(this.lembreteSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.lembreteService.getLembretes().subscribe(lembretes => {
          this.listaLembretes = lembretes;
        });
      },
      error => {
        console.error('Erro ao excluir lembrete:', error);
      }
    );
  }
}
