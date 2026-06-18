import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LembreteService } from '../service/lembrete.service';
import { Lembrete } from '../model/lembrete';
import { HeaderComponent } from '../header/header.component';

interface DiaCalendario {
  data: Date;
  diaNum: number;
  mesAtual: boolean;
  lembretes: Lembrete[];
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
  imports: [CommonModule, HeaderComponent]
})
export class CalendarioComponent implements OnInit {
  lembretes: Lembrete[] = [];
  semanas: DiaCalendario[][] = [];
  mesAtual = new Date();
  diaSelecionado: DiaCalendario | null = null;
  diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  constructor(private lembreteService: LembreteService) {}

  ngOnInit(): void {
    this.lembreteService.getLembretes().subscribe(lista => {
      this.lembretes = lista;
      this.gerarCalendario();
    });
  }

  get tituloMes(): string {
    return `${this.meses[this.mesAtual.getMonth()]} ${this.mesAtual.getFullYear()}`;
  }

  mesAnterior() {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() - 1, 1);
    this.gerarCalendario();
  }

  proximoMes() {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + 1, 1);
    this.gerarCalendario();
  }

  gerarCalendario() {
    const ano = this.mesAtual.getFullYear();
    const mes = this.mesAtual.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const diasNoMes: DiaCalendario[] = [];

    for (let i = primeiroDia.getDay(); i > 0; i--) {
      const d = new Date(ano, mes, 1 - i);
      diasNoMes.push({ data: d, diaNum: d.getDate(), mesAtual: false, lembretes: [] });
    }

    for (let d = 1; d <= ultimoDia.getDate(); d++) {
      const data = new Date(ano, mes, d);
      const lem = this.lembretes.filter(l => {
        const dataLem = new Date(l.data);
        return dataLem.getFullYear() === ano && dataLem.getMonth() === mes && dataLem.getDate() === d;
      });
      diasNoMes.push({ data, diaNum: d, mesAtual: true, lembretes: lem });
    }

    while (diasNoMes.length % 7 !== 0) {
      const d = new Date(ano, mes + 1, diasNoMes.length - ultimoDia.getDate() - primeiroDia.getDay() + 1);
      diasNoMes.push({ data: d, diaNum: d.getDate(), mesAtual: false, lembretes: [] });
    }

    this.semanas = [];
    for (let i = 0; i < diasNoMes.length; i += 7) {
      this.semanas.push(diasNoMes.slice(i, i + 7));
    }
  }

  selecionarDia(dia: DiaCalendario) {
    if (!dia.mesAtual) return;
    this.diaSelecionado = this.diaSelecionado?.diaNum === dia.diaNum ? null : dia;
  }

  eHoje(dia: DiaCalendario): boolean {
    const hoje = new Date();
    return dia.data.getFullYear() === hoje.getFullYear()
      && dia.data.getMonth() === hoje.getMonth()
      && dia.data.getDate() === hoje.getDate();
  }
}
