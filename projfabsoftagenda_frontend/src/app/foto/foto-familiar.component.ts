import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Paciente } from '../model/paciente';

import { PacienteService } from '../service/paciente.service';
import { FotoFamiliar } from '../model/foto-familiar';
import { FotoFamiliarService } from '../service/foto-familiar.service';


@Component({
  selector: 'app-foto-familiar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './foto-familiar.component.html',
  styleUrl: './foto-familiar.component.css',
  providers: [FotoFamiliarService, PacienteService]
})
export class FotoFamiliarComponent {
  @ViewChild('formFotoFamiliar') formFotoFamiliar!: NgForm;

  fotoFamiliar: FotoFamiliar = new FotoFamiliar();
  pacientes: Paciente[] = [];
  mensagemSucesso: boolean = false;


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

  // salvar() {
  //   if (this.formFotoFamiliar.valid) {
  //     this.fotoFamiliarService.salvar(this.fotoFamiliar).subscribe({
  //       next: () => this.router.navigate(['/fotos-familiares']),
  //       error: err => {
  //         console.error('Erro ao salvar foto familiar:', err);
  //         alert('Erro ao salvar imagem.');
  //       }
  //     });
  //   } else {
  //     this.formFotoFamiliar.form.markAllAsTouched();
  //   }
  // }

  salvar() {
  if (!this.formFotoFamiliar) return;

  if (this.formFotoFamiliar.valid) {
    this.fotoFamiliarService.salvar(this.fotoFamiliar).subscribe({
      next: () => this.router.navigate(['/fotos-familiares']),
      error: err => {
        console.error('Erro ao salvar foto familiar:', err);
        alert('Erro ao salvar imagem.');
      }
    });
  } else {
    this.formFotoFamiliar.form.markAllAsTouched();
  }
}

}
