import { ActivatedRoute, Router } from "@angular/router";
import { AtividadeInterativa } from "../model/atividadeinterativa";
import { AtividadeInterativaService } from "../service/atividadeinterativa.service";
import { Component, OnInit } from "@angular/core";
import { HumorService } from "../service/humor.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-historico-paciente',
  standalone: true,
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css'],
  imports: [CommonModule]
})
export class HistoricoPacienteComponent implements OnInit {
  pacienteId!: number;
  listaHumor: any[] = [];
  atividades: AtividadeInterativa[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private humorService: HumorService,
    private atividadeService: AtividadeInterativaService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));

    this.humorService.listarPorPaciente(this.pacienteId).subscribe(h => {
      this.listaHumor = h;
    });

    this.atividadeService.listarPorPaciente(this.pacienteId).subscribe(a => {
      this.atividades = a;
    });
    
  }
    navegarParaHistorico() {
    const pacienteId = 1; // ou carregado de alguma lista de pacientes
    this.router.navigate(['/historico-paciente', pacienteId]);
  }

}
