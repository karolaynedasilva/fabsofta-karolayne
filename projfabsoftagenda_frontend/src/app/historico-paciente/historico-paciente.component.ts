import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
import { AtividadeInterativa } from '../model/atividadeinterativa';
import { RegistroHumorService } from '../service/registro-humor.service';
import { RegistroHumor } from '../model/registro-humor';
import { EvolucaoService as EvolucaoPacienteService } from '../service/evolucao-paciente.service';
import { EvolucaoPaciente } from '../model/evolucao-paciente';
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../model/paciente';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-historico-paciente',
  standalone: true,
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css'],
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class HistoricoPacienteComponent implements OnInit {
  pacienteId!: number;
  paciente?: Paciente;
  listaHumor: RegistroHumor[] = [];
  atividades: AtividadeInterativa[] = [];
  evolucoes: EvolucaoPaciente[] = [];
  novaEvolucao = '';
  salvandoEvolucao = false;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private humorService: RegistroHumorService,
    private atividadeService: AtividadeInterativaService,
    private evolucaoService: EvolucaoPacienteService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.carregar();
  }

  carregar() {
    this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => this.paciente = p);
    this.humorService.listarPorPaciente(this.pacienteId).subscribe(h => this.listaHumor = h);
    this.atividadeService.listarPorPaciente(this.pacienteId).subscribe(a => this.atividades = a);
    this.evolucaoService.listarPorPaciente(this.pacienteId).subscribe(e => this.evolucoes = e);
  }

  adicionarEvolucao() {
    if (!this.novaEvolucao.trim()) return;
    this.salvandoEvolucao = true;
    const ev: EvolucaoPaciente = { texto: this.novaEvolucao };
    this.evolucaoService.salvar(this.pacienteId, ev).subscribe({
      next: nova => {
        this.evolucoes.unshift(nova);
        this.novaEvolucao = '';
        this.salvandoEvolucao = false;
      },
      error: () => this.salvandoEvolucao = false
    });
  }

  excluirEvolucao(id: number) {
    if (!confirm('Excluir este registro?')) return;
    this.evolucaoService.excluir(id).subscribe(() => {
      this.evolucoes = this.evolucoes.filter(e => e.id !== id);
    });
  }

  get humorUltimos10(): RegistroHumor[] {
    return this.listaHumor.slice(0, 10).reverse();
  }

  alturaBarraHumor(valor: number): number {
    return (valor / 5) * 80;
  }

  corBarraHumor(valor: number): string {
    if (valor <= 1) return '#fca5a5';
    if (valor <= 2) return '#fde68a';
    if (valor === 3) return '#a3e635';
    if (valor === 4) return '#6ee7b7';
    return '#6366f1';
  }
}
