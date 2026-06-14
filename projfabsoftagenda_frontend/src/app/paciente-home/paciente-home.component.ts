import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../service/paciente.service';
import { LembreteService } from '../service/lembrete.service';
import { Paciente } from '../model/paciente';
import { Lembrete } from '../model/lembrete';
import { FotoFamiliar } from '../model/foto-familiar';
import { FotoFamiliarService } from '../service/foto-familiar.service';
import { CommonModule } from '@angular/common';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
import { AtividadeInterativa } from '../model/atividadeinterativa';
import { EmergenciaService } from '../service/emergencia.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-paciente-home',
  standalone: true,
  templateUrl: './paciente-home.component.html',
  styleUrl: './paciente-home.component.css',
  imports: [CommonModule]
})
export class PacienteHomeComponent implements OnInit {
  pacienteId!: number;
  paciente!: Paciente;
  lembretes: Lembrete[] = [];
  fotos: FotoFamiliar[] = [];
  atividades: AtividadeInterativa[] = [];
  humores: string[] = ['😖', '😟', '😐', '🙂', '😌'];
  humorSelecionado: string | null = null;
  humorEnviado = false;
  sosEnviado = false;
  sosEnviando = false;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private lembreteService: LembreteService,
    private fotoFamiliarService: FotoFamiliarService,
    private atividadeService: AtividadeInterativaService,
    private emergenciaService: EmergenciaService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));

    this.pacienteService.getPacienteById(this.pacienteId).pipe(
      catchError(() => of(null))
    ).subscribe(p => { if (p) this.paciente = p; });

    this.lembreteService.listarPorPaciente(this.pacienteId).pipe(
      catchError(() => of([]))
    ).subscribe(lista => { this.lembretes = lista; });

    this.fotoFamiliarService.listarPorPaciente(this.pacienteId).pipe(
      catchError(() => of([]))
    ).subscribe(lista => { this.fotos = lista; });

    this.atividadeService.listarPorPaciente(this.pacienteId).pipe(
      catchError(() => of([]))
    ).subscribe(lista => { this.atividades = lista; });
  }

  // Retorna a src correta usando o mimeType salvo ou fallback para jpeg
  fotoSrc(f: FotoFamiliar): string {
    const mime = f.mimeType || 'image/jpeg';
    return `data:${mime};base64,${f.foto}`;
  }

  selecionarHumor(emoji: string) {
    this.humorSelecionado = emoji;
    this.humorEnviado = false;
  }

  registrarHumor() {
    if (!this.humorSelecionado) return;
    this.humorEnviado = true;
    setTimeout(() => {
      this.humorSelecionado = null;
      this.humorEnviado = false;
    }, 2000);
  }

  acionarSos() {
    if (this.sosEnviando) return;
    this.sosEnviando = true;
    this.emergenciaService.acionarSos(this.pacienteId).subscribe({
      next: () => {
        this.sosEnviando = false;
        this.sosEnviado = true;
        setTimeout(() => { this.sosEnviado = false; }, 4000);
      },
      error: () => {
        this.sosEnviando = false;
        alert('Não foi possível enviar o alerta. Tente novamente.');
      }
    });
  }
}