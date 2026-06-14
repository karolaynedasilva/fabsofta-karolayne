import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-paciente',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent implements OnInit, OnDestroy {

  public listaPacientes: Paciente[] = [];
  public modalAberto = false;
  public pacienteSelecionado!: Paciente;

  private routerSub!: Subscription;

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarLista();

    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.carregarLista();
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) this.routerSub.unsubscribe();
  }

  carregarLista(): void {
    this.pacienteService.getPacientes().subscribe(resposta => {
      this.listaPacientes = resposta;
    });
  }

  novo(): void {
    this.router.navigate(['/pacientes/novo']);
  }

  alterar(paciente: Paciente): void {
    this.router.navigate(['/pacientes/alterar', paciente.id]);
  }

  abrirConfirmacao(paciente: Paciente): void {
    this.pacienteSelecionado = paciente;
    this.modalAberto = true;
  }

  fecharConfirmacao(): void {
    this.modalAberto = false;
  }

  confirmarExclusao(): void {
    this.pacienteService.excluirPaciente(this.pacienteSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.carregarLista();
      },
      error => {
        console.error('Erro ao excluir paciente:', error);
      }
    );
  }
}