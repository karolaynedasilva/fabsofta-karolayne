import { Component, ElementRef, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute, ParamMap } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-paciente',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
  providers: [PacienteService, Router]
})
export class PacienteComponent {

  paciente: Paciente = new Paciente();

  // Buscando o #myModal encontra a referencia do html e guarda na variavel
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  //copiar a referncia do cliente para essa varivel 
  private pacienteSelecionado!: Paciente;

  public listaPacientes: Paciente[] = [];

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private activeRouter: ActivatedRoute
 ){}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(resposta => {
        this.listaPacientes = resposta;
    })
  }
  novo(){
    this.router.navigate(['/pacientes/novo'])
  }

  alterar(paciente:Paciente){
    this.router.navigate(['pacientes/alterar', paciente.id])
  }

  abrirConfirmacao(paciente:Paciente) {
    this.pacienteSelecionado = paciente;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.pacienteService.excluirPaciente(this.pacienteSelecionado.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.pacienteService.getPacientes().subscribe(
              pacientes => {
                this.listaPacientes = pacientes;
              }
            );
        },
        error => {
            console.error('Erro ao excluir paciente:', error);
        }
    );
  }
}
