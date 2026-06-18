import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../service/paciente.service';
import { LembreteService } from '../service/lembrete.service';
import { FotoFamiliarService } from '../service/foto-familiar.service';
import { AtividadeInterativaService } from '../service/atividadeinterativa.service';
import { MedicamentoService } from '../service/medicamento.service';
import { ContatoEmergenciaService } from '../service/contato-emergencia.service';
import { RegistroHumorService } from '../service/registro-humor.service';
import { AjudaService } from '../service/ajuda.service';
import { Paciente } from '../model/paciente';
import { Lembrete } from '../model/lembrete';
import { FotoFamiliar } from '../model/foto-familiar';
import { AtividadeInterativa } from '../model/atividadeinterativa';
import { Medicamento } from '../model/medicamento';
import { ContatoEmergencia } from '../model/contato-emergencia';

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
  medicamentos: Medicamento[] = [];
  contatos: ContatoEmergencia[] = [];

  humores = [
    { emoji: '😖', valor: 1 },
    { emoji: '😟', valor: 2 },
    { emoji: '😐', valor: 3 },
    { emoji: '🙂', valor: 4 },
    { emoji: '😌', valor: 5 }
  ];
  humorSelecionado: { emoji: string; valor: number } | null = null;
  humorEnviado = false;
  humorCarregando = false;

  ajudaEnviada = false;
  ajudaCarregando = false;

  confirmandoLembrete: number | null = null;
  confirmandoAtividade: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
    private lembreteService: LembreteService,
    private fotoFamiliarService: FotoFamiliarService,
    private atividadeService: AtividadeInterativaService,
    private medicamentoService: MedicamentoService,
    private contatoService: ContatoEmergenciaService,
    private humorService: RegistroHumorService,
    private ajudaService: AjudaService
  ) {}

  logout() {
    localStorage.removeItem('usuario_paciente');
    this.router.navigate(['/login/paciente']);
  }

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));

    this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => this.paciente = p);
    this.lembreteService.listarPorPaciente(this.pacienteId).subscribe(lista => this.lembretes = lista);
    this.fotoFamiliarService.listarPorPaciente(this.pacienteId).subscribe(lista => this.fotos = lista);
    this.atividadeService.listarPorPaciente(this.pacienteId).subscribe(lista => this.atividades = lista);
    this.medicamentoService.listarPorPaciente(this.pacienteId).subscribe(lista => this.medicamentos = lista.filter(m => m.ativo));
    this.contatoService.listarPorPaciente(this.pacienteId).subscribe(lista => this.contatos = lista);
  }

  get primeiroNome(): string {
    return this.paciente?.nome?.split(' ')[0] ?? '';
  }

  selecionarHumor(h: { emoji: string; valor: number }) {
    this.humorSelecionado = h;
    this.humorEnviado = false;
  }

  registrarHumor() {
    if (!this.humorSelecionado || this.humorCarregando) return;
    this.humorCarregando = true;
    this.humorService.registrar(this.pacienteId, this.humorSelecionado.emoji, this.humorSelecionado.valor).subscribe({
      next: () => {
        this.humorCarregando = false;
        this.humorEnviado = true;
        setTimeout(() => {
          this.humorSelecionado = null;
          this.humorEnviado = false;
        }, 3000);
      },
      error: () => this.humorCarregando = false
    });
  }

  pedirAjuda() {
    if (this.ajudaCarregando || this.ajudaEnviada) return;
    this.ajudaCarregando = true;
    this.ajudaService.pedirAjuda(this.pacienteId).subscribe({
      next: () => {
        this.ajudaCarregando = false;
        this.ajudaEnviada = true;
        setTimeout(() => this.ajudaEnviada = false, 8000);
      },
      error: () => {
        this.ajudaCarregando = false;
        alert('Erro ao enviar pedido de ajuda. Tente novamente.');
      }
    });
  }

  confirmarLembrete(id: number) {
    this.confirmandoLembrete = id;
    this.lembreteService.confirmar(id).subscribe({
      next: () => {
        const l = this.lembretes.find(x => x.id === id);
        if (l) l.confirmado = true;
        this.confirmandoLembrete = null;
      },
      error: () => this.confirmandoLembrete = null
    });
  }

  confirmarAtividade(id: number) {
    this.confirmandoAtividade = id;
    this.atividadeService.confirmar(id).subscribe({
      next: () => {
        const a = this.atividades.find(x => x.id === id);
        if (a) a.confirmado = true;
        this.confirmandoAtividade = null;
      },
      error: () => this.confirmandoAtividade = null
    });
  }
}
