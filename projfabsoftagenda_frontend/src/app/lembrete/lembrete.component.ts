import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Lembrete } from '../model/lembrete';
import { LembreteService } from '../service/lembrete.service';


@Component({
  selector: 'app-lembrete',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './lembrete.component.html',
  styleUrl: './lembrete.component.css',
  providers: []
})
export class LembreteComponent implements OnDestroy {

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