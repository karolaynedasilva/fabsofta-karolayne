import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evolucao-dashboard',
  standalone: true,
  templateUrl: './evolucao-dashboard.component.html',
  styleUrl: './evolucao-dashboard.component.css',
  imports: [CommonModule, HttpClientModule, RouterLink]
})
export class EvolucaoDashboardComponent {
  pacientes: Paciente[] = [];

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(lista => {
      this.pacientes = lista;
    });
  }

  novaEvolucao(id: number) {
    this.router.navigate(['/evolucao/novo', id]);
  }

  verEvolucoes(id: number) {
    this.router.navigate(['/evolucao/paciente', id]);
  }
}
