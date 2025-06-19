import { Component, OnInit } from '@angular/core';
import { LembreteService } from '../service/lembrete.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Lembrete } from '../model/lembrete';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-paciente',
  standalone: true,
  templateUrl: './homepaciente.component.html',
  styleUrls: ['./homepaciente.component.css'],
  imports: [HttpClientModule, CommonModule, RouterLink] 
})
export class HomePacienteComponent implements OnInit {
  lembretes: Lembrete[] = [];
  pacienteId!: number;

  constructor(
    private lembreteService: LembreteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.lembreteService.listarPorPaciente(this.pacienteId)
      .subscribe(res => {
        this.lembretes = res;
      });
  }
}
