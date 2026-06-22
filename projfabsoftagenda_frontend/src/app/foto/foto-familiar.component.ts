import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Paciente } from '../model/paciente';

import { PacienteService } from '../service/paciente.service';
import { FotoFamiliar } from '../model/foto-familiar';
import { FotoFamiliarService } from '../service/foto-familiar.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-foto-familiar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, HeaderComponent],
  templateUrl: './foto-familiar.component.html',
  styleUrl: './foto-familiar.component.css',
  providers: [FotoFamiliarService, PacienteService]
})
export class FotoFamiliarComponent {
  @ViewChild('formFotoFamiliar') formFotoFamiliar!: NgForm;

  fotoFamiliar: FotoFamiliar = new FotoFamiliar();
  pacientes: Paciente[] = [];
  mensagemSucesso: boolean = false;
  mensagemErro: string = '';


  constructor(
    private fotoFamiliarService: FotoFamiliarService,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(res => {
      this.pacientes = res;
    });

    this.fotoFamiliarService.listarTodas().subscribe(res => {
      // use se quiser mostrar as fotos na mesma tela
      // this.listaFotos = res;
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.fotoFamiliar.foto = base64String.split(',')[1];
        this.fotoFamiliar.arquivoFoto = file.name;
        this.fotoFamiliar.mimeType = file.type;
      };
      reader.readAsDataURL(file);
    }
  }

  salvar() {
    if (!this.formFotoFamiliar) return;

    this.mensagemSucesso = false;
    this.mensagemErro = '';

    if (this.formFotoFamiliar.valid) {
      this.fotoFamiliarService.salvar(this.fotoFamiliar).subscribe({
        next: () => {
          this.mensagemSucesso = true;
          this.fotoFamiliar = new FotoFamiliar();
          this.formFotoFamiliar.resetForm();
          setTimeout(() => this.mensagemSucesso = false, 4000);
        },
        error: err => {
          console.error('Erro ao salvar foto familiar:', err);
          this.mensagemErro = 'Erro ao salvar a imagem. Tente novamente.';
          setTimeout(() => this.mensagemErro = '', 4000);
        }
      });
    } else {
      this.formFotoFamiliar.form.markAllAsTouched();
    }
  }

}
