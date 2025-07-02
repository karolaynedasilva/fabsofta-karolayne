import { Component } from '@angular/core';
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

@Component({
  selector: 'app-paciente-home',
  standalone: true,
  templateUrl: './paciente-home.component.html',
  styleUrl: './paciente-home.component.css',
  imports: [CommonModule]
})
export class PacienteHomeComponent {
  pacienteId!: number;
  paciente!: Paciente;
  lembretes: Lembrete[] = [];
  fotos: FotoFamiliar[] = []; 
  atividades: AtividadeInterativa[] = [];
   humores: string[] = ['😖', '😟', '😐', '🙂', '😌'];
  humorSelecionado: string | null = null;
  humorEnviado = false;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private lembreteService: LembreteService,
    private fotoFamiliarService: FotoFamiliarService,
    private atividadeService: AtividadeInterativaService
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
      console.log('Fotos do paciente:', lista);
      this.fotos = lista;
    });
    this.atividadeService.listarPorPaciente(this.pacienteId).subscribe(lista => {
      console.log('Atividades do paciente:', lista);
      this.atividades = lista;
   });
  }
   selecionarHumor(emoji: string) {
    this.humorSelecionado = emoji;
    this.humorEnviado = false;
  }

  registrarHumor() {
    console.log("Humor selecionado:", this.humorSelecionado);
    this.humorEnviado = true;
    setTimeout(() => {
      this.humorSelecionado = null;
      this.humorEnviado = false;
    }, 2000);
  }
}


// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';

// import { PacienteService } from '../service/paciente.service';
// import { LembreteService } from '../service/lembrete.service';
// import { FotoFamiliarService } from '../service/foto-familiar.service';
// import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
// import { HumorService } from '../service/humor.service';

// import { Paciente } from '../model/paciente';
// import { Lembrete } from '../model/lembrete';
// import { FotoFamiliar } from '../model/foto-familiar';
// import { AtividadeInterativa } from '../model/atividadeinterativa';

// @Component({
//   selector: 'app-paciente-home',
//   standalone: true,
//   templateUrl: './paciente-home.component.html',
//   styleUrl: './paciente-home.component.css',
//   imports: [CommonModule]
// })
// export class PacienteHomeComponent {
//   pacienteId!: number;
//   paciente!: Paciente;

//   lembretes: Lembrete[] = [];
//   fotos: FotoFamiliar[] = [];
//   atividades: AtividadeInterativa[] = [];

//   humores: string[] = ['😖', '😟', '😐', '🙂', '😌'];
//   humorSelecionado: string | null = null;
//   humorEnviado = false;

//   constructor(
//     private route: ActivatedRoute,
//     private pacienteService: PacienteService,
//     private lembreteService: LembreteService,
//     private fotoFamiliarService: FotoFamiliarService,
//     private atividadeService: AtividadeInterativaService,
//     private humorService: HumorService
//   ) {}

//   ngOnInit(): void {
//     this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));

//     this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => {
//       this.paciente = p;
//     });

//     this.lembreteService.listarPorPaciente(this.pacienteId).subscribe(lista => {
//       this.lembretes = lista;
//     });

//     this.fotoFamiliarService.listarPorPaciente(this.pacienteId).subscribe(lista => {
//       this.fotos = lista;
//     });

//     this.atividadeService.listarPorPaciente(this.pacienteId).subscribe(lista => {
//       this.atividades = lista;
//     });
//   }

//   selecionarHumor(emoji: string) {
//     this.humorSelecionado = emoji;
//     this.humorEnviado = false;
//   }

//   registrarHumor() {
//     if (this.humorSelecionado) {
//       const payload = {
//         paciente: { id: this.pacienteId },
//         humor: this.humorSelecionado
//       };

//       this.humorService.salvar(payload).subscribe(() => {
//         this.humorEnviado = true;
//         setTimeout(() => {
//           this.humorSelecionado = null;
//           this.humorEnviado = false;
//         }, 2000);
//       });
//     }
//   }
// }
