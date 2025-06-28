import { Component, ViewChild, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Lembrete } from '../model/lembrete';
import { LembreteService } from '../service/lembrete.service';

@Component({
  selector: 'app-form-lembrete',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './form-lembrete.component.html',
  styleUrl: './form-lembrete.component.css',
  providers: [LembreteService, PacienteService, Router, provideNgxMask()]
})
export class FormLembreteComponent implements OnInit {
  lembrete: Lembrete = new Lembrete();
  pacientes: Paciente[] = [];

  @ViewChild('formLembrete') formLembrete!: NgForm;

  constructor(
    private lembreteService: LembreteService,
    private pacienteService: PacienteService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.lembreteService.getLembreteById(id).subscribe(lembrete => {
        this.lembrete = lembrete;
      });
    }
  }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(res => {
      this.pacientes = res;
    });
  }

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
