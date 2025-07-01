import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EvolucaoService } from '../service/evolucao-paciente.service';
import { EvolucaoPaciente } from '../model/evolucao-paciente';

@Component({
  selector: 'app-evolucao-paciente',
  standalone: true,
  templateUrl: './evolucao-paciente.component.html',
  styleUrl: './evolucao-paciente.component.css',
  imports: [CommonModule, HttpClientModule]
})
export class EvolucaoPacienteComponent {
  evolucoes: EvolucaoPaciente[] = [];
  pacienteId!: number;

  constructor(
    private route: ActivatedRoute,
    private evolucaoService: EvolucaoService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.evolucaoService.listarPorPaciente(this.pacienteId).subscribe(dados => {
      this.evolucoes = dados;
    });
  }
}
