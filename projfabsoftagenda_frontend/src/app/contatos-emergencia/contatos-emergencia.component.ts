import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContatoEmergenciaService } from '../service/contato-emergencia.service';
import { PacienteService } from '../service/paciente.service';
import { ContatoEmergencia } from '../model/contato-emergencia';
import { Paciente } from '../model/paciente';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contatos-emergencia',
  standalone: true,
  templateUrl: './contatos-emergencia.component.html',
  styleUrl: './contatos-emergencia.component.css',
  imports: [CommonModule, FormsModule, HeaderComponent]
})
export class ContatosEmergenciaComponent implements OnInit {
  pacienteId!: number;
  paciente?: Paciente;
  contatos: ContatoEmergencia[] = [];
  novoContato: ContatoEmergencia = new ContatoEmergencia();
  editando: ContatoEmergencia | null = null;
  mostrarForm = false;
  mensagem = '';

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoEmergenciaService,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.pacienteService.getPacienteById(this.pacienteId).subscribe(p => this.paciente = p);
    this.carregar();
  }

  carregar() {
    this.contatoService.listarPorPaciente(this.pacienteId).subscribe(lista => this.contatos = lista);
  }

  abrirForm(contato?: ContatoEmergencia) {
    if (contato) {
      this.editando = contato;
      this.novoContato = { ...contato };
    } else {
      this.editando = null;
      this.novoContato = new ContatoEmergencia();
    }
    this.mostrarForm = true;
  }

  cancelar() {
    this.mostrarForm = false;
    this.editando = null;
    this.novoContato = new ContatoEmergencia();
  }

  salvar() {
    if (!this.novoContato.nome.trim() || !this.novoContato.telefone.trim()) return;
    this.novoContato.paciente = this.paciente;
    this.contatoService.salvar(this.novoContato).subscribe({
      next: salvo => {
        if (this.editando) {
          const idx = this.contatos.findIndex(c => c.id === this.editando!.id);
          if (idx !== -1) this.contatos[idx] = salvo;
        } else {
          this.contatos.push(salvo);
        }
        this.cancelar();
        this.mensagem = 'Contato salvo com sucesso.';
        setTimeout(() => this.mensagem = '', 3000);
      }
    });
  }

  excluir(id: number) {
    if (!confirm('Excluir este contato?')) return;
    this.contatoService.excluir(id).subscribe(() => {
      this.contatos = this.contatos.filter(c => c.id !== id);
    });
  }
}
