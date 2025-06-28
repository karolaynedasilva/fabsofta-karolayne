import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../service/paciente.service';
import { LembreteService } from '../service/lembrete.service';
import { Paciente } from '../model/paciente';
import { Lembrete } from '../model/lembrete';
import { FotoFamiliar } from '../model/foto-familiar';
import { FotoFamiliarService } from '../service/foto-familiar.service';

@Component({
  selector: 'app-paciente-home',
  standalone: true,
  templateUrl: './paciente-home.component.html',
  styleUrl: './paciente-home.component.css',
  imports: []
})
export class PacienteHomeComponent {
  pacienteId!: number;
  paciente!: Paciente;
  lembretes: Lembrete[] = [];
  fotos: FotoFamiliar[] = []; // ou objeto, dependendo do seu model

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private lembreteService: LembreteService,
    private fotoFamiliarService: FotoFamiliarService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));

    this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => {
      this.paciente = p;
    });

    this.lembreteService.listarPorPaciente(this.pacienteId).subscribe(lista => {
      this.lembretes = lista;
    });

    this.fotoFamiliarService.listarPorPaciente(this.pacienteId).subscribe(lista => {
      this.fotos = lista;
    });
  }
}
