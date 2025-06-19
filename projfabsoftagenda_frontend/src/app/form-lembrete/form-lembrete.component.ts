import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Paciente } from '../model/paciente';
import { Lembrete } from '../model/lembrete';
import { LembreteService } from '../service/lembrete.service';
import { PacienteService } from '../service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-lembrete',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form-lembrete.component.html',
  styleUrl: './form-lembrete.component.css',
  providers: [PacienteService, Router]
})
export class FormLembreteComponent {
  @ViewChild('formLembrete') formLembrete!: NgForm;
  lembrete: Lembrete = new Lembrete();
  pacientes: Paciente[] = [];

  constructor(
    private lembreteService: LembreteService,
    private pacienteService: PacienteService,
    private router: Router

    
  ) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(res => {
      this.pacientes = res;
    });
  }

  // salvar(){
  //     this.lembreteService.saveLembrete(this.lembrete)
  //         .subscribe( res => {
  //           this.router.navigate(['lembretes']);
  //         });
  //   }
  salvar() {
    if (this.formLembrete.valid) {
      this.lembreteService.saveLembrete(this.lembrete)
        .subscribe(res => {
          this.router.navigate(['lembretes']);
        });
    } else {
      this.formLembrete.form.markAllAsTouched();
    }
  }

}
