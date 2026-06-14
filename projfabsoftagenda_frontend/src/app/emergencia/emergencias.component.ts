import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmergenciaService } from '../service/emergencia.service';
import { Emergencia } from '../model/emergencia';

@Component({
  selector: 'app-emergencias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './emergencias.component.html',
  styleUrl: './emergencias.component.css'
})
export class EmergenciasComponent {
  emergencias: Emergencia[] = [];

  constructor(private emergenciaService: EmergenciaService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.emergenciaService.listarTodas().subscribe(lista => {
      this.emergencias = lista.sort((a, b) =>
        new Date(b.horario).getTime() - new Date(a.horario).getTime()
      );
    });
  }

  atender(emergencia: Emergencia): void {
    this.emergenciaService.atender(emergencia.id).subscribe(() => {
      this.carregar();
    });
  }

  formatarHorario(horario: string): string {
    const data = new Date(horario);
    return data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }
}