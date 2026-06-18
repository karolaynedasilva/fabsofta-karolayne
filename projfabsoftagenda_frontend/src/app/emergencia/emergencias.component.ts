import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergenciaService } from '../service/emergencia.service';
import { Emergencia } from '../model/emergencia';

@Component({
  selector: 'app-emergencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergencias.component.html',
  styleUrl: './emergencias.component.css'
})
export class EmergenciasComponent implements OnInit {
  emergencias: Emergencia[] = [];

  constructor(private emergenciaService: EmergenciaService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.emergenciaService.listarTodas().subscribe(lista => {
      this.emergencias = lista.sort((a, b) =>
        this.toDate(b.horario).getTime() - this.toDate(a.horario).getTime()
      );
    });
  }

  atender(emergencia: Emergencia): void {
    this.emergenciaService.atender(emergencia.id).subscribe(() => {
      this.carregar();
    });
  }

  // Converte qualquer formato de data/hora do backend para Date
  private toDate(horario: string): Date {
    if (!horario) return new Date(0);
    // Tenta parse direto
    const d = new Date(horario);
    if (!isNaN(d.getTime())) return d;
    // Tenta formato "yyyy-MM-dd HH:mm:ss" (sem T)
    const normalizado = horario.replace(' ', 'T');
    const d2 = new Date(normalizado);
    if (!isNaN(d2.getTime())) return d2;
    return new Date(0);
  }

  formatarHorario(horario: string): string {
    const data = this.toDate(horario);
    if (isNaN(data.getTime())) return '—';
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}